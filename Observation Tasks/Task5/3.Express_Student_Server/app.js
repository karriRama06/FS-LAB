const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

const students = [
    {
        id: 1,
        name: "Rama",
        branch: "CSM"
    },
    {
        id: 2,
        name: "Mouni",
        branch: "CSE"
    },
    {
        id: 3,
        name: "Divya",
        branch: "ECE"
    },
    {
        id: 4,
        name: "Sivani",
        branch: "IT"
    },
    {
        id: 5,
        name: "Siri",
        branch: "CSD"
    }
];

app.get("/", function(req, res) {
    res.send("Welcome to the Student Server");
});

app.get("/students", function(req, res) {
    res.json(students);
});

app.get("/about", function(req, res) {
    res.send(
        "This is an Express.js Student Management Server created for PBL."
    );
});

app.listen(PORT, function() {
    console.log(`Server running at http://localhost:${PORT}`);
});