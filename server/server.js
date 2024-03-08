const { MongoClient } = require('mongodb');
const MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.beosynx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DB_NAME = 'banking';

async function addExampleData() {
  try {
    // Connect to MongoDB
    const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(DB_NAME);
    const usersCollection = db.collection('banking');

    // Example data
    const exampleUsers = [
      {
        email: 'example1@example.com',
        mobile: '1234567890',
        accountNumber: '1234567890',
        password: 'password1'
      },
      {
        email: 'example2@example.com',
        mobile: '9876543210',
        accountNumber: '0987654321',
        password: 'password2'
      }
    ];

    // Insert example data into the users collection
    await usersCollection.insertMany(exampleUsers);

    console.log('Example data added successfully');

    // Close the connection
    client.close();
  } catch (err) {
    console.error('Error adding example data:', err);
  }
}

// Call the function to add example data
addExampleData();
