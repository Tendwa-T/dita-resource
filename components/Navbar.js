/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [textCol, setTextCol] = useState("#00B0FF");

  useEffect(() => {
    if (currentPath === "/software") {
      setTextCol("#00B0FF");
    } else if (currentPath === "/hardware") {
      setTextCol("#00B0FF");
    } else if (currentPath === "/inquiries") {
      setTextCol("#00B0FF");
    } else {
      setTextCol("#00B0FF");
    }
  }, [currentPath]);

  if (currentPath === "/") {
    return (
      <nav id="nav-bar" className="flex max-w-screen px-9 py-4 bg-white z-50">
        <div className="flex w-1/3">
          <motion.a
            href="/"
            className="text-[#43a0f8] font-semibold text-2xl py-2 px-3 cursor-pointer"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            DITA'S RESOURCE CENTER
          </motion.a>
        </div>
        <div className="flex w-2/3 justify-center text-lg">
          <motion.ul
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            className="flex w-full justify-evenly"
          >
            <li
              className={`inline-block px-3 py-2 hover:scale-110 transition ease-in-out duration-300 cursor-default`}
              onClick={() => router.push("/software")}
            >
              Software
            </li>
            <li
              className="inline-block px-3 py-2 hover:scale-110 transition ease-in-out duration-300 cursor-default"
              onClick={() => router.push("/hardware")}
            >
              Hardware
            </li>
          </motion.ul>
        </div>
      </nav>
    );
  }

  if (currentPath === "/software") {
    return (
      <nav id="nav-bar" className="flex max-w-screen px-9 py-4 bg-white z-50">
        <div className="flex w-1/3">
          <motion.a
            href="/"
            className="text-[#43a0f8] font-semibold text-2xl py-2 px-3 cursor-pointer"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            DITA'S RESOURCE CENTER
          </motion.a>
        </div>
        <div className="flex w-2/3 justify-center text-lg">
          <motion.ul
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            className="flex w-full justify-evenly"
          >
            <li
              className={`inline-block px-3 text-2xl scale-110 py-2 transition ease-in-out duration-300 cursor-not-allowed text-[${textCol}]`}
              onClick={() => router.push("/software")}
            >
              Software
            </li>
            <li
              className="inline-block px-3 py-2 hover:scale-110 transition ease-in-out duration-300 cursor-default"
              onClick={() => router.push("/hardware")}
            >
              Hardware
            </li>
          </motion.ul>
        </div>
      </nav>
    );
  }

  if (currentPath === "/hardware") {
    return (
      <nav id="nav-bar" className="flex max-w-screen px-9 py-4 bg-white z-50">
        <div className="flex w-1/3">
          <motion.a
            href="/"
            className="text-[#43a0f8] font-semibold text-2xl py-2 px-3 cursor-pointer"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            DITA'S RESOURCE CENTER
          </motion.a>
        </div>
        <div className="flex w-2/3 justify-center text-lg">
          <motion.ul
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            className="flex w-full justify-evenly"
          >
            <li
              className={`inline-block px-3 py-2 hover:scale-110 transition ease-in-out duration-300 cursor-default`}
              onClick={() => router.push("/software")}
            >
              Software
            </li>
            <li
              className={`inline-block px-3 text-2xl py-2 hover:scale-110 transition ease-in-out duration-300 cursor-not-allowed text-[${textCol}]`}
              onClick={() => router.push("/hardware")}
            >
              Hardware
            </li>
          </motion.ul>
        </div>
      </nav>
    );
  }
}


