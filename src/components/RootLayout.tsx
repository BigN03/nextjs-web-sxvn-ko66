'use client'

import moment from "moment";
import React, { createContext, useState } from "react"
import Comp from "@/components";
export const PageContext = createContext<{ date: string }>({
  date: moment().format("DD-MM-YYYY"),
});
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [date, setDate] = useState(moment().format("DD-MM-YYYY"));
  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      <Comp.CompAppHeader />
      <main className="flex-1 flex-col w-full relative py-2">
        <div
          style={{ background: "linear-gradient(#ffcd9f, #ff859d)" }}
          className="absolute top-0 left-0 w-full h-full bg-repeat-y bg-center bg-cover -z-20 opacity-100"></div>
        <div
          style={{ backgroundImage: `url('/assets/bg-ve-so.png')` }}
          className="absolute w-full h-full bg-contain -z-5 opacity-50">
            
          </div>
        <Comp.CompAppNav />
        <div className="flex flex-row justify-center items-center max-w-[1280px] w-11/12 mx-auto relative pt-4">
          <div className="container mx-auto rounded max-w-[1200px]" >
            <div className="grid grid-cols-12 gap-2">
              <div className="hidden md:block md:col-span-4 lg:col-span-3">
                <Comp.CompAppColLeft setDate={(date: string) => setDate(date)} />
              </div>
              <div
                className="col-span-12 md:col-span-8 lg:col-span-9">
                <PageContext.Provider value={{ date }}>{children}</PageContext.Provider>
              </div>
              {/* <div className="col-span-3">
                <Comp.CompAppColRight />
              </div> */}
            </div>
          </div>
        </div>

      </main>

    </div>
  )
}