"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// ✅ Import db.json directly
import db from "@/data/db.json";

const Page = () => {
  // Assuming db.json looks like: { "contact": [ { ... }, ... ] }
  const contacts = db.contacts;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">All Queries</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Subject</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((query) => (
            <TableRow key={query.id}>
              <TableCell>
                {query.createdAt
                  ? new Date(query.createdAt).toLocaleDateString()
                  : "N/A"}
              </TableCell>
              <TableCell>{query.name}</TableCell>
              <TableCell>{query.phone}</TableCell>
              <TableCell>{query.email}</TableCell>
              <TableCell>{query.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
