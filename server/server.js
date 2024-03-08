const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const app = express(); // Change to `express()` instead of `new express()`
app.use(express.json());
app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.beosynx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectToMongoDB();

const db = client.db("banking");
const col = db.collection("banking");

app.get('/home', (req, res) => {
    res.send("Hello World");
});

app.post('/insert', async (req, res) => {
    try {
        // Hash the password before inserting into the database
        req.body.password = await bcrypt.hash(req.body.password, 5);
        await col.insertOne(req.body); // Await the insertion operation
        res.send("Data Received");
    } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).send("Error inserting data");
    }
});

const PORT = process.env.PORT || 8081; // Allow the port to be set by environment variable
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});