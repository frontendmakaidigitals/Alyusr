import { join } from "path";

import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

type Contact = {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string; // ISO string for date
};

type Data = {
  contacts: Contact[];
};

const file = join(process.cwd(), "db.json"); // stored in project root
const adapter = new JSONFile<Data>(file);
const db = new Low<Data>(adapter, { contacts: [] });

export default db;
