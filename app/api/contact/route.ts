import { NextResponse } from "next/server";
import db from "@/app/(user)/lib/db";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  const { name, phone, email, message } = await req.json();

  await db.read();
  db.data ||= { contacts: [] };

  db.data.contacts.push({
    id: nanoid(),
    name,
    phone,
    email,
    message,
    createdAt: new Date().toISOString(), 
  });

  await db.write();

  return NextResponse.json({ success: true });
}
