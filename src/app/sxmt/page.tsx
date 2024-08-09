'use client'

import Comp from "@/components";
import { PageContext } from "@/components/RootLayout";
import { useContext } from "react";
export default function SXMBPage() {
  let { date } = useContext(PageContext);
  return (
    <div>
      <Comp.CompBody.BodyLiveSoXoMienTrung locate="mien-trung" />
      <Comp.CompBody.BodySoDauDuoiMienTrung date={date} />
      <Comp.CompBody.BodySoXoTheoTinhMienTrung date={date} locate={"thua-thien-hue"} title={'Thừa Thiên Huế'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienTrung date={date} locate={"dak-lak"} title={'Đắk Lắk'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienTrung date={date} locate={"quang-nam"} title={'Quảng Nam'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienTrung date={date} locate={"khanh-hoa"} title={'Khánh Hòa'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienTrung date={date} locate={"da-nang"} title={'Đà Nẵng'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienTrung date={date} locate={"binh-dinh"} title={'Bình Định'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienTrung date={date} locate={"quang-binh"} title={'Quảng Bình'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienTrung date={date} locate={"quang-tri"} title={'Quảng Trị'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienTrung date={date} locate={"ninh-thuan"} title={'Ninh Thuận'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienTrung date={date} locate={"gia-lai"} title={'Gia Lai'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienTrung date={date} locate={"quang-ngai"} title={'Quảng Ngãi'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienTrung date={date} locate={"dak-nong"} title={'Đắk Nông'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienTrung date={date} locate={"kon-tum"} title={'Kon Tum'} isSingle={true} />

    </div>
  );
}
