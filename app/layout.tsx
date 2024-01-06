import type { Metadata } from "next";
// import { Montserrat } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { ThemeProvider } from "@/components/NextThemeProvider";
import AuthProvider from "@/components/AuthProvider";

// const montserrat = Montserrat({
//   subsets: ["cyrillic"],
//   weight: ["400", "700", "900"],
//   variable: "--font-Montserrat",
//   preload: false,
// });

export const metadata: Metadata = {
  title: {
    template: `%s | Ogsoftsolutions`,
    default: 'Ogsoft Solutions'
  },
  description: "HMS at it's best.",
  //   icons: {
  //     icon: "/logo.png",
  //   },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="main dark:hidden">
              <div className="gradient dark:hidden" />
            </div>
              <div className="overflow-x-hidden relative">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
