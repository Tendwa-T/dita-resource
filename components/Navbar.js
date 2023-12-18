/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Navbar({ userName }) {
  const router = useRouter();
  const currentPath = router.pathname;
  const textCol = "#00B0FF";


  const logout = () => { 
    router.push("/");
  };

  if (currentPath === "/") {
    return (
      <nav id="nav-bar" className="flex max-w-screen px-9 py-4 bg-white z-50">
        <div className="flex w-1/3 select-none">
          <motion.div
            className="text-[#43a0f8] font-semibold text-2xl py-2 px-3 cursor-pointer"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            DITA'S RESOURCE CENTER
          </motion.div>
        </div>
        <div className="flex w-1/3 justify-end text-lg">
          <motion.ul
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            className="flex w-full justify-end select-none"
          >
            <li
              className={`select-none inline-block px-3 py-2 hover:scale-110 transition ease-in-out duration-300 cursor-default`}
              onClick={() => router.push("/")}
            >
              Home
            </li>
            
            <li
              className={`select-none inline-block px-3 py-2 hover:scale-110 transition ease-in-out duration-300 cursor-default`}
              onClick={() => router.push("/membership")}
            >
              Membership
            </li>
            <li
              className={`inline-block relative px-3 py-2 hover:scale-110 transition ease-in-out duration-300 cursor-default`}
              onClick={() => router.push("/repairs")}
            >
              Repairs
            </li>
          </motion.ul>
        </div>
        <div className="flex w-1/3 justify-end text-lg">
          <motion.ul
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            className="flex w-full space-x-4 justify-end select-none"
          >
            {userName ? (
              <div>
                <li
                  className="inline-block px-3 py-2 hover:scale-110 transition ease-in-out duration-300 underline cursor-default"
                  onClick={() => router.push("/user/profile")}
                >
                  {userName}
                </li>
                <li
                  className="inline-block px-1 py-2 hover:scale-110 transition ease-in-out duration-300 underline cursor-default"
                  onClick={()=>{
                    logout()
                    window.location.reload()
                  }}
                >
                  Logout
                </li>
              </div>
            ) : (
              <div>
              <li
              className="inline-block px-3 py-2 hover:scale-110 transition ease-in-out duration-300 underline cursor-default"
              onClick={() => router.push("/user/login")}
            >
              Login
            </li>
            <li
              className="inline-block px-1 py-2 hover:scale-110 transition ease-in-out duration-300 underline cursor-default"
              onClick={() => router.push("/user/signup")}
            >
              Signup
            </li>
              </div>
            )}
           
          </motion.ul>
        </div>
      </nav>
    );
  }

  if (currentPath === "/repairs") {
    return (
      <nav id="nav-bar" className="flex max-w-screen px-9 py-4 bg-slate-500 z-50">
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
        <div className="flex w-1/3 justify-center text-lg">
          <motion.ul
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            className="flex w-full justify-evenly"
          >
            <li
              className={`select-none inline-block px-3 py-2 hover:scale-110 transition ease-in-out duration-300 cursor-default`}
              onClick={() => router.push("/")}
            >
              Home
            </li>
            <li
              className={`inline-block px-3 py-2 hover:scale-110 transition ease-in-out duration-300 cursor-default`}
              onClick={() => router.push("/membership")}
            >
              Membership
            </li>
            <li
              className={`inline-block px-3 text-2xl scale-110 py-2 transition ease-in-out duration-300 cursor-not-allowed text-[${textCol}]`}
              onClick={() => router.push("/software")}
            >
              Repairs
            </li>
          </motion.ul>
        </div>

        <div className="flex w-1/3 justify-end text-lg">
          <motion.ul
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            className="flex w-full space-x-4 justify-end"
          >
            {userName ? (
              <div>
                <li
                  className="inline-block px-3 py-2 hover:scale-110 transition ease-in-out duration-300 underline cursor-default"
                  onClick={() => router.push("/user/profile")}
                >
                  {userName}
                </li>
                <li
                  className="inline-block px-1 py-2 hover:scale-110 transition ease-in-out duration-300 underline cursor-default"
                  onClick={logout}
                >
                  Logout
                </li>
              </div>
            ) : (
              <div>
              <li
              className="inline-block px-3 py-2 hover:scale-110 transition ease-in-out duration-300 underline cursor-default"
              onClick={() => router.push("/user/login")}
            >
              Login
            </li>
            <li
              className="inline-block px-1 py-2 hover:scale-110 transition ease-in-out duration-300 underline cursor-default"
              onClick={() => router.push("/user/signup")}
            >
              Signup
            </li>
              </div>
            )}
          </motion.ul>
        </div>
      </nav>
    );
  }


  if (currentPath === "/user/login" || currentPath === "/user/signup") {
    return (
      <nav className="flex max-w-screen px-9 py-4 bg-white z-50">
        <div className="flex w-full justify-center">
          <motion.a
            href="/"
            className="text-[#43a0f8] font-semibold text-2xl py-2 px-3 cursor-pointer"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            DITA'S RESOURCE CENTER
          </motion.a>
        </div>
      </nav>
    );
  }

  if (currentPath === "/user/profile") {
    return (
      <nav className="flex max-w-screen px-9 py-4 bg-white z-50">
        <div className="flex w-full justify-center items-center">
          <motion.a
            href="/"
            className="text-[#43a0f8] font-semibold text-2xl py-2 px-3 cursor-pointer"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            DITA'S RESOURCE CENTER
          </motion.a>

          <h1 className="">
            <span className="text-[#00B0FF] font-semibold">~</span>
            <span className="text-[#43a0f8] font-semibold text-xl">{user?.fullName }~</span>
          </h1>
        </div>
      </nav>
    );
  }
}
