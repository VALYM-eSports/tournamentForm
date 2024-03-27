"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { FaCheck, FaLongArrowAltDown, FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoIosArrowBack, IoMdMail } from "react-icons/io";
import {
  SECTOR_ENUM,
  LEVEL_ENUM,
  RANKED_ENUM,
  FormInputs,
  TOURNAMENT_DATA_ENUM,
  CONSENT_ENUM,
  RIGHT_IMAGE_ENUM,
} from "../../utils/enum";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Chivo_Mono } from "next/font/google";
import { IoEyeSharp, IoFootball } from "react-icons/io5";
import { SiDiscord } from "react-icons/si";
import { ImCross } from "react-icons/im";

const chivoMono = Chivo_Mono({ subsets: ["latin"] });

const Forms = () => {
  const router = useRouter();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [levelInfo, setLevelInfo] = useState<LEVEL_ENUM>();
  const [isOtherNetwork, setIsOtherNetwork] = useState(false);
  const [isPartner, setIsPartner] = useState(false);
  const [isAlone, setIsAlone] = useState(false);
  const [isConsent, setIsConsent] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [isRightImage, setIsRightImage] = useState(false);

  const handleConsentClick = (event: Event, type: CONSENT_ENUM) => {
    event.preventDefault();
    type === CONSENT_ENUM.CONSENT ? setShowConsent(true) : setShowImage(true);
  }

  const handleClickRefuseConsent = (type: CONSENT_ENUM) => {
    type === CONSENT_ENUM.CONSENT ? setShowConsent(false) : setShowImage(false);
    type === CONSENT_ENUM.CONSENT ? setIsConsent(false) : setIsRightImage(false);
  }

  const handleClickAcceptConsent = (type: CONSENT_ENUM) => {
    type === CONSENT_ENUM.CONSENT ? setShowConsent(false) : setShowImage(false);
    type === CONSENT_ENUM.CONSENT ? setIsConsent(true) : setIsRightImage(true);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const handleClickBack = () => {
    router.push("/");
  };

  const sendEmail = async (data: FormInputs) => {
    try {
      setSubmitLoading(true);
      await axios.post("/api/mail/recap", {
        lastName: data.lastName,
        firstName: data.firstName,
        email: data.email,
        level: data.level,
        sector: levelInfo === LEVEL_ENUM.EXTERNE ? "externe" : data.sector,
        pseudoIg: data.pseudoIg,
        pseudoDiscord: data.pseudoDiscord,
        phoneNumber: data.phoneNumber,
        rank: data.rank,
        network: isOtherNetwork ? data.otherNetwork : data.network,
        partner: isAlone ? data.partnerChoice : data.partnerName,
        rightImage: isRightImage ? "J'accepte" : "Je refuse",
      });
      await axios.post("/api/mail/validation", {
        pseudoIg: data.pseudoIg,
        email: data.email,
      });
      setSubmitLoading(false);
      toast.success("Inscription envoyée avec succès");
      router.push("/success");
    } catch (error) {
      setSubmitLoading(false);
      toast.error("Erreur lors de l'envoi de l'inscription");
      console.log(error);
    }
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    sendEmail(data);
  };

  return (
    <>
      <div className="relative md:w-[50vw] mx-3 my-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center items-center mb-6 gap-3">
            <FaLongArrowAltDown size={15} />
            <h2 className="font-bold text-lg">Formulaire inscription</h2>
            <FaLongArrowAltDown size={15} />
          </div>

          {/* ----------- NOM, PRENOM et EMAIL ---------------*/}
          <div className="flex gap-5 flex-col justify-start bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-primary">
            <div className={chivoMono.className}>
              <h2 className="text-accent text-sm font-semibold pl-1">
                INFORMATION GENERAL
              </h2>
            </div>
            {/* Prenom */}
            <div className="flex md:flex-wrap md:flex-row flex-col gap-5">
              <div className="flex flex-col gap-2 w-full flex-1">
                <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                  <FaUser size={12} className="text-accent" />
                  <input
                    type="text"
                    className="grow"
                    placeholder="Prénom"
                    disabled={submitLoading}
                    {...register("firstName", {
                      required: true,
                      pattern: /^[A-Za-z]+$/,
                      maxLength: 20,
                    })}
                  />
                </label>
                {errors.firstName?.type === "pattern" && (
                  <span className="text-error text-xs">
                    Le prénom doit être composé de lettre uniquement
                  </span>
                )}
                {errors.firstName?.type === "required" && (
                  <span className="text-error text-xs">
                    Le prénom est obligatoire
                  </span>
                )}
                {errors.firstName?.type === "maxLength" && (
                  <span className="text-error text-xs">
                    Le prénomn est trop long
                  </span>
                )}
              </div>
              {/* Nom */}
              <div className="flex flex-col gap-2 w-full flex-1">
                <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                  <FaUser size={12} className="text-accent" />
                  <input
                    type="text"
                    className="grow"
                    placeholder="Nom"
                    disabled={submitLoading}
                    {...register("lastName", {
                      required: true,
                      pattern: /^[A-Za-z]+$/,
                      maxLength: 20,
                    })}
                  />
                </label>
                {errors.lastName?.type === "pattern" && (
                  <span className="text-error text-xs">
                    Le nom doit être composé de lettre uniquement
                  </span>
                )}
                {errors.lastName?.type === "required" && (
                  <span className="text-error text-xs">
                    Le nom est obligatoire
                  </span>
                )}
                {errors.lastName?.type === "maxLength" && (
                  <span className="text-error text-xs">
                    Le nom est trop long
                  </span>
                )}
              </div>
            </div>
            {/* Email */}
            <div className="flex-col gap-2 md:flex">
              <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                <IoMdMail size={15} className="text-accent" />
                <input
                  disabled={submitLoading}
                  type="text"
                  className="grow"
                  placeholder="Adresse mail"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                    maxLength: 50,
                  })}
                />
              </label>
              {errors.email?.type === "pattern" && (
                <span className="text-error text-xs">
                  Le mail doit être valide
                </span>
              )}
              {errors.email?.type === "required" && (
                <span className="text-error text-xs">
                  Le mail est obligatoire
                </span>
              )}
              {errors.email?.type === "maxLength" && (
                <span className="text-error text-xs">
                  Le mail est trop long
                </span>
              )}
            </div>
            <div>
              <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                <FaPhoneAlt size={15} className="text-accent" />
                <input
                  disabled={submitLoading}
                  type="text"
                  className="grow"
                  placeholder="Numéro de téléphone (optionnel)"
                  {...register("phoneNumber", {
                    pattern: /^[0-9]+$/,
                  })}
                />
              </label>
            </div>
          </div>

          {/* -------------------------- INFO GAMING ---------------------- */}
          <div className="flex gap-5 flex-col justify-start bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-primary">
            <div className={chivoMono.className}>
              <h2 className="text-accent text-sm font-semibold pl-1">
                INFORMATION GAMING
              </h2>
            </div>
            {/* Pseudo RL */}
            <div className="flex flex-col gap-2 w-full flex-1">
              <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                <IoFootball size={12} className="text-accent" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Pseudo RL"
                  disabled={submitLoading}
                  {...register("pseudoIg", {
                    required: true,
                    pattern: /^[A-Za-z0-9!@#$_/-]+$/,
                    maxLength: 15,
                  })}
                />
              </label>
              {errors.pseudoIg?.type === "pattern" && (
                <span className="text-error text-xs">
                  Le pseudo n&apos;est pas valide
                </span>
              )}
              {errors.pseudoIg?.type === "required" && (
                <span className="text-error text-xs">
                  Le pseudo est obligatoire
                </span>
              )}
              {errors.pseudoIg?.type === "maxLength" && (
                <span className="text-error text-xs">
                  Le pseudo est trop long
                </span>
              )}
            </div>
            {/* Pseudo Discord */}
            <div className="flex flex-col gap-2 w-full flex-1">
              <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                <SiDiscord size={12} className="text-accent" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Pseudo Discord"
                  disabled={submitLoading}
                  {...register("pseudoDiscord", {
                    required: true,
                    pattern: /^[A-Za-z0-9!@#$%&_/-]+$/,
                    maxLength: 15,
                  })}
                />
              </label>
              {errors.pseudoDiscord?.type === "pattern" && (
                <span className="text-error text-xs">
                  Le pseudo n&apos;est pas valide
                </span>
              )}
              {errors.pseudoDiscord?.type === "required" && (
                <span className="text-error text-xs">
                  Le pseudo est obligatoire
                </span>
              )}
              {errors.pseudoDiscord?.type === "maxLength" && (
                <span className="text-error text-xs">
                  Le pseudo est trop long
                </span>
              )}
            </div>
            {/* Rank */}
            <select
              disabled={submitLoading}
              className="select select-primary w-full bg-base-300 select-sm "
              {...register("rank")}
            >
              <option disabled selected>
                Niveau RL
              </option>
              {Object.values(RANKED_ENUM).map((rank) => (
                <option key={rank} value={rank}>
                  {rank}
                </option>
              ))}
            </select>
          </div>

          {/* ---------------------------------------- SECTOR ET LEVEL ------------------------*/}
          <div className="flex gap-5 flex-col justify-start bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-primary">
            <div className={chivoMono.className}>
              <h2 className="text-accent text-sm font-semibold pl-1">
                INFORMATION ETUDE
              </h2>
            </div>
            {/* Level */}

            <select
              disabled={submitLoading}
              className="select select-primary w-full bg-base-300 select-sm"
              {...register("level", {
                required: true,
                onChange(event) {
                  setLevelInfo(event.target.value as LEVEL_ENUM);
                },
              })}
            >
              <option disabled selected>
                Niveau etude
              </option>
              {Object.values(LEVEL_ENUM).map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>

            {/* Sector */}
            <select
              disabled={submitLoading}
              className={`select select-primary w-full bg-base-300 select-sm ${levelInfo === LEVEL_ENUM.EXTERNE ? "hidden" : ""
                } `}
              {...register("sector")}
            >
              <option disabled selected>
                Ta filière
              </option>
              {Object.values(SECTOR_ENUM).map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
          </div>

          {/*Reseau */}
          <div className="flex gap-5 flex-col justify-start bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-primary">
            <div className="flex justify-center items-center">
              <label className="text-sm font-bold">
                Comment as-tu entendu parler du tournoi ?
              </label>
            </div>

            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> Bouche à oreille </p>
              <input
                disabled={submitLoading}
                type="radio"
                className="radio radio-primary"
                value="Bouche à oreille"
                onClick={() => setIsOtherNetwork(false)}
                {...register("network")}
              />
            </div>
            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> Par les réseaux sociaux </p>
              <input
                disabled={submitLoading}
                type="radio"
                className="radio radio-primary"
                value="Réseaux sociaux"
                onClick={() => setIsOtherNetwork(false)}
                {...register("network")}
              />
            </div>
            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> Autre </p>
              <input
                disabled={submitLoading}
                type="radio"
                className="radio radio-primary"
                onClick={() => setIsOtherNetwork(true)}
                {...register("network")}
              />
            </div>
            {/* Autre reseau */}
            <div
              className={`flex-col gap-2 md:flex ${isOtherNetwork ? "" : "hidden md:hidden"
                }`}
            >
              <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                <input
                  disabled={submitLoading}
                  type="text"
                  className="grow"
                  placeholder="Précisez..."
                  {...register("otherNetwork", {
                    required: isOtherNetwork,
                    pattern: /^[A-Za-z0-9!@#$_/\s-]+$/,
                    maxLength: 50,
                  })}
                />
              </label>
              {errors.partnerName?.type === "required" && (
                <span className="text-error text-xs">
                  Le message est obligatoire
                </span>
              )}
              {errors.partnerName?.type === "pattern" && (
                <span className="text-error text-xs">
                  Le message doit être valide
                </span>
              )}
              {errors.partnerName?.type === "maxLength" && (
                <span className="text-error text-xs">
                  Le message est trop long
                </span>
              )}
            </div>
          </div>

          {/*Partner */}
          <div className="flex gap-5 flex-col justify-start bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-primary">
            <div className="flex justify-center items-center">
              <label className="text-sm font-bold">
                Tu participe au tournois seul ou avec un partenaire ?
              </label>
            </div>

            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> En solo ! </p>
              <input
                disabled={submitLoading}
                type="radio"
                className="radio radio-primary"
                value="Solo"
                onClick={() => {
                  setIsAlone(true);
                  setIsPartner(false);
                }}
                {...register("partner")}
              />
            </div>
            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> J&apos;ai déjà mon coéquipier </p>
              <input
                disabled={submitLoading}
                type="radio"
                className="radio radio-primary"
                value="Avec un partenaire"
                onClick={() => {
                  setIsAlone(false);
                  setIsPartner(true);
                }}
                {...register("partner")}
              />
            </div>
            <div
              className={`flex-col gap-2 md:flex ${isPartner ? "" : "hidden md:hidden"
                }`}
            >
              <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                <input
                  disabled={submitLoading}
                  type="text"
                  className="grow"
                  placeholder="Donne nous son pseudo !"
                  {...register("partnerName", {
                    required: isPartner,
                    pattern: /^[A-Za-z0-9!@#$_/-]+$/,
                    maxLength: 50,
                  })}
                />
              </label>
              {errors.otherNetwork?.type === "required" && (
                <span className="text-error text-xs">
                  Le pseudo est obligatoire
                </span>
              )}
              {errors.otherNetwork?.type === "pattern" && (
                <span className="text-error text-xs">
                  Le pseudo doit être valide
                </span>
              )}
              {errors.otherNetwork?.type === "maxLength" && (
                <span className="text-error text-xs">
                  Le pseudo est trop long
                </span>
              )}
            </div>
          </div>

          {/*PartnerChoice */}
          <div
            className={`flex gap-5 flex-col justify-start bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-primary ${isAlone ? "" : "hidden md:hidden"
              }`}
          >
            <div className="flex justify-center items-center">
              <label className="text-sm font-bold">
                Tu veux un partenaire de quel niveau ?
              </label>
            </div>

            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> Peu importe le niveau ça le fait ! </p>
              <input
                disabled={submitLoading}
                type="radio"
                className="radio radio-primary"
                value="Peu importe le niveau ça le fait !"
                {...register("partnerChoice")}
              />
            </div>
            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> Un gars de mon niveau SVP ! </p>
              <input
                disabled={submitLoading}
                type="radio"
                className="radio radio-primary"
                value="Un gars de mon niveau SVP !"
                {...register("partnerChoice")}
              />
            </div>
          </div>

          {/* -------------------------- CONSENTEMENT ---------------------- */}
          <div className="flex gap-5 flex-col justify-start bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-primary">
            <div className={chivoMono.className}>
              <h2 className="text-accent text-sm font-semibold pl-1">
                CONSENTEMENTS ET ACCORDS
              </h2>
            </div>

            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs">Consentement à la collecte de données</p>
              <div className="flex gap-4 items-center">
                <button className="bg-primary px-2 rounded-md transition duration-100 ease-in-out active:scale-95" onClick={(event: any) => handleConsentClick(event, CONSENT_ENUM.CONSENT)}>Voir les droits</button>
                {isConsent ? <FaCheck className="text-success" size={20} /> : <ImCross className="text-error" size={20} />}
              </div>

            </div>


            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs">Droit à l&apos;image</p>
              <div className="flex gap-4 items-center">
                <button className="bg-primary px-2 rounded-md transition duration-100 ease-in-out active:scale-95" onClick={(event: any) => handleConsentClick(event, CONSENT_ENUM.IMAGE)}>Voir les droits</button>
                {isRightImage ? <FaCheck className="text-success" size={20} /> : <ImCross className="text-error" size={20} />}
              </div>
            </div>
          </div>

          {/*SUBMIT*/}
          <div className="flex justify-between">
            <button
              onClick={handleClickBack}

              className="btn btn-active btn-secondary btn-sm hover:scale-105 active:scale-95"
            >
              <IoIosArrowBack size={20} />
            </button>
            <button
              type="submit"
              className="btn btn-active btn-primary btn-sm hover:scale-105 active:scale-95 min-w-20"
              disabled={!isConsent}
            >
              {submitLoading ? (
                <span className="loading loading-dots "></span>
              ) : (
                "Envoyer"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* ------------------- MODALS ------------------- */}

      {showConsent && <div className="fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center px-2 md:px-0">
        <div className="relative bg-base-100 md:w-[60%] rounded-md px-5 py-5">
          <h2 className="text-accent text-lg font-bold pl-1">Consentement à la collecte de données</h2>
          <div className="flex flex-col gap-2 mt-3 text-md">
            {Object.values(TOURNAMENT_DATA_ENUM).map((data) => (
              <option key={data} value={data} style={{ whiteSpace: 'pre-wrap' }}>
                - {data}
              </option>))}
          </div>
          <div className="flex gap-3 mt-5 justify-end items-center">
            <button className="bg-red-900 px-4 py-1 rounded-md active:scale-95 hover:bg-red-800 transition duration-100 ease-in-out" onClick={() => handleClickRefuseConsent(CONSENT_ENUM.CONSENT)}>Je refuse</button>
            <button className="bg-green-900 px-4 py-1 rounded-md active:scale-95 hover:bg-green-800 transition duration-100 ease-in-out" onClick={() => handleClickAcceptConsent(CONSENT_ENUM.CONSENT)}>J'accepte</button>
          </div>
        </div>
      </div>}

      {showImage && <div className="fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center px-2 md:px-0">
        <div className="relative bg-base-100 md:w-[60%] rounded-md px-5 py-5">
          <h2 className="text-accent text-lg font-bold pl-1">Droit à l&apos;image</h2>
          <div className="flex flex-col gap-2 mt-3 text-md">
            {Object.values(RIGHT_IMAGE_ENUM).map((right) => (
              <option key={right} value={right} style={{ whiteSpace: 'pre-wrap' }}>
                - {right}
              </option>))}
          </div>
          <div className="flex gap-3 mt-5 justify-end items-center">
            <button className="bg-red-900 px-4 py-1 rounded-md active:scale-95 hover:bg-red-800 transition duration-100 ease-in-out" onClick={() => handleClickRefuseConsent(CONSENT_ENUM.IMAGE)}>Je refuse</button>
            <button className="bg-green-900 px-4 py-1 rounded-md active:scale-95 hover:bg-green-800 transition duration-100 ease-in-out" onClick={() => handleClickAcceptConsent(CONSENT_ENUM.IMAGE)}>J'accepte</button>
          </div>
        </div>
      </div>}
    </>
  );
};

export default Forms;
