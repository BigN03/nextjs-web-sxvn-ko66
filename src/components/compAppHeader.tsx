import moment from "moment";
import Image from "next/image";
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import 'moment/locale/vi'

export default function CompAppHeader() {
  return <header className="container mx-auto py-2">

    <div className="flex flex-row justify-center items-center">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logo.svg"
        alt="Next.js Logo"
        width={258}
        height={80}
        priority
      />
      
    </div>
  </header>
}
