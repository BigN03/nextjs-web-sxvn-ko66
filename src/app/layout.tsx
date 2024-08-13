import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "GOLDMAN - KẾT QUẢ XỔ SỐ 3 MIỀN - KQXS HÔM NAY",
  description: "Goldman - KQXS 3 miền - KQXS Hôm nay",
  icons: "/logo.svg",
  keywords: ["soxovn", "soxokienthiet"]
};
import Comp from "@/components";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <Comp.MainLayout>
          {children}
        </Comp.MainLayout>
      </body>
    </html>
  );
}
