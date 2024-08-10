import moment from "moment";
import Image from "next/image";
import 'moment/locale/vi'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

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
  <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16597066183" />
  <Script>
    window.dataLayer = window.dataLayer || [];
    function gtag()
  	{dataLayer.push(arguments);}
    	gtag('js', new Date());
    	gtag('config', 'AW-16597066183');
    />
}
