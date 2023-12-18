require('dotenv').config();
const repairModel = require('../models/repairModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const createRepair = async (req, res) => {
    const { student_No, device, description, date, status } = req.body;

    try {
        const repair = await repairModel.create({
            student_No,
            device,
            description,
            date,
            status
        });

        res.status(201).json({ success: true, student_No: repair.student_No, device: repair.device, description: repair.description, date: repair.date, status: repair.status });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

const getAllRepairs = async (req, res) => {
    try {
        const repairs = await repairModel.findAll();

        res.status(200).json({ success: true, data: repairs });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

const getRepairById = async (req, res) => {
    try {
        const id = req.body.id;
        const repair = await repairModel.findOne({ where: { id: req.params.id } });

        res.status(200).json({ success: true, data: repair });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

const updateRepair = async (req, res) => {
    try {
        const repair = await repairModel.update(req.body, { where: { id: req.params.id } });

        res.status(200).json({ success: true, data: repair });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}