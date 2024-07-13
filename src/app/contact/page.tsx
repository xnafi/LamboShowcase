"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import Car from "../../../public/assets/contact.jpg";
import logo from "../../assets/logoWhite.png";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // Replace with actual submission logic
    reset();
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat overflow-x-hidden">
      <motion.div
        initial={{ x: 1600, opacity: 0.1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "backInOut" }}
        className="absolute w-full h-full overflow-hidden z-0"
      >
        <div className="w-full h-full">
          <Image
            alt="Lamborghini"
            src={Car}
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: -1300, opacity: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "circIn" }}
        className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 z-20"
      >
        <div className="text-white">
          <div className="mb-6 flex flex-col items-center">
            <Image src={logo} width={250} height={250} priority alt="Logo" />
            <span className="text-gray-300 mt-2 uppercase">Contact Us</span>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center"
          >
            <div className="my-2">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-3xl border-none bg-transparent bg-opacity-50 px-6 py-2 text-center text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md w-full"
                {...register("name", { required: "Name is required" })}
              />
              <div className="text-center ">
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    {errors.name.message}
                  </span>
                )}
              </div>
            </div>
            <div className="my-2">
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-3xl border-none bg-transparent bg-opacity-50 px-6 py-2 text-center text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md w-full"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <div className="text-center ">
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}{" "}
              </div>
            </div>
            <div className="my-2">
              <textarea
                placeholder="Your Message"
                className="rounded-3xl border-none bg-transparent bg-opacity-50 px-6 py-2 text-center text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md w-full h-40 resize-none"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              <div className="text-center ">
                {errors.message && (
                  <span className="text-red-500 text-xs">
                    {errors.message.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-3 flex justify-center">
              <button
                type="submit"
                className="rounded-3xl bg-[#4db5ff] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
