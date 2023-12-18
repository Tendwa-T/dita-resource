const bycrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/userModel');

//login user
const login = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({ where: { email: email }});
        if (!user || !(await bycrypt.compare(password, user.password))) {
            res.status(401).json("No such user");
        } else {
            const { student_No, lastName, isAdmin } = user;
            const token = jsonwebtoken.sign({ student_No, isAdmin, lastName }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
            
            const cookieOptions = {
                expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                httpOnly: true,
                sameSite: 'lax',
                secure: true,
                path: '/'
            };

            res.cookie('jsonAuthentication', token, cookieOptions);
            req.session.user = { id: user._id, lastName: user.lastName, student_No: user.student_No, email: user.email };
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(500).json(error);
        return false;
    }
}
// authenticate user
const authenticate = async (req, res, next) => {
    const token = req.cookies.jsonAuthentication;
    if (!token) return res.status(401).json({ message: 'Log In' });
    try {
        const decodedToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decodedToken.student_No);
        if (!user) return res.status(401).json({ message: 'No such user' });
        req.user = user;
        req.session.user = { id: user._id, lastName: user.lastName, student_No: user.student_No, email: user.email };
        res.json({ success: true, message: `Successfully Authorized: Hello ${user.lastName}!!` });
        next();
    } catch (error) {
        res.status(403).json(error);
    }
}
//logout user
const logout = (req, res) => {
    try {
        res.clearCookie('jsonAuthentication');
        res.json({ message: 'Successfully logged out' });
    } catch (error) {
        res.status(500).json(error);
    }
}

//register user
const register = async (req, res) => {
    try {
        const { student_No, firstName, lastName, email, password, isAdmin } = req.body;
        const hashedPassword = await bycrypt.hash(password, 10);
        const user = await User.create({ student_No, firstName, lastName, email, password: hashedPassword, isAdmin });
        const response = { success: true, message: 'User created' };
        return response;
    } catch (error) {
        return error;
    }
};

module.exports = { login, authenticate, logout, register };