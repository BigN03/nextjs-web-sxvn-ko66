'use client'
import getSoDauDuoiMienNam from '@/apis/getSoDauDuoiMienNam';
import moment from 'moment';
import 'moment/locale/vi'
import { useEffect, useState } from 'react';
export default function BodySoDauDuoiMienNam({ date }: { date: string }) {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initData()
  }, [date])

  const initData = async () => {
    setIsLoading(true);
    const res = await getSoDauDuoiMienNam(date);
    setIsLoading(false);
    setData(res);
  }

  if (data.length == 0) {
    return <></>
  }

  const DauDuoi = ({ values }: { values: string[] }) => {
    return <><span className='text-blue-600'>{values[0]}</span><span className='text-red-600'>{values[1]}</span></>
  }
  return <div className="mb-3 shadow-lg bg-white border-2 border-[#F76C82] rounded p-1">
    <table className='table-auto w-full'>
      <tbody>
        <tr className='border-collapse '>
          <td colSpan={4} className='border-collapse border border-[#D1BABE] text-center text-[#424852] font-bold'>
            Bảng Lô Tô Miền Nam / Lô XSMN {moment(date, "DD-MM-YYYY").format('dddd')}
          </td>
        </tr>
        <tr className='border-collapse'>
          <th className='border-collapse border border-[#D1BABE] text-center text-[#424852]'>
            Tỉnh
          </th>
          <th className='border-collapse border border-[#D1BABE] text-center text-[#424852]'>
            Đầu đuôi
          </th>
        </tr>
        {
          data.map((e: any, i: number) => <tr key={i} className='border-collapse'>
            <td className='border-collapse border border-[#D1BABE] text-center font-bold'>
              {e.locate}
            </td>
            <td className='border-collapse border border-[#D1BABE] text-center text-black font-bold'>
              <DauDuoi values={e.value.split(",")} />
            </td>
          </tr>)
        }

      </tbody>
    </table>
  </div>
}