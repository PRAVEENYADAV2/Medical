// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
// Create Express app
const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:8000'];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
// Connect to MongoDB
mongoose.connect('mongodb+srv://hp15spraveen:h1SZ02sneNSDV0Ej@cluster0.wsxihy3.mongodb.net/');
const db = mongoose.connection;

// Check MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define Patient schema
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'], // Assuming gender is one of these values
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    test: {
        type: String,
        required: true
    },
    medical: {
        type: String,
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    }
})

// Create Patient model
const Patient = mongoose.model('Patient', patientSchema);

// API endpoint to add a new patient
app.post('/patients', async (req, res) => {
    try {
        const { name, age, gender, contact, test, medical, diagnosis } = req.body;

        // Check if name is provided
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const newPatient = new Patient({ name, age, gender, contact, test, medical, diagnosis });
        await newPatient.save();
        res.status(201).json({ message: 'Patient added successfully' });
    } catch (error) {
        console.error('Error adding patient:', error.message);
        res.status(500).json({ error: 'Failed to add patient' });
    }
});

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Home page."
    })
})

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});