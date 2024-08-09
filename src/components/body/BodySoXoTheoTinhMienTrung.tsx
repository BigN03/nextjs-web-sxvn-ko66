'use client'
import 'moment/locale/vi'
import getSoXoTrucTiepTheoTinh from '@/apis/getSoXoTrucTiepTheoTinh';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';

export default function BodySoXoTheoTinhMienTrung({ date, locate, title, isSingle }: { date: string, locate: string, title: string, isSingle: boolean }) {
  const [data, setData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initData()
  }, [date, locate])

  const initData = async () => {
    setIsLoading(true);
    const res = await getSoXoTrucTiepTheoTinh('mien-trung', locate, date);
    setIsLoading(false);
    setData(res);
  }

  
  
  const TBodyGiai7 = ({ giai_7 }: { giai_7: string }) => {
    return <tr>
      <td className='text-center border border-[#D1BABE] w-10'>
        G. 7
      </td>
      <td colSpan={12} className='text-center border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : giai_7}
        </td>
    </tr>
  }
  const TBodyGiai6 = ({ giai_6 }: { giai_6: string }) => {
    const giai_sau = giai_6.split(",")
    return <tr>
      <td className='text-center border border-[#D1BABE] w-10'>
        G. 6
      </td>
      <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold'>
        {isLoading ? <LoadingSpinner /> : giai_sau[0]}
      </td>
      <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold'>
        {isLoading ? <LoadingSpinner /> : giai_sau[1]}
      </td>
      <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold'>
        {isLoading ? <LoadingSpinner /> : giai_sau[2]}
      </td>
    </tr>
  }
  const TBodyGiai5 = ({ giai_5 }: { giai_5: string }) => {
    return <>
      <tr className='border-collapse'>
        <td className='text-center border-collapse border border-[#D1BABE] w-10'>
          G. 5
        </td>
        <td colSpan={12} className='text-center border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : giai_5}
        </td>
      </tr>
    </>
  }
  const TBodyGiai4 = ({ giai_4 }: { giai_4: string }) => {
    const giai_tu = giai_4.split(",")
    return <>
      <tr className='border-collapse'>
        <td rowSpan={2} className='text-center border-collapse border border-[#D1BABE] w-10'>
          G. 4
        </td>
        <td colSpan={3} className='text-center border-collapse border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : giai_tu[0]}
        </td>
        <td colSpan={3} className='text-center border-collapse border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : giai_tu[1]}
        </td>
        <td colSpan={3} className='text-center border-collapse border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : giai_tu[2]}
        </td>
        <td colSpan={3} className='text-center border-collapse border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : giai_tu[3]}
        </td>
      </tr>
      <tr>
        <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
          {isLoading ? <LoadingSpinner /> : giai_tu[4]}
        </td>
        <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
          {isLoading ? <LoadingSpinner /> : giai_tu[5]}
        </td>
        <td colSpan={4} className='text-center border-collapse border border-[#D1BABE] font-bold bg-[#FFE0E5]'>
          {isLoading ? <LoadingSpinner /> : giai_tu[6]}
        </td>
      </tr>
    </>
  }
  const TBodyGiai3 = ({ giai_3 }: { giai_3: string }) => {
    const giai_ba = giai_3.split(",")
    return <>
        <tr className='border-collapse'>
          <td className='text-center border-collapse border border-[#D1BABE] w-10'>
            G. 3
          </td>
          <td colSpan={6} className='text-center border-collapse border border-[#D1BABE] font-bold'>
            {isLoading ? <LoadingSpinner /> : giai_ba[0]}
          </td>
          <td colSpan={6} className='text-center border-collapse border border-[#D1BABE] font-bold'>
            {isLoading ? <LoadingSpinner /> : giai_ba[1]}
          </td>
        </tr>
      </>
  }
  const TBodyGiai2 = ({ giai_2 }: { giai_2: string }) => {
    return <tr>
      <td className='text-center border border-[#D1BABE] w-10'>
        G. 2
      </td>
      <td colSpan={12} className='text-center border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : giai_2}
        </td>
    </tr>
  }
  const TBodyGiai8 = ({ giai_8 }: { giai_8: string }) => {
    return (
      <tr className='border-collapse'>
        <td className='text-center border border-[#D1BABE] w-10'>
          G. 8
        </td>
        <td colSpan={12} className='text-center border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : giai_8}
        </td>
      </tr>
    )
  }
  const TBodyGiai1 = ({ giai_1 }: { giai_1: string }) => {
    return (
      <tr className='border-collapse'>
        <td className='text-center border border-[#D1BABE] w-10'>
          G. 1
        </td>
        <td colSpan={12} className='text-center border border-[#D1BABE] font-bold'>
          {isLoading ? <LoadingSpinner /> : giai_1}
        </td>
      </tr>
    )
  }
  const TBodyGiaiDB = ({ giai_db }: { giai_db: string }) => {
    return (
      <tr className='border-collapse'>
        <td className='text-center border border-[#D1BABE] w-10'>
          ĐB
        </td>
        <td colSpan={12} className='text-center border border-[#D1BABE] font-bold text-red-600 bg-[#FFE0E5]'>
          {isLoading ? <LoadingSpinner /> : giai_db}
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

  if (!data) {
    return <></>
  }

  if (data.length == 0) {
    return <></>
  }

  console.log(data)
  if (isSingle) {
    return (<>
      <section>
        <div className="mb-3 shadow-lg bg-white border-2 border-[#F76C82] rounded p-1">
          <h3 className='text-center text-[#424852] font-bold'>
            XSMT - Kết quả Xổ số {title}
          </h3>
          <div className='text-center'>
            <Link href={"/"} className='text-blue-500'>XSMT</Link> / <Link href={"/"} className='text-blue-500 capitalize'>XSMT {!isLoading && data.length > 0 ? moment.unix(data[0].date).format("dddd") : null}</Link> / <Link href={"/"} className='text-blue-500'>XSMT {!isLoading && data.length > 0 ? moment.unix(data[0].date).format("DD/MM/YYYY") : null}</Link>
          </div>
          <div className='text-center font-bold text-blue-500 mb-3'>
            {!isLoading && data.length > 0 ? data[0].type : null}
          </div>
          <table className='table-auto w-full'>
            <tbody>
              {
                data[0] && <>
                  <TBodyGiaiDB giai_db={data[0].giai_dac_biet} />
                  <TBodyGiai1 giai_1={data[0].giai_nhat} />
                  <TBodyGiai2 giai_2={data[0].giai_nhi} />
                  <TBodyGiai3 giai_3={data[0].giai_ba} />
                  <TBodyGiai4 giai_4={data[0].giai_tu} />
                  <TBodyGiai5 giai_5={data[0].giai_nam} />
                  <TBodyGiai6 giai_6={data[0].giai_sau} />
                  <TBodyGiai7 giai_7={data[0].giai_bay} />
                  <TBodyGiai8 giai_8={data[0].giai_tam} />
                </>
              }

            </tbody>
          </table>
        </div>
      </section>
    </>)
  }

  if (data.length > 0) {
    let arrWidget = [];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      arrWidget.push(
        <section>
          <div className="mb-3 shadow-lg bg-white border-2 border-[#F76C82] rounded p-1">
            <h3 className='text-center text-[#424852] font-bold'>
              XSMT - Kết quả Xổ số {title}
            </h3>
            <div className='text-center'>
              <Link href={"/"} className='text-blue-500'>XSMT</Link> / <Link href={"/"} className='text-blue-500 capitalize'>XSMT {!isLoading && element ? moment.unix(element.date).format("dddd") : null}</Link> / <Link href={"/"} className='text-blue-500'>XSMT {!isLoading && element ? moment.unix(element.date).format("DD/MM/YYYY") : null}</Link>
            </div>
            <div className='text-center font-bold text-blue-500 mb-3'>
              {!isLoading && element ? element.type : null}
            </div>
            <table className='table-auto w-full'>
              <tbody>
                {
                  element && <>
                    <TBodyGiaiDB giai_db={element.giai_dac_biet} />
                    <TBodyGiai1 giai_1={element.giai_nhat} />
                    <TBodyGiai2 giai_2={element.giai_nhi} />
                    <TBodyGiai3 giai_3={element.giai_ba} />
                    <TBodyGiai4 giai_4={element.giai_tu} />
                    <TBodyGiai5 giai_5={element.giai_nam} />
                    <TBodyGiai6 giai_6={element.giai_sau} />
                    <TBodyGiai7 giai_7={element.giai_bay} />
                    <TBodyGiai8 giai_8={element.giai_tam} />
                  </>
                }

              </tbody>
            </table>
          </div>
        </section>
      )

    }
    return arrWidget;
  }
  return (<>

  </>)
}