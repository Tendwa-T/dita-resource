import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import PopForm from "./PopForm";

export default function Tutor() {
  const router = useRouter();
  return (
    <motion.div
      className="flex justify-center mx-10 mt-24  py-4 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, ease: "easeInOut", duration: 0.5 },
      }}
    >
      <div
        id="heading"
        className="flex-row mx-auto justify-center w-1/2 space-y-4"
      >
        <h1 className="font-roboto font-extrabold tracking-wide text-6xl text-center w-[50vw] mx-auto text-gray-600">
          Are your ACS Classes Not Making Sense?
        </h1>
        <h3 className="font-roboto font-semibold tracking-wide text-2xl w-[50vw] text-center">
          Come to us....More than one head is  better than one😉
        </h3>
        <div className="flex justify-evenly mt-4">
          <PopForm />
        </div>
      </div>

      <div className="flex mx-auto justify-center w-1/2">
        <Image
          src="/images/tutor.png"
          alt="software"
          className="object-cover rounded-t-md"
          width={300}
          height={300}
        />
      </div>
    </motion.div>
  );
}
