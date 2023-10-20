import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Software() {
  const router = useRouter();

  return (
    <div className="flex-1 justify-center mx-10 mt-5 mb-16">
      <div id="software-page" className="flex w-full">
        <motion.div
          id="content"
          className="w-full relative"
          initial={{ y: 100, opacity: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, ease: "easeInOut", duration: 0.5 },
          }}
        >
          <Image
            src="/images/Software.png"
            alt="Software"
            width={1920}
            height={1080}
            quality={100}
            className="object-cover w-full h-[70vh]"
          />
          <div className="top-2/3 absolute w-full">
            <h1 className="font-roboto font-bold text-[#00B0FF] text-7xl text-center">
              Software
            </h1>
          </div>
        </motion.div>
      </div>
      <motion.div className="w-full flex justify-center mt-16" initial={{x:-20, opacity:0}} animate={{x:0, opacity:1, transition:{delay:1, ease:'easeInOut', duration:0.5}}}>
        <h1 className="text-3xl font-bold">Let us know what problem you are facing</h1>
      </motion.div>
      <div className="flex w-full justify-center">
      <form className="w-[50vw] my-10">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 p-2 rounded w-[32vw]"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="admission_number">Student Number</label>
              <input
                type="text"
                id="adm_no"
                className="border border-gray-300 p-2 rounded w-[32vw]"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                type="number"
                id="phoneNumber"
                className="border border-gray-300 p-2 rounded w-[32vw]"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 p-2 rounded w-[32vw]"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="border border-gray-300 p-2 rounded w-[32vw]"
              />
            </div>
            <div className="flex justify-evenly my-10">
              <button className="bg-[#43a0f8] text-white px-3 py-2 rounded-2xl ">
                Cancel
              </button>
              <button className="bg-[#43a0f8] text-white px-3 py-2 rounded-2xl">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
