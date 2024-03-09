const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const app = express();
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
        req.body.password = await bcrypt.hash(req.body.password, 5);
        await col.insertOne(req.body);
        res.send("Data Received");
    } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).send("Error inserting data");
    }
});
app.post('/balance', async (req, res) => {
    try {
        const { mobile } = req.body;
        const user = await col.findOne({ mobile });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.json({ balance: user.balance });
    } catch (error) {
        console.error("Error checking balance:", error);
        res.status(500).send("Error checking balance");
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body; // Change username to email if you're using email for login
        const user = await col.findOne({ email }); // Change username to email if you're using email for login
        if (!user) {
            return res.status(401).send("Invalid username or password");
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send("Invalid username or password");
        }
        res.send("Login successful");
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Error during login");
    }
});


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
