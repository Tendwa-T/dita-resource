import { useState, useEffect } from 'react';
import { user, useUser } from '@/context/UserContext';

export default function Authenticate() {
    const {user} = useUser();
    const [isAuthenticated, setIsAuthenticated] = useState(false);  

    useEffect(() => {
        if (user) {
            try {
                fetch("http://localhost:5000/protected", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": user?.token,
                    },
                }).then(res => res.json())
                    .then(data => {
                        if (data.success == true) {
                            setIsAuthenticated(true);
                        } else {
                            setIsAuthenticated(false);
                        }
                    }
                    );
            } catch (error) {
                console.log(error);
            }
        } else {
            setIsAuthenticated(false);
        }
    }, [user]);

    return isAuthenticated;
    
}