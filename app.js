const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/task');

const app = express();
const port = 3000;




// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', taskRoutes);
app.get('/',(req, res) =>{
    res.send("hello world   bahsbhsabhd")
})

// Define your routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
