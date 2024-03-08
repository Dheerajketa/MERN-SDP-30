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

app.post('/insert', async (req, res) => {
    //every request will have header and body section
    //req = {header: ...., body: actual_data}
    req.body.password = await bcrypt.hash(req.body.password, 5)
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Data Received")
})

app.listen(8081);
console.log("Server Running");