'use client'
import 'moment/locale/vi'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import getSoXoTrucTiepTheoMien from '@/apis/getSoXoTrucTiepTheoMien';

export default function BodyLiveSoXoMienTrung({ locate }: { locate: string }) {
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
  function chunkArray(array: string | any[], chunkSize: number) {
    return Array.from(
      { length: Math.ceil(array.length / chunkSize) },
      (_, index) => array.slice(index * chunkSize, (index + 1) * chunkSize)
    );
  }
  const TBodyGiai8 = () => {
    if (data) {
      return <tr>
        <td className='text-center border border-[#D1BABE]'>
          G. 8
        </td>
        {
          isLoading ?
            <td className='text-center border border-[#D1BABE] font-bold '>
              <LoadingSpinner />
            </td>
            :
            data && data.kqxstt.giai8.map((item: string, keys: number) => {
              return (
                <td key={"giai8" + keys} className='text-center border border-[#D1BABE] font-bold text-red-600'>
                  {item}
                </td>
              )
            })
        }
      </tr>
    }
  }
  const TBodyGiai7 = () => {
    return <tr>
      <td className='text-center border border-[#D1BABE]'>
        G. 7
      </td>
      {
        isLoading ?
          <td className='text-center border border-[#D1BABE] font-bold '>
            <LoadingSpinner />
          </td>
          :
          data && data.kqxstt.giai7.map((item: string, keys: number) => {
            return (
              <td key={"giai7" + keys} className='text-center border border-[#D1BABE] font-bold'>
                {item}
              </td>
            )
          })
      }
    </tr>
  }
  const TBodyGiai6 = () => {
    return <tr>
      <td className='text-center border border-[#D1BABE]'>
        G. 6
      </td>
      {
        isLoading ?
          <td className='text-center border border-[#D1BABE] font-bold '>
            <LoadingSpinner />
          </td>
          :
          data && data.kqxstt.giai6.map((e: string, i: number) => {
            return <td key={"giai6" + i} className='text-center border-collapse border border-[#D1BABE] font-bold'>
              {chunkArray(e, 4).map((e, k) => <div key={"giai6" + i + k}>{e}</div>)}
            </td>
          })
      }
    </tr>
  }
  const TBodyGiai5 = () => {
    return <>
      <tr className='border-collapse'>
        <td className='text-center border-collapse border border-[#D1BABE]'>
          G. 5
        </td>
        {
          isLoading ?
            <td className='text-center border border-[#D1BABE] font-bold '>
              <LoadingSpinner />
            </td>
            :
            data && data.kqxstt.giai5.map((item: string, keys: number) => {
              return (
                <td key={"5" + keys} className='text-center border border-[#D1BABE] font-bold'>
                  {item}
                </td>
              )
            })
        }
      </tr>
    </>
  }
  const TBodyGiai4 = () => {
    return <>
      <tr className='border-collapse'>
        <td className='text-center border-collapse border border-[#D1BABE]'>
          G. 4
        </td>
        {
          isLoading ?
            <td className='text-center border border-[#D1BABE] font-bold '>
              <LoadingSpinner />
            </td>
            :
            data && data.kqxstt.giai4.map((e: string, i: number) => {
              return <td key={"giai4" + i} className='text-center border-collapse border border-[#D1BABE] font-bold'>
                {chunkArray(e, 5).map((e, k) => <div key={"giai4" + i + k}>{e}</div>)}
              </td>
            })
        }
      </tr>
    </>
  }
  const TBodyGiai3 = () => {
    return <>
      <tr className='border-collapse'>
        <td className='text-center border-collapse border border-[#D1BABE]'>
          G. 3
        </td>
        {
          isLoading ?
            <td className='text-center border border-[#D1BABE] font-bold '>
              <LoadingSpinner />
            </td>
            :
            data && data.kqxstt.giai3.map((e: string, i: number) => {
              return <td key={"giai3" + i} className='text-center border-collapse border border-[#D1BABE] font-bold'>
                {chunkArray(e, 5).map((e, k) => <div key={"giai3" + i + k}>{e}</div>)}
              </td>
            })
        }
      </tr>
    </>
  }
  const TBodyGiai2 = () => {
    return <tr>
      <td className='text-center border border-[#D1BABE]'>
        G. 2
      </td>
      {
        isLoading ?
          <td className='text-center border border-[#D1BABE] font-bold '>
            <LoadingSpinner />
          </td>
          :
          data && data.kqxstt.giai2.map((item: string, keys: number) => {
            return (
              <td key={"9" + keys} className='text-center border border-[#D1BABE] font-bold'>
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
        <td className='text-center border border-[#D1BABE]'>
          G. 1
        </td>
        {
          isLoading ?
            <td className='text-center border border-[#D1BABE] font-bold '>
              <LoadingSpinner />
            </td>
            :
            data && data.kqxstt.giai1.map((item: string, keys: number) => {
              return (
                <td key={"1" + keys} className='text-center border border-[#D1BABE] font-bold'>
                  {item}
                </td>
              )
            })
        }
      </tr>
    )
  }
  const TBodyGiaiDB = () => {
    return (
      <tr className='border-collapse'>
        <td className='text-center border border-[#D1BABE]'>
          G. ĐB
        </td>
        {
          isLoading ?
            <td className='text-center border border-[#D1BABE] font-bold '>
              <LoadingSpinner />
            </td>
            :
            data && data.kqxstt.giaidb.map((item: string, keys: number) => {
              return (
                <td key={"1" + keys} className='text-center border border-[#D1BABE] font-bold text-red-600'>
                  {item}
                </td>
              )
            })
        }
      </tr>

    )
  }

  const TBodyLocate = () => {
    return (
      <tr className='border-collapse'>
        <td className='text-center border border-[#D1BABE]'>
          Tỉnh
        </td>
        {
          isLoading ?
            <td className='text-center border border-[#D1BABE] font-bold '>
              <LoadingSpinner />
            </td>
            :
            data && data.tinh.map((e: string, i: number) => <td key={"tinh" + i} className='text-center border border-[#D1BABE] font-bold'>
              {e}
            </td>)
        }

      </tr>

    )
  }
  const TBodyLocateCode = () => {
    return (
      <tr className='border-collapse'>
        <td className='text-center border border-[#D1BABE]'>
          Mã Tỉnh
        </td>
        {
          isLoading ?
            <td className='text-center border border-[#D1BABE] font-bold '>
              <LoadingSpinner />
            </td>
            :
            data && data.ma_tinh.map((e: string, i: number) => <td key={"matinh" + i} className='text-center border border-[#D1BABE] font-bold'>
              {e}
            </td>)
        }

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
          XSMT - Kết quả Xổ số Miền Trung - XSMT hôm nay
        </h3>
        <div className='text-center'>
          <Link href={"/"} className='text-blue-500'>XSMT</Link> / <Link href={"/"} className='text-blue-500 capitalize'>XSMT {!isLoading && data ? moment(data.ngay, "DD-MM-YYYY").format("dddd") : null}</Link> / <Link href={"/"} className='text-blue-500'>XSMT {!isLoading && data ? data.ngay : null}</Link>
        </div>
        <div className='text-center font-bold text-blue-500 mb-3'>
          {!isLoading && data ? data.kqxstt.ma_ve : null}
        </div>
        <table className='table-auto w-full'>
          <tbody>
            <TBodyLocate />
            <TBodyLocateCode />
            <TBodyGiaiDB />
            <TBodyGiai1 />
            <TBodyGiai2 />
            <TBodyGiai3 />
            <TBodyGiai4 />
            <TBodyGiai5 />
            <TBodyGiai6 />
            <TBodyGiai7 />
            <TBodyGiai8 />
          </tbody>
        </table>
      </div>
    </section>
  </>)
}