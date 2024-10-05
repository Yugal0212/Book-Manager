const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
require('dotenv').config(); 

const app = express();

connectDB(process.env.MONGO_URI);

app.use(cors());
app.use(express.json());

app.use('/app', authRoutes);
app.use('/app', bookRoutes);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
