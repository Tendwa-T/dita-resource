const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide your First name']
    },
    lastName: {
        type: String,
        required: [true, 'Please provide your Last name']
    },
    student_No: {
        type: String,
        required: [true, 'Please provide your student number'],
        length: 7,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please provide your email address'],
        unique: true
    },
    phone_No: {
        type: Number,
        required: [true, 'Please provide your phone number'],
        length: 10,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide your password'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
userSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id, email: this.email, lastName: this.lastName }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
}

userSchema.post('save', function (error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('Email or Student Number already exists'));
    } else {
        next(error);
    }
}
);

// Match user entered password to hashed password in database
userSchema.statics.loginEmail = async function (email, password) {
    const user = await this.findOne({ email }).select('+password');
    if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) return user;
        throw Error('Invalid password');
    }
}

module.exports = mongoose.model('User', userSchema);
