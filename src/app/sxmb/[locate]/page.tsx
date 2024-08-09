'use client'

import Comp from "@/components";
import { PageContext } from "@/components/RootLayout";
import { useParams } from "next/navigation";
import { useContext } from "react";
export default function SXMBPageLocate() {
  let { date } = useContext(PageContext);
  const params = useParams<{ locate: string }>()
  return (
    <div>
      <Comp.CompBody.BodySoXoTheoTinhMienBac date={date} locate={params.locate} title={''} isSingle={false} />
    </div>
  );
}
