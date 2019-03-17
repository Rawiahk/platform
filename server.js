const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const profile = require('./routes/profile');
var FormData = require('form-data');
const app = express();


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Body parser middleware
// DB Config
const db = require('./config/keys').URI;
mongoose.set('useCreateIndex', true);

// Connect to MongoDB
mongoose
  .connect(db,{ useNewUrlParser: true, useFindAndModify : false })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
 

// Use Routes
app.use('/routes/profile', profile);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));