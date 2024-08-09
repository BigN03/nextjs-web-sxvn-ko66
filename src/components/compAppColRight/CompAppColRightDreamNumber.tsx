import { FiFileText } from "react-icons/fi";


export default function CompAppColRightDreamNumber() {
  return (
    <div className=" w-full text-center rounded shadow-lg bg-white  p-2">
      <div style={{ background: 'linear-gradient(270deg,#FE7E07, #FFDE67)' }} className="h-10 flex flex-row items-center px-3 justify-start rounded">
        <FiFileText className="text-white mr-1" /><span className="text-white font-bold">Số mơ</span>
      </div>
    </div>
  )
}