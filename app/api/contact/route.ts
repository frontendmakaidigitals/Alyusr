import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import fs from "fs";
import path from "path";
type Contact = {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
  company: string;
  interest: string;
  location: string;
};
type DbData = {
  contacts: Contact[];
};

export async function POST(req: Request) {
  try {
    const { name, phone, email, message, location, company, interest } =
      await req.json();

    const dbDir = path.join(process.cwd(), "data");
    const dbPath = path.join(dbDir, "db.json");

    // Ensure data directory exists
    if (!fs.existsSync(dbDir)) {
      fs.mkdirSync(dbDir, { recursive: true });
    }

    // Ensure db.json exists with default structure
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(
        dbPath,
        JSON.stringify({ contacts: [] }, null, 2),
        "utf-8"
      );
    }

    // Read existing db
    const rawData = fs.readFileSync(dbPath, "utf-8");
    const db: DbData = JSON.parse(rawData);

    // Ensure contacts array exists
    if (!Array.isArray(db.contacts)) db.contacts = [];

    // Create new contact
    const newContact: Contact = {
      id: nanoid(),
      name,
      phone,
      email,
      message,
      company,
      interest,
      location,
      createdAt: new Date().toISOString(),
    };

    db.contacts.push(newContact);

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), "utf-8");

    return NextResponse.json({ success: true, contact: newContact });
  } catch (err) {
    console.error("Failed to add contact:", err);
    return NextResponse.json(
      { success: false, error: "Failed to add contact" },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const dbPath = path.join(process.cwd(), "data", "db.json");

    // If db.json doesn’t exist, return empty array
    if (!fs.existsSync(dbPath)) {
      return NextResponse.json({ success: true, contacts: [] });
    }

    const rawData = fs.readFileSync(dbPath, "utf-8");
    const db: DbData = JSON.parse(rawData);

    return NextResponse.json({
      success: true,
      contacts: Array.isArray(db.contacts) ? db.contacts : [],
    });
  } catch (err) {
    console.error("Failed to fetch contacts:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
