'use client'

import Comp from "@/components";
import { PageContext } from "@/components/RootLayout";
import { useContext } from "react";
export default function SXMBPage() {
  let { date } = useContext(PageContext);
  return (
    <div>
      <Comp.CompBody.BodyLiveSoXoMienNam locate="mien-nam" />
      <Comp.CompBody.BodySoDauDuoiMienNam date={date} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"vung-tau"} title={'Vũng Tàu'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"can-tho"} title={'Cần Thơ'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"dong-thap"} title={'Đồng Tháp'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"tp-hcm"} title={'TP Hồ Chí Minh'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"ca-mau"} title={'Cà Mau'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"ben-tre"} title={'Bến Tre'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"bac-lieu"} title={'Bạc Liêu'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"soc-trang"} title={'Sóc Trăng'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"dong-nai"} title={'Đồng Nai'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"an-giang"} title={'An Giang'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"tay-ninh"} title={'Tây Ninh'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"binh-thuan"} title={'Bình Thuận'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"vinh-long"} title={'Vĩnh Long'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"binh-duong"} title={'Bình Dương'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"tra-vinh"} title={'Trà Vinh'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"binh-phuoc"} title={'Bình Phước'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"hau-giang"} title={'Hậu Giang'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"kien-giang"} title={'Kiên Giang'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"tien-giang"} title={'Tiền Giang'} isSingle={true} />
      <Comp.CompBody.BodySoXoTheoTinhMienNam date={date} locate={"da-lat"} title={'Đà Lạt'} isSingle={true} />

    </div>
  );
}
