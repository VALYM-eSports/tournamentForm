import { useRouter } from "next/navigation";
import React from "react";

const DeclineComponent = () => {
  const router = useRouter();

  const handleClickRegister = () => {
    router.push("/tournament");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:mb-11 mb-5">
      <button onClick={handleClickRegister} className="btn btn-accent w-[75%]">
        J&apos;ai changé d&apos;avis !
      </button>
    </div>
  );
};

export default DeclineComponent;
