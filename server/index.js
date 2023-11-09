require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const db = require('./config/db');
const jwt = require('jsonwebtoken');
const sessions = require('express-session');
const User = require('./models/userModels');


app.use(sessions({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userRoute = require('./routes/userRoute');

const authenticate = async (req, res, next) => {
    const token = req.cookies.jsonAuthentication;
    if (!token) return res.status(401).json({ message: 'Log In' });
    try {
        const userVer = jwt.verify(token, process.env.JWT_SECRET);
        req.user = userVer;
        // implement sessions for the user
        req.session.user = { id: userVer._id, lastName: userVer.lastName, student_No: userVer.student_No, email: userVer.email, };
        //console.log(userVer.id);
        const userName = await db.query('SELECT * FROM users WHERE student_No = ?', [userVer.student_No], async (error, results) => {
            if (error) throw error;
            return results;
        }
        );
        res.json({ success: true, message: `Successfully Authorized: Hello ${userName.lastName}!!` })
        next();
    } catch (error) {
        res.status(403).json(error);
    }
};

app.use('/api/users', userRoute);


app.get('/protected', authenticate)

app.get('/api/testpage', (req, res) => {
    res.json({ message: 'Hello from the server!' })
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});
