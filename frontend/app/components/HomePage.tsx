"use client";
import React from "react";
import marioKart from "../../public/MarioKart.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleClickRegister = () => {
    router.push("/tournament");
  };

  const handleClickDecline = () => {
    router.push("/decline");
  };

  return (
    <div className="px-2">
      <div className="flex gap-5 flex-col justify-center items-center bg-base-200 p-4 rounded-lg mb-6 shadow shadow-primary mt-10">
        <h1 className="text-lg font-bold">TOURNOIS MARIO KART</h1>
        <Image
          src={marioKart}
          alt="marioKart"
          width={300}
          height={300}
          className="md:hidden"
        />
        <Image
          src={marioKart}
          alt="marioKart"
          width={500}
          height={500}
          className="hidden md:flex"
        />
      </div>
      <div className="flex gap-2 flex-col justify-center items-center  p-4 mb-6 mt-10">
        <p className="font-bold text-center">
          Tu es disponible <strong className="text-accent">le 15 Mars</strong> ?
        </p>
        <p className="font-bold text-center">
          tu es archi chaud pour participer au tournois ?
        </p>
        <p className="font-bold text-center">
          Inscrit toi via notre{" "}
          <strong className="text-accent">formulaire d&apos;inscription</strong>{" "}
          !
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 md:mb-11 mb-5">
        <button
          onClick={handleClickRegister}
          className="btn btn-primary w-[75%]"
        >
          Je veux m&apos;inscrire !
        </button>
        <button
          onClick={handleClickDecline}
          className="btn btn-secondary w-[75%]"
        >
          Je suis pas chaud...
        </button>
      </div>
    </div>
  );
};

export default HomePage;
