'use client'
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { BiSolidHome, BiCaretDown } from "react-icons/bi";
export default function CompAppNav() {
  return (<nav>
    <div className="hidden md:flex flex-row justify-center items-center max-w-[1280px] w-11/12 h-[50px] mx-auto bg-white rounded px-2">
      <div className="container mx-auto rounded max-w-[1200px] h-full" >
        <div className="flex flex-row justify-center gap-4 h-full">
          <h6 className="relative group">
            <Link className="text-[#424852] font-bold hover:opacity-50 flex flex-row items-center h-full" href="/"><BiSolidHome className="mr-1 text-2xl" />HOME</Link>
          </h6>
          <h6 className="relative group" >
            <Link className="text-[#424852] font-bold hover:opacity-50 flex flex-row items-center h-full" href="/sxmb">SXMB<BiCaretDown className="ml-1 text-2xl" /></Link>
            <div className="absolute min-w-56 bg-white p-2 z-50 hidden group-hover:block">
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
            </div>
          </h6>
          <h6 className="relative group" >
            <Link className="text-[#424852] font-bold hover:opacity-50 flex flex-row items-center h-full" href="/sxmt">SXMT<BiCaretDown className="ml-1 text-2xl" /></Link>
            <div className="absolute min-w-56 bg-white p-2 z-50 hidden group-hover:block">
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
            </div>
          </h6>
          <h6 className="relative group" >
            <Link className="text-[#424852] font-bold hover:opacity-50 flex flex-row items-center h-full" href="/sxmn">SXMN<BiCaretDown className="ml-1 text-2xl" /></Link>
            <div className="absolute min-w-56 bg-white p-2 z-50 hidden group-hover:block">
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
          </h6>
          <h6 className="relative group" >
            <Link className="text-[#424852] font-bold hover:opacity-50 flex flex-row items-center h-full" href="/vietllot">VIETLOTT<BiCaretDown className="ml-1 text-2xl" /></Link>
            <div className="absolute min-w-56 bg-white p-2 z-50 hidden group-hover:block">
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
                <h6 className="border-b border-[#D1BABE] hover:opacity-50 w-full text-left pl-5 py-1">Điện toán 123</h6>
              </Link>
            </div>
          </h6>
          {/* <h6 className="relative group" >
            <Link className="text-[#424852] font-bold hover:opacity-50 flex flex-row items-center" href="/">SỔ KẾT QUẢ<BiCaretDown className="ml-1 text-2xl" /></Link>
          </h6>
          <h6 className="relative group" >
            <Link className="text-[#424852] font-bold hover:opacity-50 flex flex-row items-center" href="/">SỐ MƠ<BiCaretDown className="ml-1 text-2xl" /></Link>
          </h6>
          <h6 className="relative group" >
            <Link className="text-[#424852] font-bold hover:opacity-50 flex flex-row items-center" href="/">TIN TỨC<BiCaretDown className="ml-1 text-2xl" /></Link>
          </h6> */}
        </div>
      </div>
    </div>
    <Navbar fluid rounded theme={{
      root: {
        base: "fixed md:hidden z-50 top-10 left-2 ",

      },
      collapse: {
        base: "fixed top-24 left-0 w-screen bg-white h-96 overflow-y-auto"
      }
    }}>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="pl-2">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} className="pl-2 font-bold" href="/sxmb">
          SXMB
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmb/nam-dinh">Nam Định</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmb/ha-noi">Hà Nội</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmb/thai-binh">Thái Bình</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmb/quang-ninh">Quảng Ninh</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmb/bac-ninh">Bắc Ninh</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmb/hai-phong">Hải Phòng</Navbar.Link>
        <Navbar.Link as={Link} className="pl-2 font-bold" href="/sxmt">
          SXMT
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmt/thua-thien-hue">Thừa Thiên Huế</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmt/dak-lak">Đắk Lắk</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmt/quang-nam">Quảng Nam</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmt/khanh-hoa">Khánh Hòa</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmt/da-nang">Đà Nẵng</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmt/binh-dinh">Bình Định</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmt/quang-binh">Quảng Bình</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmt/quang-tri">Quảng Trị</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmt/ninh-thuan">Ninh Thuận</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmt/gia-lai">Gia Lai</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmt/quang-ngai">Quảng Ngãi</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmt/dak-nong">Đắk Nông</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmt/kon-tum">Kon Tum</Navbar.Link>
        <Navbar.Link as={Link} className="pl-2 font-bold" href="/sxmt">
          SXMN
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/vung-tau">Vũng Tàu</Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/can-tho">
          Cần thơ
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/dong-thap">
          Đồng tháp
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/tp-hcm">
          TP HCM
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/ca-mau">
          Cà Mau
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/ben-tre">
          Bến Tre
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/bac-lieu">
          Bạc Liêu
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/soc-trang">
          Sóc Trăng
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/dong-nai">
          Đồng Nai
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/an-giang">
          An Giang
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/tay-ninh">
          Tây Ninh
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/binh-thuan">
          Bình Thuận
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/vinh-long">
          Vĩnh Long
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/binh-duong">
          Bình Dương
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/tra-vinh">
          Trà Vinh
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/binh-phuoc">
          Bình Phước
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/hau-giang">
          Hậu Giang
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/kien-giang">
          Kiên Giang
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/tien-giang">
          Tiền Giang
        </Navbar.Link>
        <Navbar.Link className="pl-4" href="/sxmn/da-lat">
          Đà Lạt
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  </nav>)
}