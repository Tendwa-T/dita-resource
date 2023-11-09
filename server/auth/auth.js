const bycrypt = require('bcrypt');
const db = require('../config/db');
const jsonwebtoken = require('jsonwebtoken');

//login user
const login = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
            console.log(results);
            if (results.length === 0 || !(await bycrypt.compare(password, results[0].password))) {
                res.status(401).json("No such user");
            } else {
                const { student_no, firstName, lastName, email, isAdmin } = results[0];
                const user = { student_no, firstName, lastName, email, isAdmin };
                const token = jsonwebtoken.sign({ student_no, isAdmin, lastName }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
                console.log(token);
                const cookieOptions = {
                    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true,
                    sameSite: 'lax',
                    secure: true,
                    path: '/'
                };
                req.session.user = results[0];
                res.cookie('jsonAuthentication', token, cookieOptions);
                res.status(200).json({ status: 'success', user });
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
}
// authenticate user
const authenticate = async (req, res, next) => {
    const token = req.cookies.jsonAuthentication;
    if (!token) return res.status(401).json({ message: 'Log In' });
    try {
        const userVer = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        req.user = userVer;
        // implement sessions for the user
        req.session.user = { id: userVer._id, lastName: userVer.lastName, student_No: userVer.student_No, email: userVer.email, };
        //console.log(userVer.id);
        const userName = await User.findById(userVer.id);
        res.json({ success: true, message: `Successfully Authorized: Hello ${userName.lastName}!!` })
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
        db.query('INSERT INTO users SET ?', { student_No, firstName, lastName, email, password: hashedPassword, isAdmin }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);
                res.status(200).json({ message: 'User registered' });
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { login, authenticate, logout, register };