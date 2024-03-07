import Image from "next/image";
import logo from "../../public/logo.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-3">
        <Image src={logo} alt="logo" width={80} height={80} />
        <p className="text-2xl">VALYM Esport</p>
      </div>
    </>
  );
};

export default Header;
