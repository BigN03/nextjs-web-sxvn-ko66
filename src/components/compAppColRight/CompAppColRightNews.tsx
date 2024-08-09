import { FiFileText } from "react-icons/fi";


export default function CompAppColRightNews() {
  return (
    <div className=" w-full text-center rounded shadow-lg bg-white mb-3 p-2">
      <div style={{ background: 'linear-gradient(#64FBD7, #5383FF)' }} className="h-10 flex flex-row items-center px-3 justify-start rounded">
        <FiFileText className="text-white mr-1" /><span className="text-white font-bold">Tin tức</span>
      </div>
    </div>
  )
}