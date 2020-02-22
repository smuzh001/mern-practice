import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});
app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});