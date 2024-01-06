import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContextProvider } from "@/context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ContextProvider>
        <main className="flex-grow flex-1">{children}</main>
      </ContextProvider>
      <Footer />
    </div>
  );
}
