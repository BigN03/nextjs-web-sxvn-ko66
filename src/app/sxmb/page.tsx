'use client'

import Comp from "@/components";
import { PageContext } from "@/components/RootLayout";
import { useContext } from "react";
export default function SXMBPage() {
  let { date } = useContext(PageContext);
  return (
    <div>
      <Comp.CompBody.BodyLiveSoXoMienBac locate="mien-bac" />
      <Comp.CompBody.BodySoDauDuoiMienBac date={date} />
      <Comp.CompBody.BodySoXoTheoTinhMienBac date={date} locate={"nam-dinh"} title={'Nam Định'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienBac date={date} locate={"ha-noi"} title={'Hà Nội'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienBac date={date} locate={"thai-binh"} title={'Thái Bình'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienBac date={date} locate={"quang-ninh"} title={'Quảng Ninh'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienBac date={date} locate={"bac-ninh"} title={'Bắc Ninh'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienBac date={date} locate={"hai-phong"} title={'Hải Phòng'} isSingle={true} />
    </div>
  );
}
