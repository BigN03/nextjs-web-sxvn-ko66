import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sổ Xố Miền Bắc",
  description: "Goldman - KQXS 3 miền - KQXS Hôm nay",
  icons: "/logo.svg",
  keywords: ["kqxsgm", "kqxsgoldman", "xosonhanh"]
};
export default function SXMBLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}