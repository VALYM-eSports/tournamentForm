"use client";
import React from "react";
import banniere from "../../public/Baniere-Tournois.png"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TOURNAMENT_INFO_ENUM } from "@/utils/enum";

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
        <h1 className="text-lg font-bold">TOURNOI ROCKET LEAGUE</h1>
        <Image
          src={banniere}
          alt="marioKart"
          width={400}
          height={300}
          className="md:hidden"
        />
        <Image
          src={banniere}
          alt="marioKart"
          width={800}
          height={800}
          className="hidden md:flex"
        />
      </div>
      <div className="flex gap-2 flex-col justify-center items-center  p-4 mb-6 mt-10">
        <p className="font-bold text-center">
          Tu es disponible <strong className="text-accent">le {TOURNAMENT_INFO_ENUM.DATE}</strong> ?
        </p>
        <p className="font-bold text-center">
          tu es archi chaud pour participer au tournoi ?
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
