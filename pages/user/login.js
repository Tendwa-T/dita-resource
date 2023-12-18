/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../context/UserContext";
import { useCookies } from "react-cookie";

export default function User_Login() {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")
  const { user, setUser } = useUser();
  const [cookies, setCookie, get] = useCookies(["token"], ["user"]);
  const [token, setToken] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [subCount, setSubCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubCount(subCount + 1)

    const response = await fetch("/api/user/login", {
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

    setCookie("token", data.token, {
      path: "/",
      maxAge: 3600, // Expires after 1hr
      sameSite: true,
    });
    setCookie("user", data.user, {
      path: "/",
      maxAge: 3600, // Expires after 1hr
      sameSite: true,
    });
    if (data.status === "success") {
      setIsSuccess(true);
      setUser(data.user);
      setToken(data.token);
    }


  }
  useEffect(() => {

    while (subCount > 0) {
      if (!isSuccess && isSuccess !== null) {
        toast.error("Invalid Credentials", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
        });
      } else {
        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
        });
        if (cookies.user) {
          router.push("/")
        }
      }
    }
  }, [cookies.user, isSuccess, router, subCount])


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
    <div id="parent" className="w-[100vw] h-[65vh] flex">
      <div id="login_logic" className="flex w-full justify-center">
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
              autoComplete="password                                                                                                                                                                            "
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
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}


