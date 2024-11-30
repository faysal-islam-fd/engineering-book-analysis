import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import bookRoutes from './routes/books.js';
import 'dotenv/config'

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);


const PORT = process.env.PORT || 3000;


app.listen(PORT, async() => {
  try{
    await mongoose.connect(process.env.MONGODB_URI);
  }
  catch(err){
    console.error('MongoDB connection error:', err);
  }
  console.log(`Server running on port ${PORT}`);
});