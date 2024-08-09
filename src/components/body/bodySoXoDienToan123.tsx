'use client'
import 'moment/locale/vi'
import getSoXoDienToan123 from "@/apis/getSoXoDienToan123";
import { useEffect, useState } from "react";

export default function bodySoXoDienToan123({ date }: { date: string }) {
  const [data, setData] = useState<any>(undefined);

  useEffect(() => {
    initData()
  }, [date])
  const initData = async () => {
    const res = await getSoXoDienToan123(date);
    setData(res);
  }


  if (!data) {
    return <div></div>
  }
  if (!data.date) {
    return <></>
  }
  return (
    <section>
      <div className='container mx-auto relative bg-neutral-100 px-1 py-1 rounded mb-3 shadow-lg'>
        <h2 className='text-center uppercase font-bold text-red-600 my-4'>Kết quả sổ xố điện toán 123 ngày {date}</h2>
        <table className='table-auto w-full'>
          <tbody>
            <tr>
              <td colSpan={99} className='border border-neutral-300 px-2'>
                <div className='flex flex-row w-full justify-center items-center py-4'>
                  {data.boso1 && <div className='w-10 h-10 rounded-full flex justify-center items-center border border-black mx-2 bg-red-600 font-bold text-white'>{data.boso1}</div>}
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={99} className='border border-neutral-300 px-2'>
                <div className='flex flex-row w-full justify-center items-center py-4'>
                  {data.boso2 && data.boso2.map((item: string, key: string) => <div key={key} className='w-10 h-10 rounded-full flex justify-center items-center border border-black mx-2 bg-red-600 font-bold text-white'>{item}</div>)}
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={99} className='border border-neutral-300 px-2'>
                <div className='flex flex-row w-full justify-center items-center py-4'>
                  {data.boso3 && data.boso3.map((item: string, key: string) => <div key={key} className='w-10 h-10 rounded-full flex justify-center items-center border border-black mx-2 bg-red-600 font-bold text-white'>{item}</div>)}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}