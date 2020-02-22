const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');



mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('MongoDB connection established successfully');

});

app.use(cors());
app.use(express.json());

app.use('/exercises', exercisesRouter);
app.use('/users',usersRouter);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
