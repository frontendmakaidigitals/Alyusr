import { ReactNode } from "react";

import { AppSidebar } from "../(user)/app_chunks/app-sidebar";

import Head from "./head";

import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <Head />
        <main className="container mt-7">{children}</main>
      </div>
    </SidebarProvider>
  );
}
