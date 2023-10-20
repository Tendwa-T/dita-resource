/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { motion } from "framer-motion";

export default function PopForm() {
  const [showPopup, setPopup] = useState(false);
  const emailAddress = "tendwatirus222218@daystar.ac.ke"
  const subject = "Device Service"
  const body = "Hello Dita's Resource Center, I would like to inquire about..."
  const email = `mailto:${emailAddress}?subject=${subject}&body=${body}`


  const togglePopup = () => {
    setPopup(!showPopup);
  };



  return (
    <div>
      <button
        onClick={togglePopup}
        className="bg-[#00B0FF] bg-opacity-50 text-black w-40 px-4 py-2 rounded-xl"
      >
        Find Tutor
      </button>
      {showPopup && (
        <motion.div className="fixed inset-0 flex items-center justify-center z-10 w-[99vw] bg-black bg-opacity-40" initial={{y:50, opacity:0}} animate={{y:0, opacity:1, transition:{duration:0.5, ease:"easeInOut"}}}>
          <div className="bg-white p-4 rounded w-96 relative">
            <span
              className="absolute top-2 right-2 text-gray-700 cursor-pointer text-5xl"
              onClick={togglePopup}
            >
              &times;
            </span>
            <h2 className="text-2xl font-bold mb-4">Pop-up Form</h2>
            <form className="space-y-2" onSubmit={()=>window.alert("Message sent successfully!!")}>
              {/* Add form fields and submit button here */}
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div>
                <label htmlFor="admission_number">Student Number</label>
                <input
                  type="number"
                  id="adm_no"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="flex justify-evenly">
              <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={togglePopup}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  
                >
                  Submit
                </button>
                
              </div>
              <p className="text-center italic text-sm">Don't Call us, we'll call you! 😉😉</p>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
}
