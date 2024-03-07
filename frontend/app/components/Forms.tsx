"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaLongArrowAltDown } from "react-icons/fa";

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  level: LEVEL_ENUM;
  sector: SECTOR_ENUM;
  switch: string;
  controller: string;
};

enum LEVEL_ENUM {
  B1 = "b1",
  B2 = "b2",
  B3 = "b3",
  M1 = "Master 1",
  M2 = "Master 2",
  EXTERNE = "Externe",
}

enum SECTOR_ENUM {
  INFO = "informatique",
  ARCHI = "Architecture",
  MC = "Marketing&Communication",
  CREA = "Crea",
  AUDIO = "Audiovisuel",
  ANIM = "3D",
  EXTERNE = "Externe",
}

//Externe Informatique Architecture Marketing&Communication Crea Audiovisuel 3D

const Forms = () => {
  const { register, handleSubmit } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    window.navigator.vibrate([150]);
    console.log(data);
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

          {/* NOM ET PRENOM */}
          <div className="flex gap-5 md:flex-row flex-col md:flex-wrap md:justify-center justify-start bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-primary">
            <div className="flex flex-col gap-2">
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
                  {...register("lastName")}
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
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
                  {...register("firstName")}
                />
              </label>
            </div>
            <div className="hidden flex-col gap-2 md:flex">
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
                  type="text"
                  className="grow"
                  placeholder="Adresse mail"
                  {...register("email")}
                />
              </label>
            </div>
          </div>

          {/* SECTOR ET LEVEL */}
          <div className="flex gap-5 md:flex-row flex-col justify-start bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-primary md:flex-wrap md:justify-around">
            <select
              className="select select-primary w-full bg-base-300 select-sm max-w-xs"
              {...register("sector")}
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
              className="select select-primary w-full bg-base-300 select-sm max-w-xs"
              {...register("level")}
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

          {/* EMAIL */}
          <div className="flex gap-5 flex-col justify-start bg-base-200 p-4 rounded-lg mb-6 shadow shadow-primary md:hidden">
            <div className="flex flex-col gap-2">
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
                  type="text"
                  className="grow"
                  placeholder="Adresse mail"
                  {...register("email")}
                />
              </label>
            </div>
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
                type="radio"
                className="radio radio-primary"
                value="oui"
                {...register("switch")}
              />
            </div>
            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> Non désolé </p>
              <input
                type="radio"
                className="radio radio-primary"
                value="non"
                {...register("switch")}
              />
            </div>
          </div>

          {/*Controller */}
          <div className="flex gap-5 flex-col justify-start bg-base-200 p-4 rounded-lg mb-6 md:mb-11 shadow shadow-primary">
            <div className="flex justify-center items-center">
              <label className="text-sm font-bold">
                Est ce que tu as des manettes, ou ta propre manette à ramené ?
              </label>
            </div>

            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> Oui j&apos;ai plusieurs manettes </p>
              <input
                type="radio"
                className="radio radio-primary"
                value="plusieurs manettes"
                {...register("controller")}
              />
            </div>
            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> Oui j&apos;ai ma propre manette </p>
              <input
                type="radio"
                className="radio radio-primary"
                value="yes"
                {...register("controller")}
              />
            </div>
            <div className="flex gap-3 items-center justify-between">
              <p className="text-xs"> Non désolé </p>
              <input
                type="radio"
                className="radio radio-primary"
                value="no"
                {...register("controller")}
              />
            </div>
          </div>

          {/*SUBMIT*/}
          <div className="flex justify-end">
            <button className="btn btn-active btn-primary btn-sm hover:scale-105 active:scale-95">
              <input type="submit" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forms;
