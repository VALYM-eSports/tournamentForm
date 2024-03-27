import Image from "next/image";
import logo from "../../public/logo.png";
import { Chivo_Mono } from "next/font/google";

const chivoMono = Chivo_Mono({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className={chivoMono.className}>
      <div className="flex justify-center items-center mt-3 md:mb-6 md:mt-6">
        <Image src={logo} alt="logo" width={120} />
      </div>
    </header>
  );
};

export default Header;
