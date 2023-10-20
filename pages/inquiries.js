import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Inquire() {
  const router = useRouter();
  return (

      <div id="parent">
        <div
          id="software-form"
          className="flex justify-center w-screen mx-auto bg-gradient-to-br from-blue-800 to bg-yellow-500 h-[85vh]"
        >
          <motion.div className="w-screen mx-auto" initial={{y:-100, opacity:0}} animate={{ y:0, opacity:1, transition:{ duration:1, ease:'easeInOut'}}}>
            <div className="flex w-screen justify-center my-16">
              <h1 className="text-5xl">Inquiry Form</h1>
            </div>
            <form className="flex-row w-[40vw] mx-auto justify-center border-2 mt-10 p-5 space-y-10 rounded-2xl">
              <div className="flex space-x-2 w-full justify-between">
                <label>Student ID</label>
                <input type="number" className="text-black px-2 rounded-2xl" />
              </div>

              <div className="flex space-x-2 w-full justify-between">
                <label>Email</label>
                <input type="email" className="text-black px-2 rounded-2xl" />
              </div>

              <div className="flex space-x-2 w-full justify-between">
                <label>Description</label>
                <textarea
                  type="email"
                  className="text-black px-2 rounded-2xl"
                />
              </div>

              <div className="flex w-full justify-center space-x-32">
                <button className="bg-[#43a0f8] text-white px-3 py-2 rounded-2xl">
                  Cancel
                </button>
                <button className="bg-[#43a0f8] text-white px-3 py-2 rounded-2xl">
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
  );
}
