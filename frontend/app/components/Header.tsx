"use client";
import Image from "next/image";
import { Chivo_Mono } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const chivoMono = Chivo_Mono({ subsets: ["latin"] });

const Header = () => {
  const pathname = usePathname();
  const [logo, setLogo] = useState(require("../../public/logo-degrad.png"));

  useEffect(() => {
    setLogo(
      pathname.includes("tournament") || pathname.includes("success")
        ? require("../../public/logo.png")
        : require("../../public/logo-degrad.png")
    );
  }, [pathname]);

  return (
    <header className={chivoMono.className}>
      <div className="flex justify-center items-center mt-3 md:mb-6 md:mt-6">
        <Image src={logo} alt="logo" width={120} />
      </div>
    </header>
  );
};

export default Header;
