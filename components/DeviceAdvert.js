import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function DeviceAdvert() {
  const router = useRouter();


  return (
    <motion.div className="flex-1 justify-center mx-10 mt-24 border-2 border-black py-4" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0, transition:{ease:'easeInOut', duration:0.5}}}>
      <div id="heading" className="flex-1 mx-auto justify-center" >
        <h1 className="font-roboto font-extrabold tracking-wide text-6xl text-center w-[50vw] mx-auto text-gray-600">
          Is your Device stressing you?
        </h1>
        <h3 className="font-roboto font-semibold tracking-wide text-2xl text-center">
          WORRY NO MORE... YOU KNOW WHY?😉
        </h3>
      </div>

      <div id="items" className="flex mx-12 justify-evenly py-4">
        <div className="w-[20vw] mx-2  space-y-5 rounded-t-md">
          <Image
            src="/images/engineer.png"
            alt="software"
            className="object-cover rounded-t-md"
            width={300}
            height={300}
          />
          <h1 className="text-xl text-center px-1">
            With Qualified personnel for all your software needs
          </h1>
        </div>
        <div className="w-[20vw] mx-2  rounded-b-md space-y-5 rounded-t-md">
          <Image
            src="/images/time.png"
            alt="software"
            className="rounded-md  bg-white px-2 "
            width={300}
            height={300}
          />
          <h1 className="text-xl text-center px-1">
            At a time that is convenient for you
          </h1>
        </div>
        <div className="w-[20vw] mx-2  space-y-5 rounded-t-md">
          <Image
            src="/images/tools.png"
            alt="software"
            className="object-cover rounded-t-md bg-white py-2 "
            width={300}
            height={300}
          />
          <h1 className="text-xl text-center px-1">
            With the tools to get the job done and done right!!
          </h1>
        </div>
      </div>
      <div className="flex-1 my-3">
        <div className="flex justify-center ">
          <h1 className="text-center text-gray-600 text-4xl font-bold">Click the buttons to view your respective page</h1>
        </div>
        <div className="flex justify-evenly mt-4">
        <button className="bg-[#00B0FF] bg-opacity-50 w-40 h-10 rounded-xl" onClick={()=>router.push("/software")}>
          Software Page
        </button>
        <button className="bg-[#00B0FF] bg-opacity-50 w-40 h-10 rounded-xl" onClick={()=>router.push("/hardware")}>
          Hardware Page
        </button>
        </div>
        
      </div>
    </motion.div>
  );
}
