import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/lib/context";

export const metadata: Metadata = {
  title: "وكالة عبود الرقمية | Aboud Web Agency - $250+",
  description: "وكالة رقمية متخصصة في تطوير وبناء المواقع والمنصات الفاخرة، الواجهات الزجاجية، وحلول الذكاء الاصطناعي بدءاً من $250.",
  keywords: ["ويب", "تطوير مواقع", "Next.js", "ذكاء اصطناعي", "تصميم مواقع", "Aboud Web"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" data-theme="dark">
      <body className="antialiased bg-black text-white">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
