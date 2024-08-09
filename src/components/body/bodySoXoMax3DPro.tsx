'use client'
import 'moment/locale/vi'
import getSoXoMax3DPro from "@/apis/getSoXoMax3DPro";
import { useEffect, useState } from "react";
import moment from 'moment';

export default function bodySoXoMax3DPro({ date }: { date: string }) {
  const [data, setData] = useState<any>(undefined);

  useEffect(() => {
    initData()
  }, [date])
  const initData = async () => {
    const res = await getSoXoMax3DPro(date);
    setData(res);
  }

  if (!data) {
    return <></>
  }

  if (!data.date) {
    return <></>
  }
  const BoardValue = () => {
    let arrayDataWidget = [];
    const left = [
      "2 tỷ",
      "30 triệu",
      "10 triệu",
      "4 triệu",
      "1 triệu",
      "100.000",
      "40.000",
      "400tr"
    ]
    if (data.boards.db_nhat_nhi_ba.length > 0) {
      for (let i = 0; i < data.boards.db_nhat_nhi_ba.length; i++) {
        const element = data.boards.db_nhat_nhi_ba[i];
        arrayDataWidget.push(
          <tr key={"row" + i}>
            <td className='border border-neutral-300 px-2 text-center'>
              {left[i]}
            </td>
            <td className='border border-neutral-300 px-2'>
              <div className='flex flex-row flex-wrap'>
                {element.map((item: string, index: number) => <div className='w-1/2 text-center font-bold text-xl' key={index}>{item}</div>)}
              </div>

            </td>
          </tr>
        )
      }
      return arrayDataWidget;
    }
    return <></>
  }

  return (
    <section>
      <div className='container mx-auto relative bg-[#B500C5] px-1 py-1 rounded mb-3 shadow-lg'>
        <h6 className='text-center uppercase font-bold text-white text-base'>Xổ số Max 3D PRO {moment(date, "DD-MM-YYYY").format("dddd")} ngày {date}</h6>
        <h3> {data.kyve}</h3>
        <table className='table-auto w-full bg-white'>
          <thead>
            <tr>
              <th className='border border-neutral-300 px-2'>
                Giải
              </th>
              <th className='border border-neutral-300 px-2'>
                Số quay thưởng
              </th>
            </tr>
          </thead>
          <tbody>
            <BoardValue />
          </tbody>
        </table>

      </div>
    </section>
  )
}