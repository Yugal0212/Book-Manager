const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/app', authRoutes);
app.use('/app', bookRoutes);

app.listen(7000, () => {
  console.log('Server is running on port 7000');
});
