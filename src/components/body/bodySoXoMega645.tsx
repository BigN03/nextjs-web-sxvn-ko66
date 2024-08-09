'use client'
import 'moment/locale/vi'
import getSoXoMega645 from "@/apis/getSoXoMega645";
import moment from "moment";
import { useEffect, useState } from "react";

export default function bodySoXoMega645({ date }: { date: string }) {
  const [data, setData] = useState<any>(undefined);
  useEffect(() => {
    initData()
  }, [date])
  const initData = async () => {
    const res = await getSoXoMega645(date);

    setData(res);
  }

  if (!data) {
    return <></>
  }
  if (data.date == null) {
    return <></>
  }
  const BoardValue = () => {
    let arrayDataWidget = [];
    if (data.board) {
      if (data.board.length > 0) {
        for (let i = 0; i < data.board.length; i++) {
          const element = data.board[i];
          switch (i) {
            case 0:

            case 1:
              arrayDataWidget.push(<tr key={"mega645col" + i}>
                {
                  element.map((row: string, index: number) => {
                    if (index == 3) {
                      return <td key={"mega645col" + i + index} className='border-collapse border border-[#DCC3C8] text-center'>
                        {new Intl.NumberFormat().format(parseInt(row))}
                      </td>
                    }
                    return <td key={"mega645col" + i + index} className='border-collapse border border-[#DCC3C8] text-center'>
                      {row}
                    </td>
                  })
                }
              </tr>
              )
              break;
            default:
              arrayDataWidget.push(<tr key={"mega645col" + i} >
                {
                  element.map((row: string, index: number) => {
                    return <td key={"mega645col" + i + index} className='border-collapse border border-[#DCC3C8] text-center'>
                      {row}
                    </td>
                  })
                }
              </tr>
              )
              break;
          }
        }
        return arrayDataWidget;
      }
    }

    return <></>
  }

  const gradientValue = [
    'linear-gradient(180deg,#87B7FF, #003D99)',
    'linear-gradient(180deg,#88F1FF, #00B7D0)',
    'linear-gradient(180deg,#FFCB9A, #FF7A00)',
    'linear-gradient(180deg,#FFF387, #F68500)',
    'linear-gradient(180deg,#FF8686, #CB0000)',
    'linear-gradient(180deg,#FF83F3, #DB00C5)',
  ]
  return (
    <section>
      <div className='container mx-auto relative bg-[#FF0028] px-1 py-1 rounded mb-3 shadow-lg'>
        <h6 className='text-center uppercase font-bold text-white text-base'>Xổ số MEGA 6/45 {moment(date, "DD-MM-YYYY").format("dddd")} ngày {date}</h6>
        <div className='bg-white text-center border-b border-[#FF0028] py-1'>
          <span className='text-[#424852]'>Kỳ quay thưởng</span><span className='text-[#FF0028]'>  {data.type}</span>
        </div>
        <div
          className='bg-white py-2 flex flex-col items-center px-1'>
          <span className='text-[#424852]'>Giá trị Jackpot Mega 6/45 ước tính</span>
          <div
            style={{ background: 'linear-gradient(90deg,#FF4A67, #FF0028)' }}
            className='px-2 py-3 rounded-lg text-white font-bold'
          >{new Intl.NumberFormat().format(data.total)} VNĐ</div>
          <div className='flex flex-row w-full justify-center items-center py-4'>
            {data.value && data.value.map((item: string, key: number) => <div key={"mega645value" + key} style={{ background: gradientValue[key] }} className='w-10 h-10 rounded-full flex justify-center items-center mx-2 bg-red-600 font-bold text-white'>{item}</div>)}
          </div>
          <table className='table-auto w-full bg-white'>
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