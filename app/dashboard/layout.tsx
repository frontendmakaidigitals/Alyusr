import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "../(user)/app_chunks/app-sidebar";
import { ReactNode } from "react";
import Head from "./head";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <Head />
        <main className="container mt-7">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
