import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const metaTitle = formData.get("metaTitle") as string;
    const metaDesc = formData.get("metaDesc") as string;
    const author = formData.get("author") as string;
    const category = formData.get("category") as string;
    const content = formData.get("content") as string;
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file uploaded" },
        { status: 400 }
      );
    }

    const uploadsDir = "/var/www/your-app/uploads";
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Save file to VPS
    const filePath = path.join(uploadsDir, file.name);
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    const imageUrl = `/uploads/${file.name}`;

    const blog = {
      title,
      metaTitle,
      metaDesc,
      author,
      category,
      content,
      image: imageUrl,
    };

    // Save to db.json or database
    // Example:
    // const dbPath = path.join(process.cwd(), "db.json");
    // ... load JSON, push blog, save ...

    return NextResponse.json({ success: true, blog });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Upload failed" },
      { status: 500 }
    );
  }
}
