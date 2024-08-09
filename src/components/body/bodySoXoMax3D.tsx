'use client'
import 'moment/locale/vi'
import getSoXoMax3D from "@/apis/getSoXoMax3D";
import { useEffect, useState } from "react";
import moment from 'moment';

export default function bodySoXoMax3D({ date }: { date: string }) {
  const [data, setData] = useState<any>(undefined);

  useEffect(() => {
    initData()
  }, [date])
  const initData = async () => {
    const res = await getSoXoMax3D(date);
    setData(res);
  }

  if (!data) {
    return <></>
  }

  if (!data.date) {
    return <></>;
  }
  function chunkArray(array: string | any[], chunkSize: number) {
    return Array.from(
      { length: Math.ceil(array.length / chunkSize) },
      (_, index) => array.slice(index * chunkSize, (index + 1) * chunkSize)
    );
  }
  const BoardValue = () => {
    let arrayDataWidget = [];
    const left = [
      "1tr",
      "350k",
      "210k",
      "100k"
    ]
    const right = [
      "1 tỷ",
      "40 tr",
      "10 tr",
      "5 tr"
    ]
    if (data) {
      if (data.boards.db_nhat_nhi_ba.length > 0) {
        for (let i = 0; i < data.boards.db_nhat_nhi_ba.length; i++) {
          const element: string[] = data.boards.db_nhat_nhi_ba[i];
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
              <td className='border border-neutral-300 px-2 text-center'>
                {right[i]}
              </td>
            </tr>
          )
        }
        return arrayDataWidget;
      }
    }

    return <></>
  }

  const BoardValue2 = () => {
    const right = [
      "1 tr",
      "150k",
      "40k",
    ]
    if (data) {
      if (data.boards.tu_nam_sau.length > 0) {
        return data.boards.tu_nam_sau.map((item: string, key: number) => <tr key={key}>
          <td colSpan={2} className='border border-neutral-300 px-2'>
            <div >{item}</div>
          </td>
          <td className='border border-neutral-300 px-2 text-center'>
            {right[key]}
          </td>
        </tr>)
      }
    }

    return <></>
  }
  return (
    <section>
      <div className='container mx-auto relative bg-[#B500C5] px-1 py-1 rounded mb-3 shadow-lg'>
        <h6 className='text-center uppercase font-bold text-white text-base'>Xổ số Max 3D {moment(date, "DD-MM-YYYY").format("dddd")} ngày {date}</h6>
        <table className='table-auto w-full bg-white'>
          <thead>
            <tr>
              {
                data && data.boards.title.length > 0 && data.boards.title[0].map((e: string, k: number) => {
                  return <th key={"head" + k} className='border border-neutral-300 px-2'>
                    {e}
                  </th>
                })
              }
            </tr>
          </thead>
          <tbody>

            <BoardValue />

            <BoardValue2 />

          </tbody>
        </table>
      </div>

    </section>
  )
}