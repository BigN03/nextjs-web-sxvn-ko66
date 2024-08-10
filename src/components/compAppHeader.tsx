import moment from "moment";
import Image from "next/image";
import 'moment/locale/vi'
export default function CompAppHeader() {
  return <header className="container mx-auto py-2">
    </div>
    {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16597066183">
      </script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-16597066183');
      </script>
    <div className="flex flex-row justify-center items-center">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logo.svg"
        alt="Next.js Logo"
        width={258}
        height={80}
        priority
      />
  </header>
}
