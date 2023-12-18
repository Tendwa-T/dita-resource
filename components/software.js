import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Software() {
  const router = useRouter();
  const [cookies] = useCookies(["token"], ["user"]);
  const [userName, setUserName] = useState("");
  const [student_No, setStudent_No] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (cookies.user) {
      console.log(cookies.user);
      /* setUserName(cookies.user.firstName + " " + cookies.user.lastName);
      setStudent_No(cookies.user.student_No);
      setEmail(cookies.user.email); */
    }
  }, [cookies])

  return (
    <div className="flex-1 justify-center border border-black p-4 mt-5 mb-16 -z-10 mx-10">
      <div id="software-page" className="flex w-full">
        <motion.div
          id="content"
          className="w-full relative -z-20"
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
            className="w-full object-cover -z-10 h-[70vh] scale-75"
          />
          <div className="top-[65vh] absolute w-full mt-3.5">
            <h1 className="font-roboto font-bold text-[#00B0FF] text-7xl text-center">
              Software
            </h1>
          </div>
        </motion.div>
      </div>
      <div className="h-[70vh] border border-black mt-20">
        <div className="flex-1 mt-4">
          {/* Describe a software issue and possible tale tell signs of software issues */}
          <h1 className="font-roboto font-bold text-3xl text-center">
            Software issues
          </h1>
          <span className="font-roboto font-bold text-[#00B0FF] text-2xl">
            Software issues are problems with the computer programs that run on your device. They can cause a variety of problems, such as:
          </span>
          <ul className="list-disc list-inside">
            <li className="font-roboto font-bold text-xl ">
              Apps crashing or freezing
            </li>
            <li className="font-roboto font-bold text-xl ">
              Your device running slowly or becoming unresponsive
            </li>
            <li className="font-roboto font-bold text-xl ">
              Seeing error messages or pop-ups
            </li>
            <li className="font-roboto font-bold text-xl ">
              Being unable to connect to the internet
            </li>
            <li className="font-roboto font-bold text-xl ">
              Battery life draining quickly
            </li>
            <li className="font-roboto font-bold text-xl ">
              Your device overheating
            </li>
            <span>Among others..</span>

          </ul>
          <span className="font-roboto font-bold text-[#00B0FF] text-2xl">
            Software issues can be caused by a number of things, but most
            common causes are:
          </span>
          <ul className="list-disc list-inside">
            <li className="font-roboto font-bold text-[#00B0FF] text-xl text-center">
              Virus or malware
            </li>
            <li className="font-roboto font-bold text-[#00B0FF] text-xl text-center">
              Corrupted files
            </li>
            <li className="font-roboto font-bold text-[#00B0FF] text-xl text-center">
              Corrupted registry
            </li>
            <li className="font-roboto font-bold text-[#00B0FF] text-xl text-center">
              Corrupted drivers
            </li>
            <li className="font-roboto font-bold text-[#00B0FF] text-xl text-center">
              Corrupted software
            </li>
            <li className="font-roboto font-bold text-[#00B0FF] text-xl text-center">
              Corrupted operating system
            </li>
          </ul>
        </div>
      </div>
      <motion.div className="w-full flex justify-center mt-16" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 1, ease: 'easeInOut', duration: 0.5 } }}>
        <h1 className="text-3xl font-bold">Let us know what problem you are facing</h1>
      </motion.div>
      <div className="flex w-full justify-center">
        <form className="w-[50vw] my-10 p-4 border border-gray-400">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 p-2 rounded w-[32vw]"
                value={userName}
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
                value={email}
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="border border-gray-300 p-2 rounded w-[32vw]"
                value={message}
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
