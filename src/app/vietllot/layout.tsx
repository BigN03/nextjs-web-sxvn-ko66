import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sổ Xố Điện Toán",
  description: "Goldman - KQXS 3 miền - KQXS Hôm nay",
  icons: "/GMVS_favi.svg",
  keywords: ["soxovn", "soxokienthiet"]
  
};
export default function SXDTLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}