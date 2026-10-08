const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:");
        console.log(error.message);
    });


// Student Schema
const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }

});


// Student Model
const Student = mongoose.model("Student", studentSchema);


// Test Route
app.get("/", (req, res) => {

    res.send("TVMS Backend is Running");

});


// Save Student
app.post("/students", async (req, res) => {

    try {

        const student = new Student({

            name: req.body.name,

            email: req.body.email

        });

        await student.save();

        res.status(201).json({

            message: "Student saved successfully"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Error saving student"

        });

    }

});


// Get Students
app.get("/students", async (req, res) => {

    try {

        const students = await Student.find();

        res.json(students);

    }

    catch (error) {

        res.status(500).json({

            message: "Error fetching students"

        });

    }

});


// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});