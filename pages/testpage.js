import React, { useEffect, useState } from 'react'
import { useUser } from '@/context/UserContext';


export default function TestPage() {

    const [message, setMessage] = useState("Kindly LogIn first...");
    const { user } = useUser();
    

    useEffect(() => {
        
        const response =  fetch("http://localhost:5000/protected", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": user?.token,
            },
        }).then(res => res.json())
            .then(data => {
                
                setMessage(data.message || data.error);
            }
            );

    }, [user])

    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}