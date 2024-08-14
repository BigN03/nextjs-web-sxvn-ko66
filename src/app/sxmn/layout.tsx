import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sổ Xố Miền Nam",
  description: "Goldman - KQXS 3 miền - KQXS Hôm nay",
  icons: "/GMVS_favi.svg",
  keywords: ["soxovn", "soxokienthiet"]
};
export default function SXMBLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}