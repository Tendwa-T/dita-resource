/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../context/UserContext";

export default function User_Login() {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")
  const [token, setToken] = useState("")
  const { user, setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.success == true) {
      //implement a toast 
      toast.success(`Welcome ${data.fullName}. Please wait to be re-routed`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      setToken(data.token);


      setUser({
        fullName: data.fullName,
        student_No: data.student_No,
        email: data.email,
        token: data.token,
      })

      setTimeout(() => {
        router.replace("/");
      }, 2000);


    } else {
      toast.error(`Error: ${data.error}`, { theme: "dark" });
      console.log(`Error ${data.error}`);
    }
  }

  const handleProtectedRequest = async () => {
    router.replace("/testpage");
  };

  const handlePass = (e) => {
    var password_Element = document.getElementById("pass");
    var element_val = password_Element.value;
    setPass(element_val);
  };

  const handleEmail = (e) => {
    var email_Address_Element = document.getElementById("emailAddress");
    var element_val = email_Address_Element.value;
    setEmail(element_val);
  };


  return (
    <div id="parent" className="w-full h-[65vh] flex">
      <div id="login_logic" className="flex w-full justify-center">
        {token ? (
          <button onClick={handleProtectedRequest}>Protected Request</button>
        ) : (
          <h1>Not Logged In</h1>
        )}
        <form className="flex-col border border-gray-500 w-[30vw] p-8 justify-center my-auto space-y-6 rounded-xl" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bold text-center">Login</h1>
          <div className="flex flex-col justify-center">
            <label className="text-center">E-mail</label>
            <input
              className="p-3 border border-gray-500 rounded-xl"
              id="emailAddress"
              type="email"
              name="email"
              placeholder="someone@something.com"
              onBlur={handleEmail}
            />
          </div>
          <div className="flex flex-col justify-center">
            <label className="text-center">Password</label>
            <input
              className="p-3 border border-gray-500 rounded-xl"
              id="pass"
              type="password"
              name="password"
              autoComplete="password"
              placeholder="Password"
              onBlur={handlePass}
            />
          </div>
          <div className="flex-col space-y-5">
            <button
              className="bg-[#00B0FF] bg-opacity-70 w-full h-8 rounded-lg"
              type="submit"
              value="Login"
            >
              Login
            </button>
            <div className="bg-[#00B0FF] bg-opacity-70 w-full h-8 rounded-lg flex justify-center">
              <Link href="/" className="pt-1">Cancel</Link>
            </div>
          </div>
          <div id="loginWithGoogle" className="flex justify-center">
            <button
              className="flex w-full h-[50px] rounded-full border-slate-400 border-2 justify-center items-center hover:bg-[#00B0FF] hover:bg-opacity-20"
              type="submit"
              value="Login"
            >
              <Image
                src="/images/googleLogin.png"
                alt="Google-logo"
                className="object-cover"
                width={40}
                height={40}
                quality={100}
              />
              Continue with Google
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
