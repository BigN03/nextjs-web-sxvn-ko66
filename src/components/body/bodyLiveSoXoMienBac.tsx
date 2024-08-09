'use client'
import 'moment/locale/vi'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import getSoXoTrucTiepTheoMien from '@/apis/getSoXoTrucTiepTheoMien';

export default function BodyLiveSoXoMienBac({ locate }: { locate: string }) {
  const [data, setData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initData()
  }, [locate])

  const initData = async () => {
    setIsLoading(true);
    const res = await getSoXoTrucTiepTheoMien(locate);
    setIsLoading(false);
    setData(res);
  }
  console.log(data);
  if (!data) {
    return <></>
  }
  const TBodyGiai7 = () => {
    return <tr>
      <td className='text-center border border-[#D1BABE] w-10'>
        G. 7
      </td>
      <td colSpan={3} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
        {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_7 ? data.kqxstt.giai_7[0] : null)}
      </td>
      <td colSpan={3} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
        {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_7 ? data.kqxstt.giai_7[1] : null)}
      </td>
      <td colSpan={3} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
        {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_7 ? data.kqxstt.giai_7[2] : null)}
      </td>
      <td colSpan={3} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
        {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_7 ? data.kqxstt.giai_7[3] : null)}
      </td>
    </tr>
  }
  const TBodyGiai6 = () => {
    return <tr>
      <td className='text-center border border-[#D1BABE] w-10'>
        G. 6
      </td>
      <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold'>
        {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_6 ? data.kqxstt.giai_6[0] : null)}
      </td>
      <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold'>
        {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_6 ? data.kqxstt.giai_6[1] : null)}
      </td>
      <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold'>
        {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_6 ? data.kqxstt.giai_6[2] : null)}
      </td>
    </tr>
  }
  const TBodyGiai5 = () => {
    return <>
      <tr className='border-collapse'>
        <td rowSpan={2} className='text-center border-collapse border border-[#D1BABE] w-10'>
          G. 5
        </td>
        <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_5 ? data.kqxstt.giai_5[0] : null)}
        </td>
        <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_5 ? data.kqxstt.giai_5[1] : null)}
        </td>
        <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_5 ? data.kqxstt.giai_5[2] : null)}
        </td>
      </tr>
      <tr>
        <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
          {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_5 ? data.kqxstt.giai_5[3] : null)}
        </td>
        <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
          {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_5 ? data.kqxstt.giai_5[4] : null)}
        </td>
        <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
          {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_5 ? data.kqxstt.giai_5[5] : null)}
        </td>
      </tr>
    </>
  }
  const TBodyGiai4 = () => {
    return <>
      <tr className='border-collapse'>
        <td rowSpan={2} className='text-center border-collapse border border-[#D1BABE] w-10'>
          G. 4
        </td>
        <td colSpan={6} className='text-center border-collapse border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_4 ? data.kqxstt.giai_4[0] : null)}
        </td>
        <td colSpan={6} className='text-center border-collapse border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_4 ? data.kqxstt.giai_4[1] : null)}
        </td>
      </tr>
      <tr>
        <td colSpan={6} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
          {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_4 ? data.kqxstt.giai_4[2] : null)}
        </td>
        <td colSpan={6} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
          {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_4 ? data.kqxstt.giai_4[3] : null)}
        </td>
      </tr>
    </>
  }
  const TBodyGiai3 = () => {
    return <>
        <tr className='border-collapse'>
          <td rowSpan={2} className='text-center border-collapse border border-[#D1BABE] w-10'>
            G. 3
          </td>
          <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold'>
            {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_3 ? data.kqxstt.giai_3[0] : null)}
          </td>
          <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold'>
            {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_3 ? data.kqxstt.giai_3[1] : null)}
          </td>
          <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold'>
            {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_3 ? data.kqxstt.giai_3[2] : null)}
          </td>
        </tr>
        <tr>
          <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
            {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_3 ? data.kqxstt.giai_3[3] : null)}
          </td>
          <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
            {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_3 ? data.kqxstt.giai_3[4] : null)}
          </td>
          <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
            {isLoading ? <LoadingSpinner /> : data && (data.kqxstt.giai_3 ? data.kqxstt.giai_3[5] : null)}
          </td>
        </tr>

      </>
  }
  const TBodyGiai2 = () => {
    return <tr>
      <td className='text-center border border-[#D1BABE] w-10'>
        G. 2
      </td>
      {
        isLoading ?
          <>
            <td colSpan={6} className='text-center border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
              <LoadingSpinner />
            </td>
            <td colSpan={6} className='text-center border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
              <LoadingSpinner />
            </td>
          </>
          : data.kqxstt.giai_2 && data.kqxstt.giai_2.map((item: string, keys: number) => {
            return (
              <td colSpan={6} key={"9" + keys} className='text-center border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
                {item}
              </td>
            )
          })
      }
    </tr>
  }
  const TBodyGiai1 = () => {
    return (
      <tr className='border-collapse'>
        <td className='text-center border border-[#D1BABE] w-10'>
          G. 1
        </td>
        <td colSpan={12} className='text-center border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : data && data.kqxstt.giai_1}
        </td>
      </tr>
    )
  }
  const TBodyGiaiDB = () => {
    return (
      <tr className='border-collapse'>
        <td className='text-center border border-[#D1BABE] w-10'>
          ĐB
        </td>
        <td colSpan={12} className='text-center border border-[#D1BABE] font-bold text-red-600 bg-[#FFE0E5]'>
          {isLoading ? <LoadingSpinner /> : data && data.kqxstt.giai_db}
        </td>
      </tr>
    )
  }

  const LoadingSpinner = () => {
    return <div role="status">
      <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  }
  return (<>
    <section>
      <div className="mb-3 shadow-lg bg-white border-2 border-[#F76C82] rounded p-1">
        <h3 className='text-center text-[#424852] font-bold'>
          XSMB - Kết quả Xổ số Miền Bắc - XSMB hôm nay
        </h3>
        <div className='text-center'>
          <Link href={"/"} className='text-blue-500'>XSMB</Link> / <Link href={"/"} className='text-blue-500 capitalize'>XSMB {!isLoading && data ? moment(data.kqxstt.date, "DD-MM-YYYY").format("dddd") : null}</Link> / <Link href={"/"} className='text-blue-500'>XSMB {!isLoading && data ? data.kqxstt.date : null}</Link>
        </div>
        <div className='text-center font-bold text-blue-500 mb-3'>
          {!isLoading && data ? data.kqxstt.ma_ve : null}
        </div>
        <table className='table-auto w-full'>
          <tbody>
            <TBodyGiaiDB />
            <TBodyGiai1 />
            <TBodyGiai2 />
            <TBodyGiai3 />
            <TBodyGiai4 />
            <TBodyGiai5 />
            <TBodyGiai6 />
            <TBodyGiai7 />
          </tbody>
        </table>
      </div>
    </section>
  </>)
}