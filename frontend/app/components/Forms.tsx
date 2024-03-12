"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaLongArrowAltDown } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { SECTOR_ENUM, LEVEL_ENUM } from "../../utils/enum";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  level: LEVEL_ENUM;
  sector: SECTOR_ENUM;
  console: string;
  controller: string;
};

const Forms = () => {
  const router = useRouter();
  const [submitLoading, setSubmitLoading] = useState(false);
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
      const response = await axios.post("/api/mail", {
        lastName: data.lastName,
        firstName: data.firstName,
        email: data.email,
        level: data.level,
        sector: data.sector,
        console: data.console,
        controller: data.controller,
      });
      setSubmitLoading(false);
      toast.success("Inscription envoyée avec succès");
      router.push("/success");
    } catch (error) {
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

          {/* NOM, PRENOM et EMAIL*/}
          <div className="flex gap-5 flex-col justify-start bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-primary">
            <div className="flex md:flex-wrap md:flew-row   flex-col gap-5">
              <div className="flex flex-col gap-2 w-full flex-1">
                <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70 text-accent"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
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
              <div className="flex flex-col gap-2 w-full flex-1">
                <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70 text-accent"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
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
                  <span className="text-error text-xs">Le nom est trop long</span>
                )}
              </div>
            </div>
            <div className="flex-col gap-2 md:flex">
              <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70 text-accent"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
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
          </div>

          {/* SECTOR ET LEVEL */}
          <div className="flex gap-5 flex-col justify-start bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-primary">
            <select
              disabled={submitLoading}
              className="select select-primary w-full bg-base-300 select-sm "
              {...register("sector", { required: true })}
            >
              <option disabled selected>
                Ta filière
              </option>
              <option value={SECTOR_ENUM.ANIM}>{SECTOR_ENUM.ANIM}</option>
              <option value={SECTOR_ENUM.ARCHI}>{SECTOR_ENUM.ARCHI}</option>
              <option value={SECTOR_ENUM.AUDIO}>{SECTOR_ENUM.AUDIO}</option>
              <option value={SECTOR_ENUM.CREA}>{SECTOR_ENUM.CREA}</option>
              <option value={SECTOR_ENUM.MC}>{SECTOR_ENUM.MC}</option>
              <option value={SECTOR_ENUM.INFO}>{SECTOR_ENUM.INFO}</option>
              <option value={SECTOR_ENUM.EXTERNE}>{SECTOR_ENUM.EXTERNE}</option>
            </select>

            <select
              disabled={submitLoading}
              className="select select-primary w-full bg-base-300 select-sm"
              {...register("level", { required: true })}
            >
              <option disabled selected>
                Niveau etude
              </option>
              <option value={LEVEL_ENUM.B1}>{LEVEL_ENUM.B1}</option>
              <option value={LEVEL_ENUM.B2}>{LEVEL_ENUM.B2}</option>
              <option value={LEVEL_ENUM.B3}>{LEVEL_ENUM.B3}</option>
              <option value={LEVEL_ENUM.M1}>{LEVEL_ENUM.M1}</option>
              <option value={LEVEL_ENUM.M2}>{LEVEL_ENUM.M2}</option>
              <option value={LEVEL_ENUM.EXTERNE}>{LEVEL_ENUM.EXTERNE}</option>
            </select>
          </div>

          {/*Switch */}
          <div className="flex gap-5 flex-col justify-start bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-primary">
            <div className="flex justify-center items-center">
              <label className="text-sm font-bold">
                Si tu participes, es tu ok pour ramener ta switch ?
              </label>
            </div>

            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> Ouai aucun problème ! </p>
              <input
                disabled={submitLoading}
                type="radio"
                className="radio radio-primary"
                value="oui"
                {...register("console")}
              />
            </div>
            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> Non désolé(e) </p>
              <input
                disabled={submitLoading}
                type="radio"
                className="radio radio-primary"
                value="non"
                {...register("console")}
              />
            </div>
          </div>

          {/*Controller */}
          <div className="flex gap-5 flex-col justify-start bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-primary">
            <div className="flex justify-center items-center">
              <label className="text-sm font-bold">
                Est ce que tu as des manettes, ou ta propre manette à ramener ?
              </label>
            </div>

            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> Oui j&apos;ai plusieurs manettes </p>
              <input
                disabled={submitLoading}
                type="radio"
                className="radio radio-primary"
                value="plusieurs manettes"
                {...register("controller")}
              />
            </div>
            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> Oui j&apos;ai ma propre manette </p>
              <input
                disabled={submitLoading}
                type="radio"
                className="radio radio-primary"
                value="yes"
                {...register("controller")}
              />
            </div>
            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> Non désolé(e) </p>
              <input
                disabled={submitLoading}
                type="radio"
                className="radio radio-primary"
                value="no"
                {...register("controller")}
              />
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
    </>
  );
};

export default Forms;
