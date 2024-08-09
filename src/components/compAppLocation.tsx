

export default function CompAppLocation() {
  return <>
    <div className="overflow-hidden shadow-lg mb-3">
      <table border={0} className="table-auto w-full border-none">
        <thead>
          <tr className="border-collapse">
            <th className="border-collapse border border-[#FFE0E5] bg-[#F76C82] text-white w-1/3">
              Miền Bắc
            </th>
            <th className="border-collapse border border-[#FFE0E5] bg-[#F76C82] text-white w-1/3">
              Miền Trung
            </th>
            <th className="border-collapse border border-[#FFE0E5] bg-[#F76C82] text-white w-1/3">
              Miền Nam
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-collapse">
            <td className="bg-white border-collapse border border-[#FFE0E5] text-[#424852] text-sm px-3">
              <div className=" flex flex-row justify-between items-center py-1">
                <span>Truyền thống</span> <div className="rounded text-white bg-[#8CD68B] text-[12px] px-1">18:15</div>
              </div>
            </td>
            <td className="bg-white border-collapse border border-[#FFE0E5] text-[#424852] text-sm px-3">
              <div className=" flex flex-row justify-between items-center py-1">
                <span>Huế</span> <div className="rounded text-white bg-[#8CD68B] text-[12px] px-1">18:15</div>
              </div>
            </td>
            <td className="bg-white border-collapse border border-[#FFE0E5] text-[#424852] text-sm px-3">
              <div className=" flex flex-row justify-between items-center py-1">
                <span>Kiên Giang</span> <div className="rounded text-white bg-[#8CD68B] text-[12px] px-1">18:15</div>
              </div>
            </td>
          </tr>
          <tr className="border-collapse">
            <td className="bg-white border-collapse border border-[#FFE0E5] text-[#424852] text-sm px-3">

            </td>
            <td className="bg-white border-collapse border border-[#FFE0E5] text-[#424852] text-sm px-3">
              <div className=" flex flex-row justify-between items-center py-1">
                <span>Khánh Hòa</span> <div className="rounded text-white bg-[#8CD68B] text-[12px] px-1">18:15</div>
              </div>
            </td>
            <td className="bg-white border-collapse border border-[#FFE0E5] text-[#424852] text-sm px-3">
              <div className=" flex flex-row justify-between items-center py-1">
                <span>Tiền Giang</span> <div className="rounded text-white bg-[#8CD68B] text-[12px] px-1">18:15</div>
              </div>
            </td>
          </tr>
          <tr className="border-collapse">
            <td className="bg-white border-collapse border border-[#FFE0E5] text-[#424852] text-sm px-3">

            </td>
            <td className="bg-white border-collapse border border-[#FFE0E5] text-[#424852] text-sm px-3">
              <div className=" flex flex-row justify-between items-center py-1">
                <span>Nha Trang</span> <div className="rounded text-white bg-[#8CD68B] text-[12px] px-1">18:15</div>
              </div>

            </td>
            <td className="bg-white border-collapse border border-[#FFE0E5] text-[#424852] text-sm px-3">
              <div className=" flex flex-row justify-between items-center py-1">
                <span>Đà Lạt</span> <div className="rounded text-white bg-[#8CD68B] text-[12px] px-1">18:15</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
}