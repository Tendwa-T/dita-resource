/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Image from "next/image";

export default function Landing() {
  return (
    <div
      id="landing"
      className="flex justify-center h-[70vh] mx-10 mt-20 mb-10 select-none"
    >
      <motion.div
        className="flex w-1/2"
        initial={{ opacity: 0, y: 200 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            ease: [0, 0.71, 0.2, 1.01],
            duration: 0.3,
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <div className="flex justify-center mx-auto">
          <div className="flex-row my-[12vh] px-7">
            <h1 className="text-7xl tracking-wide font-bold font-roboto">
              Welcome to DITA'S RESOURCE SITE.
            </h1>
            <h3 className="text-xl py-6">
              Simplifying tech service delivery in and around Daystar University
              for the betterment of the community by leveraging on the power of technology.
            </h3>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-1/2 border-2  flex-1 m-auto"
        initial={{ opacity: 0, y: 200 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
            duration: 0.3,
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <div className="flex justify-center">
          <Image
            src="/images/Dita Logo.png"
            alt="landing"
            className="object-center"
            width={400}
            height={400}
          />
        </div>
      </motion.div>
    </div>
  );
}
