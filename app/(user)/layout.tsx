import Navbar from "./Header/Navbar";
import Footer from "./app_chunks/Footer";
import FloatingWhatsappIcon from "./app_chunks/FloatingWhatsappIcon";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <FloatingWhatsappIcon />
      {children}
      <Footer />
    </>
  );
}
