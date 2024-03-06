import Image from "next/image";
import logo from "../../public/logo.png";

const Header = () => {
  return (
    <>
      <div className="">
        <Image src={logo} alt="logo" width={200} height={200} />
      </div>
    </>
  );
};

export default Header;
