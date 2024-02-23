// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Component = require('./Model'); // Importing the Component model

const app = express();
const PORT = process.env.PORT || 5000;

// Connecting to MongoDB
mongoose.connect('mongodb+srv://Amazon:Amazon@cluster0.metou6t.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());
app.use(cors());

// API endpoints

// Endpoint to add a new component
app.post('/api/add', async (req, res) => {
  try {
    const { name, content } = req.body;
    await Component.create({ name, content });
    res.status(200).json({ message: 'Data added successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Endpoint to update an existing component
app.post('/api/update', async (req, res) => {
  try {
    const { myid, name, content } = req.body;
    await Component.findByIdAndUpdate(myid, { name, content });
    res.status(200).json({ message: 'Data updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Endpoint to get counts of added and updated components
app.get('/api/count', async (req, res) => {
  try {
    // Counting documents with addCount greater than 0
    const addCount = await Component.countDocuments({ addCount: { $gt: 0 } });
    // Counting documents with updateCount greater than 0
    const updateCount = await Component.countDocuments({ updateCount: { $gt: 0 } });

    res.status(200).json({
      addCount,
      updateCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
