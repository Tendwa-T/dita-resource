const User = require('../models/userModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')


const createUser = async (req, res) => {
    const { firstName, lastName, student_No, email, phone_No, password } = req.body;

    try {
        const user = await User.create({
            firstName,
            lastName,
            student_No,
            email,
            phone_No,
            password
        });

        res.status(201).json({ success: true, fullName: user.firstName + " " + user.lastName, student_No: user.student_No, email: user.email});
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, error: 'Please provide an email and password' });
    }

    try {
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return res.status(404).json({ success: false, error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(404).json({ success: false, error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE, });
        // implement sessions for the user
        req.session.user = { id: user._id, firstName: user.firstName, lastName: user.lastName, student_No: user.student_No, email: user.email, token };

        res.status(200).json({ success: true, token: token, fullName: user.firstName + " " + user.lastName, student_No: user.student_No, email: user.email });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const student_No = req.params.id;
        const user = await User.find(student_No);

        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const student_No = req.params.id;
        const user = await User.find(student_No);
        if (user) {
            user.firstName = req.body.firstName || user.firstName;
            user.lastName = req.body.lastName || user.lastName;
            user.student_No = req.body.student_No || user.student_No;
            user.email = req.body.email || user.email;
            user.phone_No = req.body.phone_No || user.phone_No;
            user.password = req.body.password || user.password;

            const updatedUser = await user.save();

            res.status(200).json({ success: true, data: updatedUser });
        } else {
            res.status(404).json({ success: false, error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const student_No = req.params.id;
        const user = await User.find(student_No);
        if (user) {
            await user.findAndDelete(student_No);

            res.status(200).json({ success: true, data: {} });
        } else {
            res.status(404).json({ success: false, error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};





