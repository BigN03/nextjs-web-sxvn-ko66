'use client'

import Comp from "@/components";
import { PageContext } from "@/components/RootLayout";
import { useContext } from "react";
export default function SXMBPage() {
  let { date } = useContext(PageContext);
  return (
    <div>
      <Comp.CompBody.BodySoXoMega645 date={date} />
      <Comp.CompBody.BodySoXoPower655 date={date} />
      <Comp.CompBody.BodySoXoMax3D date={date} />
      <Comp.CompBody.BodySoXoMax3DPro date={date} />
      <Comp.CompBody.BodySoXoDienToan123 date={date} />
      <Comp.CompBody.BodySoXoDienToan6X36 date={date} />
      <Comp.CompBody.BodySoXoThanTai date={date} />
    </div>
  );
}
