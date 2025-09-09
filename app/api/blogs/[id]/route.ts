import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function readDb() {
  const dbPath = path.join(process.cwd(), "data", "db.json");
  const file = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(file);
}

export async function PUT(req: Request) {
  try {
    const formData = await req.formData();
    const id = formData.get("id");

    // ✅ read fresh db every time
    const db = readDb();

    const blog = db.blogs.find((b: any) => b.id === id);
    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    blog.title = formData.get("title") as string;
    blog.metaTitle = formData.get("metaTitle") as string;
    blog.metaDesc = formData.get("metaDesc") as string;
    blog.author = formData.get("author") as string;
    blog.category = formData.get("category") as string;
    blog.content = formData.get("content") as string;

    const file = formData.get("image") as File | null;
    if (file) {
      const uploadsDir = path.join(process.cwd(), "public/uploads");
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }
      const filePath = path.join(uploadsDir, file.name);
      const buffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(filePath, buffer);

      blog.image = `/uploads/${file.name}`;
    }

    // ✅ write back
    const dbPath = path.join(process.cwd(), "data/db.json");
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

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
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const db = readDb();
    const blog = db.blogs.find((b: any) => b.id === params.id);

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
