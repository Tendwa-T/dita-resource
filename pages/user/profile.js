import { useState, useEffect } from "react";
import { useUser } from "@/context/UserContext";
import { useRef } from "react";
import { motion } from "framer-motion";


export default function Profile() {
    const { user } = useUser();
    let initials = "";
    const [userInit, setUserInit] = useState("");
    const initialsRef = useRef("");
    const [textCol, setTextCol] = useState("")

    useEffect(() => {
        if (user) {
            const fullName = user.fullName;
            for (const word of fullName.split(" ")) {
                initialsRef.current += word[0];
            }
            //trim the iniiatials to 2 characters
            initialsRef.current = initialsRef.current.substring(0, 2);
            getRandomHexColor()
            setUserInit(initialsRef.current);
        }
    }, [user]);

    function getRandomHexColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        color = color.trim().toLowerCase();
        setTextCol(color)
    }


    return (
        // <motion.div className="flex-1 justify-center mx-8 items-center bg-blue-200" initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5, ease:'linear'}}}>
        //     <div className="flex-col justify-center items-center mx-auto w-full border-2 border-black my-3 p-4 ">
        //         <div className="flex justify-center items-center w-full h-24 border-b-2 border-black">
        //             <div
        //                 style={{ backgroundColor: textCol, color: "white" }}
        //                 className="w-16 h-16 rounded-full border border-black flex justify-center items-center text-black text-xl font-semibold text-center"
        //             >
        //                 <h1>{userInit}</h1>
        //             </div>
        //         </div>

        //         <div className="text-center">
        //             <h1 className="text-2xl font-semibold">User Profile</h1>
        //         </div>
        //     </div>
        //     <div>
        //         <motion.div id="userDetails" className="flex justify-center border border-black p-2" initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5, ease:'linear', delay:0.3}}}>
        //             <div className="flex-col justify-center items-center mx-auto w-full border-2 border-black my-3 p-4 ">
        //                 <div className=" w-1/2 text-center spacing-y-2">
        //                     <h1 className="text-xl font-semibold text-left">Personal Details</h1>
        //                     <h1 className="text-xl font-semibold">Full Name: {user?.fullName}</h1>
        //                     <h1 className="text-xl font-semibold">Email: {user?.email}</h1>
        //                     <h1 className="text-xl font-semibold">Student Number: {user?.student_No}</h1>
        //                 </div>
        //             </div>
        //         </motion.div>
        //     </div>
        // </motion.div>
        <div>
            <h1>
                Coming Soon!!
            </h1>
        </div>


    )
}