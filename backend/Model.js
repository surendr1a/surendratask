// backend/models.js
const mongoose = require('mongoose');

// Define the schema for the component model
const componentSchema = new mongoose.Schema({
  myid: mongoose.Schema.Types.ObjectId, // Unique identifier for the component
  name: String,
  content: String,
  addCount: { type: Number, default: 0 }, // Counter for add operations
  updateCount: { type: Number, default: 0 }, // Counter for update operations
});

// Create the Component model based on the schema
const Component = mongoose.model('Component', componentSchema);

// Export the Component model
module.exports = Component;
