"use client";
import React, { useEffect, useState } from "react";
import banniere from "../../public/Baniere-Tournois.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TOURNAMENT_INFO_ENUM } from "@/utils/enum";
import axios from "axios";

const HomePage = () => {
  const router = useRouter();
  const playerCountMax: number = 5;
  const [remainingPlace, setremainingPlace] = useState(0);
  const [isPlayerCountLoading, setIsPlayerCountLoading] = useState(true);

  const handleClickRegister = () => {
    router.push("/tournament");
  };

  const handleClickDecline = () => {
    router.push("/decline");
  };

  const getPlayerCount = async () => {
    setIsPlayerCountLoading(true);
    const res = await axios.post("api/user/countRegister", {
      tournamentId: "93d18672-02a1-4749-8dc0-d82939b06163",
    });
    const { count } = res.data;
    setremainingPlace(playerCountMax - count);
    setIsPlayerCountLoading(false);
  };

  useEffect(() => {
    getPlayerCount();
  }, []);

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
          Tu es disponible{" "}
          <strong className="text-accent">
            le {TOURNAMENT_INFO_ENUM.DATE}
          </strong>{" "}
          ?
        </p>
        <p className="font-bold text-center">
          Tu es archi chaud pour participer au tournoi ?
        </p>
        <p className="font-bold text-center">
          Inscris toi via notre
          <strong className="text-accent">formulaire d&apos;inscription</strong>
          !
        </p>

        {/* PLACES RESTANTES*/}
        <div className="flex justify-center mt-5 bg-base-300 px-3 py-2 rounded-md border border-primary">
          {isPlayerCountLoading ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : remainingPlace > 0 ? (
            <p className="font-bold text-center">
              Il reste encore{" "}
              <span className="text-success">{remainingPlace}</span>{" "}
              {remainingPlace === 1 ? "place" : "places"}
            </p>
          ) : (
            <p className="font-bold text-center">
              Il n&apos;y a plus de place dispo, mais tu peu t&apos;inscrire en{" "}
              <span className="text-error">file d&apos;attente !</span>
            </p>
          )}
        </div>
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
