import { NextResponse, NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import zlib from "zlib";

const dbPath = path.join(process.cwd(), "data", "db.json");
const uploadsDir = path.join(process.cwd(), "data/uploads");

// --- Utility Functions ---

async function readDb() {
  const file = await fs.promises.readFile(dbPath, "utf-8");
  const db = JSON.parse(file);
  interface Blog {
    id: string | number;
    title: string;
    metaTitle: string;
    metaDesc: string;
    author: string;
    category: string;
    content: string;
    image?: string;
  }

  interface DbStructure {
    blogs: Blog[];
  }

    // ✅ Decompress blog contents
    if (Array.isArray(db.blogs)) {
      db.blogs = db.blogs.map((b: Blog): Blog => {
        if (b.content && typeof b.content === "string" && b.content.startsWith("gz:")) {
          try {
            const compressed = Buffer.from(b.content.slice(3), "base64");
            const decompressed = zlib.gunzipSync(compressed).toString("utf-8");
            b.content = decompressed;
          } catch (err) {
            console.warn("⚠️ Failed to decompress content for blog:", b.id, err);
          }
      }
      return b;
    });
  }

  return db;
}

// Debounced async write
let pendingWrite: any = null;
let writeTimer: NodeJS.Timeout | null = null;

async function writeDb(data: any) {
  pendingWrite = data;
  if (writeTimer) clearTimeout(writeTimer);

  writeTimer = setTimeout(async () => {
    try {
      await fs.promises.writeFile(dbPath, JSON.stringify(pendingWrite, null, 2), "utf-8");
      console.log("✅ Database saved successfully");
    } catch (err) {
      console.error("❌ Failed to save database:", err);
    } finally {
      pendingWrite = null;
    }
  }, 800);
}

// --- API Routes ---

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const formData = await req.formData();
    const db = await readDb();

    const blog = db.blogs.find((b: any) => b.id == id);
    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // --- Update fields ---
    blog.title = formData.get("title") as string;
    blog.metaTitle = formData.get("metaTitle") as string;
    blog.metaDesc = formData.get("metaDesc") as string;
    blog.author = formData.get("author") as string;
    blog.category = formData.get("category") as string;

    // --- Compress content before saving ---
    const rawContent = formData.get("content") as string;
    if (rawContent && rawContent.length > 0) {
      const compressed = zlib.gzipSync(rawContent);
      blog.content = "gz:" + compressed.toString("base64");
    }

    // --- Handle image upload ---
    const file = formData.get("image") as File | null;
    if (file && file.size > 0) {
      await fs.promises.mkdir(uploadsDir, { recursive: true });

      if (blog.image && blog.image !== file.name) {
        const oldPath = path.join(uploadsDir, blog.image);
        if (fs.existsSync(oldPath)) {
          try {
            await fs.promises.unlink(oldPath);
            console.log(`🗑️ Deleted old image: ${oldPath}`);
          } catch (err) {
            console.error("⚠️ Failed to delete old image:", err);
          }
        }
      }

      const filePath = path.join(uploadsDir, file.name);
      const buffer = Buffer.from(await file.arrayBuffer());
      await fs.promises.writeFile(filePath, buffer);
      blog.image = file.name;
    }

    await writeDb(db);

    return NextResponse.json({ success: true, blog });
  } catch (err) {
    console.error("Update failed:", err);
    return NextResponse.json(
      { success: false, error: "Update failed" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = await readDb();
    const blog = db.blogs.find((b: any) => String(b.id) === id);

    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, blog });
  } catch (err) {
    console.error("Fetch failed:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
