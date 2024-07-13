"use client";
import Image from "next/image";
import logo from "../../assets/logoWhite.png";
import {
  useForm,
  SubmitHandler,
  Ref,
  MultipleFieldErrors,
  Message,
} from "react-hook-form";
import { motion } from "framer-motion";
import Car from "../../assets/car.png";

const SignUpPage = () => {
  type Inputs = {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
  };

  type FieldError = {
    type: string;
    ref?: Ref;
    types?: MultipleFieldErrors;
    message?: Message;
  };

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<Inputs, FieldError>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray[#22092C] bg-cover bg-no-repeat no-scrollbar overflow-x-hidden">
      <motion.div
        initial={{
          x: 0,
          opacity: 1,
        }}
        animate={{ x: 1900, opacity: 1, rotate: 0, overflow: "hidden" }}
        transition={{ duration: 2, ease: "backInOut" }}
        className="absolute no-scrollbar overflow-x-hidden bgWrap !z-10"
      >
        <div className="bgWrap">
          <Image
            alt="lambo"
            src={Car}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              transform: "scaleX(-1)",
            }}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ y: -1300, opacity: 0.1 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "circIn" }}
        className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 z-20"
      >
        <div className="text-white">
          <div className="mb-6 flex flex-col items-center ">
            <Image src={logo} width={250} height={250} priority alt="" />
            <span className="text-gray-300 mt-2 uppercase">
              Enter Sign-Up Details
            </span>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center"
          >
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-transparent bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                placeholder="Full Name"
                {...register("fullName", { required: "Full Name is required" })}
              />
              <div className="text-center">
                {errors.fullName && (
                  <span className="text-red-500 text-xs">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-transparent bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                placeholder="id@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <div className="text-center">
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-transparent bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              <div className="text-center">
                {errors.phone && (
                  <span className="text-red-500 text-xs">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-4 text-lg text-center">
              <input
                className="rounded-3xl border-none bg-transparent bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                    message:
                      "Invalid password format (6-16 characters with special characters)",
                  },
                })}
              />
              <div className="text-center">
                {errors.password && (
                  <span className="text-red-500 text-xs text-wrap">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-transparent bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
              />
              <div className="text-center">
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-3 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-[#4db5ff] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
