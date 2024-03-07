"use client";
import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import DeclineComponent from "../components/declineComponent";

const declinePage = () => {
  return (
    <div className="h-[50vh] flex gap-5 flex-col justify-center px-2 mt-5 md:mt-11">
      <div className="bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-accent">
        <p className="text-xl font-bold text-center">C&apos;est dommage...</p>
        <p className="text-xl font-bold text-center">
          Tu rate un super tournoi...
        </p>
        <p className="text-xl font-bold text-center">
          {" "}
          Cela dit, tu peu toujours{" "}
          <strong className="text-accent">changer d&apos;avis</strong> !
        </p>
      </div>
      <div className="flex justify-center items-center mb-5">
        <FaArrowCircleDown size={60} className="text-accent" />
      </div>
      <DeclineComponent />
    </div>
  );
};

export default declinePage;
