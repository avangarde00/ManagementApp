import Image from "next/image";
import Link from "next/link";

import localFont from "next/font/local";
import {cn} from "@/lib/utils";

const headingFont = localFont({
    src:"../../public/fonts/font.woff2",
})

export const Logo = () => {
  return <Link href="/">
    <div className="hover:opacity-75 transition jusitfy-center gap-x-2 hidden md:flex flex-col ">
        <Image
        className="ml-3"
        src="/logo.svg"
        alt="logo"
        height={30}
        width={30}
        >
        </Image>
        <p className={cn("text-lg text-neutral-700 pb-1",headingFont.className)}>
            Taskify
        </p>
    </div>
  </Link>;
};
