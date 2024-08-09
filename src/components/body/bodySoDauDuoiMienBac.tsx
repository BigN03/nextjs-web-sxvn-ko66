'use client'
import getSoDauDuoiMienbac from '@/apis/getSoDauDuoiMienBac';
import moment from 'moment';
import 'moment/locale/vi'
import { useEffect, useState } from 'react';
export default function BodySoDauDuoiMienBac({ date }: { date: string }) {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initData()
  }, [date])

  const initData = async () => {
    setIsLoading(true);
    const res = await getSoDauDuoiMienbac(date);
    setIsLoading(false);
    setData(res);
  }

  if (data.length == 0) {
    return <></>
  }

  return <div className="mb-3 shadow-lg bg-white border-2 border-[#F76C82] rounded p-1">
    <table className='table-auto w-full'>
      <tbody>
        <tr className='border-collapse '>
          <td colSpan={4} className='border-collapse border border-[#D1BABE] text-center text-[#424852] font-bold'>
            Bảng Lô Tô Miền Bắc / Lô XSMB {moment(date, "DD-MM-YYYY").format('dddd')}
          </td>
        </tr>
        <tr className='border-collapse'>
          <th className='border-collapse border border-[#D1BABE] text-center text-[#424852]'>
            Giải đặc biệt
          </th>
          <th className='border-collapse border border-[#D1BABE] text-center text-[#424852]'>
            Giải bảy
          </th>
        </tr>
        <tr className='border-collapse'>
          <td className='border-collapse border border-[#D1BABE] text-center font-bold'>
            <span className='text-blue-600'>{data[0].gaidb_xanh}</span><span className='text-red-600'>{data[0].gaidb_do}</span>
          </td>
          <td className='border-collapse border border-[#D1BABE] text-center text-black font-bold'>
            {data[0].giai_bay}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
}