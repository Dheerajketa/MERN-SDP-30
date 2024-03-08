const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
const client = new MongoClient('mongodb+srv://admin:admin@cluster0.beosynx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
client.connect();
const db = client.db("banking");
const col = db.collection("banking");
app.use(cors());

app.get('/home', (req, res) => {
    res.send("Hello World");
});

app.post('/register', async (req, res) => {
    try {
        await col.insertOne(req.body);
        res.status(201).send("User registered successfully");
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Internal server error");
    }
});

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
