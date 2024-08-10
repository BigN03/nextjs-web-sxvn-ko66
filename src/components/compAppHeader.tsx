import moment from "moment";
import Image from "next/image";
import 'moment/locale/vi'
export default function CompAppHeader() {
  return 
    <Html>
      <Head />
      <body>
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
        <Main />
        <NextScript />
        <Script
          src="https://example.com/script.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
}
