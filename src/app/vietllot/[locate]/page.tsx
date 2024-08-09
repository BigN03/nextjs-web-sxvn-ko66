'use client'

import Comp from "@/components";
import { PageContext } from "@/components/RootLayout";
import { useParams } from "next/navigation";
import { useContext } from "react";
export default function SXMTPageLocate() {
  let { date } = useContext(PageContext);
  const params = useParams<{ locate: string }>()

  switch (params.locate) {
    case "sxmega645":
      return <Comp.CompBody.BodySoXoMega645 date={date} />
    case "sxpower655":
      return <Comp.CompBody.BodySoXoPower655 date={date} />
    case "sxmax3d":
      return <Comp.CompBody.BodySoXoMax3D date={date} />
    case "sxmax3dpro":
      return <Comp.CompBody.BodySoXoMax3DPro date={date} />
    case "thantai":
      return <Comp.CompBody.BodySoXoThanTai date={date} />
    case "dientoan6x36":
      return <Comp.CompBody.BodySoXoDienToan6X36 date={date} />
    case "dientoan123":
      return <Comp.CompBody.BodySoXoDienToan123 date={date} />
  }
  return (
    <div>  
    </div>
  );
}
