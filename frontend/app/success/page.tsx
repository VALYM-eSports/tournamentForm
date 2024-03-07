import React from "react";

const SuccesPage = () => {
  return (
    <div>
      <div className="h-[50vh] flex gap-5 flex-col justify-center px-2 mt-5 md:mt-11">
        <div className="bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-success">
          <p className="text-xl font-bold text-center text-success mb-2">
            <strong>FELICITATION !!</strong>
          </p>
          <p className="text-lg font-bold text-center">
            Tu t&apos;es inscrit au tournois !
          </p>
          <p className="text-lg font-bold text-center">
            On se voit le <strong className="text-accent">15 Mars</strong>.
          </p>
          <p className="text-lg font-bold text-center">
            Prend le temps de te préparer pour{" "}
            <strong className="text-accent">rafler la mise </strong> ! ;)
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccesPage;
