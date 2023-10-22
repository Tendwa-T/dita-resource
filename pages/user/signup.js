/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function User_Signup() {
  const router = useRouter();
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [student_No, setStudent_No] = useState("");
  const [phone_No, setPhone_No] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleFName();
    handleEmail();
    handleLName();
    handlePass();
    handleStudent_No();
    handlePhone_No();

    const response = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: fName,
        lastName: lName,
        student_No,
        phone_No,
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log("User created", data);

    if (data.success == true) {
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
      const logData = await response.json();
      if (logData.success == true) {
        console.log("Logged In", logData);
      }
    }
  };

  const handleFName = (e) => {
    var first_Name_Element = document.getElementById("first_name");
    var element_val = first_Name_Element.value;
    setFname(element_val);
  };

  const handleLName = (e) => {
    var Last_Name_Element = document.getElementById("last_name");
    var element_val = Last_Name_Element.value;
    setLname(element_val);
  };
  const handleStudent_No = (e) => {
    var student_No_Element = document.getElementById("student_No");
    var element_val = student_No_Element.value;
    setStudent_No(element_val);
  };
  const handlePhone_No = (e) => {
    var phone_No_Element = document.getElementById("phoneNo");
    var element_val = phone_No_Element.value;
    setPhone_No(element_val);
  };
  const handleEmail = (e) => {
    var email_Address_Element = document.getElementById("emailAddress");
    var element_val = email_Address_Element.value;
    setEmail(element_val);
  };
  const handlePass = (e) => {
    var password_Element = document.getElementById("pass");
    var element_val = password_Element.value;
    setPass(element_val);
  };

  return (
    <div id="parent" className="w-full h-full flex justify-center">
      <div id="login_logic" className="flex w-[40vw] justify-center">
        <form
          className="flex-col border border-gray-500 w-full p-8 justify-center space-y-6 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-bold text-center">Signup</h1>

          <div className="flex justify-between items-center">
            <label className="text-center">First Name</label>
            <input
              className="px-3 py-1 border w-[25vw] border-gray-500 rounded-xl"
              id="first_name"
              type="text"
              name="first_name"
              placeholder="John"
              onBlur={handleFName}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="text-center">Last Name</label>
            <input
              className="px-3 py-1 border w-[25vw] border-gray-500 rounded-xl"
              id="last_name"
              type="text"
              name="last_name"
              placeholder="Doe"
              onBlur={handleLName}
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="text-center">Student No.</label>
            <input
              className="px-3 py-1 border w-[25vw] border-gray-500 rounded-xl"
              id="student_No"
              type="number"
              name="student_no"
              maxLength="7"
              placeholder="xx-xxxx"
              onBlur={handleStudent_No}
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="">Phone number</label>
            <input
              className="px-3 py-1 border w-[25vw] border-gray-500 rounded-xl"
              id="phoneNo"
              type="number"
              name="number"
              maxLength="10"
              placeholder="07xxxxxxxx"
              onBlur={handlePhone_No}
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="text-center">Email</label>
            <input
              className="px-3 py-1 border w-[25vw] border-gray-500 rounded-xl"
              id="emailAddress"
              type="email"
              name="email"
              placeholder="someone@something.com"
              onBlur={handleEmail}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="text-center">Password</label>
            <input
              className="px-3 py-1 border w-[25vw] border-gray-500 rounded-xl"
              id="pass"
              type="password"
              name="password"
              placeholder="Password"
              onBlur={handlePass}
            />
          </div>
          <div className="flex-col space-y-5">
            <button
              className="bg-[#00B0FF] bg-opacity-70 w-full h-8 rounded-lg"
              type="submit"
            >
              Sign Up
            </button>
            <div className="bg-[#00B0FF] bg-opacity-70 w-full h-8 rounded-lg flex justify-center">
              <Link href="/" className="pt-1">
                Cancel
              </Link>
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
      </div>
    </div>
  );
}
