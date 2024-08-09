import { Datepicker } from "flowbite-react";
import moment from "moment";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

type Props = {
  setDate: (date: string) => void
}
export default function CompAppColLeft({ setDate }: Props) {
  return (
    <>
      <Datepicker
        showClearButton={false}
        onSelectedDateChanged={(date) => setDate(moment(new Date(date)).format("DD-MM-YYYY"))}
        inline
        autoHide={false}
        language="Vi-vi"
        maxDate={new Date()}
        showTodayButton={false}
        theme={{
          root: {
            base: ""
          },
          popup: {
            root: {
              base: "",
              inline: "",
              inner: "inline-block w-full rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700",
            }
          },
          views: {
            decades: {
              items: {
                item: {
                  selected: "bg-cyan-700 text-black hover:bg-cyan-600"
                }
              }
            }
          }
        }}
        labelTodayButton="Hôm nay"
      />
      <div className=" w-full text-center rounded shadow-lg bg-white mt-2 py-2">
        <div className="px-2">
          <Link href={"/sxmb"} style={{ background: 'linear-gradient(90deg,#FFB648, #FF5D5D)' }} className="h-10 flex flex-row items-center px-3 justify-between rounded mb-2">
            <span className="text-white font-bold">Xổ số miền bắc</span><FaAngleDown className="text-white font-bold stroke-white text-xl" />
          </Link>
        </div>

        <Link href="/sxmb/nam-dinh">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5 py-1"> Nam Định</h6>
        </Link>
        <Link href="/sxmb/ha-noi">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1"> Hà Nội</h6>
        </Link>
        <Link href="/sxmb/thai-binh">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Thái Bình</h6>
        </Link>
        <Link href="/sxmb/quang-ninh">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Quảng Ninh</h6>
        </Link>
        <Link href="/sxmb/bac-ninh">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Bắc ninh</h6>
        </Link>
        <Link href="/sxmb/hai-phong">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Hải Phòng</h6>
        </Link>
        <div className="px-2">
          <Link href={"/vietllot"} style={{ background: 'linear-gradient(90deg,#7D2DFF, #41DDFF)' }} className="h-10 flex flex-row items-center px-3 justify-between rounded my-2">
            <span className="text-white font-bold">Xổ số điện toán</span><FaAngleDown className="text-white font-bold stroke-white text-xl" />
          </Link>
        </div>
        <Link href="/vietllot/sxmega645">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Mega 6/45</h6>
        </Link>
        <Link href="/vietllot/sxpower655">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Power 6/55</h6>
        </Link>
        <Link href="/vietllot/sxmax3d">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Max 3D</h6>
        </Link>
        <Link href="/vietllot/sxmax3dpro">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Max 3D Pro</h6>
        </Link>
        <Link href="/vietllot/thantai">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Thần Tài</h6>
        </Link>
        <Link href="/vietllot/dientoan6x36">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Điện toán 6x36</h6>
        </Link>
        <Link href="/vietllot/dientoan123">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Điện toán 123</h6>
        </Link>
        <div className="px-2">
          <Link style={{ background: 'linear-gradient(45deg,#C15CFF, #FF5454)' }} className="h-10 flex flex-row items-center px-3 justify-between rounded my-2" href={"/sxmt"}>
            <span className="text-white font-bold">Xổ số miền trung</span><FaAngleDown className="text-white font-bold stroke-white text-xl" />
          </Link>
        </div>

        <Link href="/sxmt/thua-thien-hue">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Thừa Thiên Huế</h6>
        </Link>
        <Link href="/sxmt/dak-lak">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Đắk Lắk</h6>
        </Link>
        <Link href="/sxmt/quang-nam">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Quảng Nam</h6>
        </Link>
        <Link href="/sxmt/khanh-hoa">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Khánh hòa</h6>
        </Link>
        <Link href="/sxmt/da-nang">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Đà Nẵng</h6>
        </Link>
        <Link href="/sxmt/binh-dinh">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Bình Định</h6>
        </Link>
        <Link href="/sxmt/quang-binh">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Quảng Bình</h6>
        </Link>
        <Link href="/sxmt/quang-tri">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Quảng Trị</h6>
        </Link>
        <Link href="/sxmt/ninh-thuan">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Ninh Thuận</h6>
        </Link>
        <Link href="/sxmt/gia-lai">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Gia Lai</h6>
        </Link>
        <Link href="/sxmt/quang-ngai">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Quảng Ngãi</h6>
        </Link>
        <Link href="/sxmt/dak-nong">
          <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5  py-1">Đắk Nông</h6>
        </Link>
        <Link href="/sxmt/kon-tum">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Kon Tum</h6>
        </Link>
        <div className="px-2">
          <Link href={"/sxmn"} style={{ background: 'linear-gradient(45deg,#3378FF, #9442FE)' }} className="h-10 flex flex-row items-center px-3 justify-between rounded my-2">
            <span className="text-white font-bold">Xổ số miền nam</span><FaAngleDown className="text-white font-bold stroke-white text-xl" />
          </Link>
        </div>
        <Link href="/sxmn/vung-tau">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Vũng Tàu</h6>
        </Link>
        <Link href="/sxmn/can-tho">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Cần thơ</h6>
        </Link>
        <Link href="/sxmn/dong-thap">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Đồng tháp</h6>
        </Link>
        <Link href="/sxmn/tp-hcm">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">TP HCM</h6>
        </Link>
        <Link href="/sxmn/ca-mau">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Cà Mau</h6>
        </Link>
        <Link href="/sxmn/ben-tre">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Bến Tre</h6>
        </Link>
        <Link href="/sxmn/bac-lieu">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Bạc Liêu</h6>
        </Link>
        <Link href="/sxmn/soc-trang">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Sóc Trăng</h6>
        </Link>
        <Link href="/sxmn/dong-nai">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Đồng Nai</h6>
        </Link>
        <Link href="/sxmn/an-giang">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">An Giang</h6>
        </Link>
        <Link href="/sxmn/tay-ninh">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Tây Ninh</h6>
        </Link>
        <Link href="/sxmn/binh-thuan">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Bình Thuận</h6>
        </Link>
        <Link href="/sxmn/vinh-long">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Vĩnh Long</h6>
        </Link>
        <Link href="/sxmn/binh-duong">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Bình Dương</h6>
        </Link>
        <Link href="/sxmn/tra-vinh">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Trà Vinh</h6>
        </Link>
        <Link href="/sxmn/binh-phuoc">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Bình Phước</h6>
        </Link>
        <Link href="/sxmn/hau-giang">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Hậu Giang</h6>
        </Link>
        <Link href="/sxmn/kien-giang">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Kiên Giang</h6>
        </Link>
        <Link href="/sxmn/tien-giang">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Tiền Giang</h6>
        </Link>
        <Link href="/sxmn/da-lat">
          <h6 className=" hover:opacity-50 w-full text-left pl-5  py-1">Đà Lạt</h6>
        </Link>
      </div>
    </>
  )
}