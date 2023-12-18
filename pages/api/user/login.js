const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../../../models/userModel');
import { Cookies } from 'react-cookie';


export default async function handler(req, res) {
    // Check if username and password are valid
    
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({ where: { email: email }, });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            console.log("No such user")
            res.status(401).json("No such user");
        } else {
            
            const { student_No, lastName, firstName, isAdmin } = user.dataValues;

            
            const token = jsonwebtoken.sign({ student_No, isAdmin, lastName }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

            const cookieOptions = {
                expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 60 * 60 * 1000),
                httpOnly: true,
                sameSite: 'lax',
                secure: true,
                path: '/'
            };
            res.status(200).json({ status: 'success', token, user:{student_No, lastName, firstName, isAdmin} });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
