'use client'
import Comp from "@/components";
import { PageContext } from "@/components/RootLayout";
import { useContext } from "react";
export default function Home() {
  let { date } = useContext(PageContext);
  return (
    <>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16597066183">
      </script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'AW-16597066183');
      </script>
      <div className="w-full text-center rounded shadow-lg bg-white flex flex-row items-center justify-center mb-2 py-2">
        <span className="font-bold">VESO KO66 - Kết quả xổ số 3 miền - KQXS Hôm nay</span>
      </div>
      {/* <Comp.CompAppLocation /> */}
      <Comp.CompBody.BodyLiveSoXoMienBac locate="mien-bac" />
      <Comp.CompBody.BodySoDauDuoiMienBac date={date} />
      <Comp.CompBody.BodyLiveSoXoMienTrung locate="mien-trung" />
      <Comp.CompBody.BodySoDauDuoiMienTrung date={date} />
      <Comp.CompBody.BodyLiveSoXoMienNam locate="mien-nam" />
      <Comp.CompBody.BodySoDauDuoiMienNam date={date} />
      <Comp.CompBody.BodySoXoMega645 date={date} />
      <Comp.CompBody.BodySoXoPower655 date={date} />
      <Comp.CompBody.BodySoXoMax3D date={date} />
      <Comp.CompBody.BodySoXoMax3DPro date={date} />
      <Comp.CompBody.BodySoXoDienToan6X36 date={date} />
      <Comp.CompBody.BodySoXoDienToan123 date={date} />
      <Comp.CompBody.BodySoXoThanTai date={date} />
    </>
  );
}
