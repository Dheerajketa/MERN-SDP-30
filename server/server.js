const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const admin = require("../server/models/Admin")
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


app.get('/', (req, res) => {
    res.send("Backend");
});

app.post('/insert', async (req, res) => {
    try {
        const col = db.collection("banking");
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

// app.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body; // Change username to email if you're using email for login
//         const user = await col.findOne({ email }); // Change username to email if you're using email for login
//         if (!user) {
//             return res.status(401).send("Invalid username or password");
//         }
//         const passwordMatch = await bcrypt.compare(password, user.password);
//         if (!passwordMatch) {
//             return res.status(401).send("Invalid username or password");
//         }
//         res.send("Login successful");
//     } catch (error) {
//         console.error("Error during login:", error);
//         res.status(500).send("Error during login");
//     }
// });
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
       
         // Change username to email if you're using email for login
        const user = await col.find({ email }).toArray(); // Change username to email if you're using email for login
        var role = "User"
        console.log(Object.values(user)[0]);
        if (!user) {
            return res.status(401).send("Invalid username or password");
        }
        const passwordMatch = bcrypt.compareSync(password, Object.values(user)[0].password);
        if (!passwordMatch) {
            return res.status(401).send("Invalid username or password");
        }
        res.status(200).send(role)
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Error during login");
    }
});

//adminlogin
app.post('/adminlogin', async (req, res) => {
    try {
      const { username, password } = req.body;
      const Admin = await admin.findOne({ username });
  
      if (!Admin) {
        return res.status(401).send('Invalid username or password');
      }
  
      const passwordMatch = await bcrypt.compare(password, Admin.password);
      if (!passwordMatch) {
        return res.status(401).send('Invalid username or password');
      }
  
      res.send('Admin login successful');
    } catch (error) {
      console.error('Error during admin login:', error);
      res.status(500).send('Error during admin login');
    }
  });

// app.post('/login',async(req,res)=>{
//     try{
//         const s = await request.body;
//         console.log(s);

//         const id = Object.values(s)[0];
//     console.log(s);
//     const password = Object.values(s)[1];
//     var data = await col.find({ email: id });
//     var role = "";
//     if (data) {
//       role = "User";
//     }
//     if (data.length == 0) {
//       data = await col1.find({ email: id });
//       if (data) {
//         role = "Admin";
//       }
//     }
//     if (data) {
//       const p = bcrypt.compareSync(
//         password,
//         Object.values(data)[0]["password"]
//       );
//       if (p) {
//         console.log("Successful");
//         response.json({ role: role, data: data });
//       }
//     } else {
//       response.status(500).send("Invalid Credentials");
//     }

//     }
//     catch(e)
//     {
//         console.log(e.message);
//     }
// })

app.post('/transfer', async (req, res) => {
    try {
        const { senderMobile, recipientMobile, amount } = req.body;
        const sender = await col.findOne({ mobile: senderMobile });
        const recipient = await col.findOne({ mobile: recipientMobile });

        if (!sender || !recipient) {
            return res.status(404).send("Sender or recipient not found");
        }

        const transferAmount = parseFloat(amount); // Convert amount to a number

        if (isNaN(transferAmount) || transferAmount <= 0) {
            return res.status(400).send("Invalid amount");
        }

        const senderBalance = parseFloat(sender.balance);
        const recipientBalance = parseFloat(recipient.balance);

        if (isNaN(senderBalance) || isNaN(recipientBalance)) {
            return res.status(500).send("Invalid balance format");
        }

        if (senderBalance < transferAmount) {
            return res.status(400).send("Insufficient balance");
        }

        // Update sender's balance
        await col.updateOne(
            { mobile: senderMobile },
            { $set: { balance: (senderBalance - transferAmount).toString() } }
        );

        // Update recipient's balance by incrementing
        await col.updateOne(
            { mobile: recipientMobile },
            { $set: { balance: (recipientBalance + transferAmount).toString() } }
        );

        res.send("Transfer successful");
    } catch (error) {
        console.error("Error transferring money:", error);
        res.status(500).send("Error transferring money");
    }
});



app.get("/getuserbyemail",async(req,res)=>{
    try {
        const email = request.params.email;
        console.log(email);
        const userData = await col.findOne({ email });
        console.log(userData);
        return userData;
        // const input = await user.find({ email });
        // console.log(input)
        // return input;
      } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
      }
})


app.get("/viewloans",async(req,res)=>{
    try {
        const data = await db.collection("Loan").find().toArray();
        console.log(data);
        if (!data) return res.status(404).send("No Loan Found!");
        else {
          res.send(data);
        }
      } catch (error) {
        res.status(500).send(error.message);
      }
})
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
});
