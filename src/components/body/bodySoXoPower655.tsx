'use client'
import 'moment/locale/vi'
import getSoXoPower655 from "@/apis/getSoXoPower655";
import moment from "moment";
import { useEffect, useState } from "react";

export default function BodySoXoPower655({ date }: { date: string }) {
  const [data, setData] = useState<any>(undefined);
  useEffect(() => {

    initData()
  }, [date])
  const initData = async () => {
    const res = await getSoXoPower655(date);
    setData(res);
  }



  const BoardValue = () => {
    let arrayDataWidget = [];
    if (data && data.boards) {
      if (data.boards.length > 0) {
        for (let i = 0; i < data.boards.length; i++) {
          const element = data.boards[i];
          if (i == 0) {
            arrayDataWidget.push(<tr key={"power655col" + i}>
              {
                element.map((row: string, index: number) => {
                  if (index == 3) {
                    return <td key={"power655col" + i + index} className='border-collapse border border-[#DCC3C8] text-center'>
                      {new Intl.NumberFormat().format(parseInt(row))}
                    </td>
                  }
                  return <td key={"power655col" + i + index} className='border-collapse border border-[#DCC3C8] text-center'>
                    {row}
                  </td>
                })
              }
            </tr>
            )
          } else {
            arrayDataWidget.push(<tr key={"power655col" + i}>
              {
                element.map((row: string, index: number) => {
                  return <td key={"power655col" + i + index} className='border-collapse border border-[#DCC3C8] text-center'>
                    {row}
                  </td>
                })
              }
            </tr>
            )
          }

        }
        return arrayDataWidget;
      }
    }

    return <></>
  }

  if (!data) {
    return <></>
  }
  console.log(data);
  if (data.date == null) {
    return <></>
  }
  const gradientValue = [
    'linear-gradient(180deg,#FFF387, #F68500)',
    'linear-gradient(180deg,#FFF387, #F68500)',
    'linear-gradient(180deg,#FFF387, #F68500)',
    'linear-gradient(180deg,#FFF387, #F68500)',
    'linear-gradient(180deg,#FFF387, #F68500)',
    'linear-gradient(180deg,#FFF387, #F68500)',
    'linear-gradient(180deg,#FFAB87, #F62C00)',
  ]

  const values = data ? `${data.value}`.split(",") : [];
  return (
    <section>
      <div className='container mx-auto relative bg-[#FF0028] px-1 py-1 rounded mb-3 shadow-lg'>
        <h6 className='text-center uppercase font-bold text-white text-base'>Xổ số POWER 6/55 {moment(date, "DD-MM-YYYY").format("dddd")} ngày {date}</h6>
        <div className='bg-white text-center border-b border-[#FF0028] py-1'>
          <span className='text-[#424852]'>Kỳ quay thưởng</span><span className='text-[#FF0028]'>  {data && data.type}</span>
        </div>
        <div className='flex flex-row w-full justify-center items-center py-4 bg-white'>
          {values.map((item: string, key: number) => <div key={"power655" + key} style={{ background: gradientValue[key] }} className='w-10 h-10 rounded-full flex justify-center items-center mx-2 border border-red-600 font-bold text-white'>{item}</div>)}
        </div>
        <div
          className='bg-white py-2 flex flex-col items-center px-1'>
          <span className='text-[#424852]'>Giá trị Jackpot 1 Power 6/55 ước tính</span>
          <div
            style={{ background: 'linear-gradient(90deg,#FF4A67, #FF0028)' }}
            className='px-2 py-3 rounded-lg text-white font-bold'
          >{data && new Intl.NumberFormat().format(data.jackpot1)} VNĐ</div>
          <span className='text-[#424852]'>Giá trị Jackpot 2 Power 6/55 ước tính</span>
          <div
            style={{ background: 'linear-gradient(90deg,#FF4A67, #FF0028)' }}
            className='px-2 py-3 rounded-lg text-white font-bold'
          >{data && new Intl.NumberFormat().format(data.jackpot2)} VNĐ</div>

          <table className='table-auto w-full bg-white mt-3'>
            <thead>
              <tr className='border-collapse'>
                <th className='border-collapse bg-[#FFE0E599] border border-[#DCC3C8]'>
                  Giải
                </th>
                <th className='border-collapse bg-[#FFE0E599] border border-[#DCC3C8]'>
                  Trùng khớp
                </th>
                <th className='border-collapse bg-[#FFE0E599] border border-[#DCC3C8]'>
                  Số lượng
                </th>
                <th className='border-collapse bg-[#FFE0E599] border border-[#DCC3C8]'>
                  Giá trị (đ)
                </th>
              </tr>
            </thead>
            <tbody>
              <BoardValue />
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}