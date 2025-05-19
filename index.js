const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors=require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const schoolRoutes = require('./routes/schoolRoutes');

app.use(bodyParser.json());
app.use(cors());
app.use('/api', schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
