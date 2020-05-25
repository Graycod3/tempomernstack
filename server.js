const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
//const cors = require('cors');
const path = require('path');

const app = express();
//step1 heroku
const PORT = process.env.PORT || 8080; // heroku use
//cors access data from differenmt servers
const routes = require('./routes/api')

//const MONGODB_URI = 'mongodb+srv://ghotijs:ghotijs@tempocluster-pmwdg.mongodb.net/test?retryWrites=true&w=majority';
//'mongodb+srv://ghotijs:ghotijs@tempocluster-pmwdg.mongodb.net/test?retryWrites=true&w=majority'

//step 2 heroku
//process.env.MONGODB_URI ||
mongoose.connect('process.env.MONGODB_URI || mongodb://localhost/mern_tempo',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=> {
    console.log('Mongoose is connected!!!!');
});

// making sure data is taken in the req.body
//Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//step 3 heroku
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('profile/build'));
}

//app.use(cors());

// HTTP request Logger
app.use(morgan('tiny'));
app.use('/api', routes )


app.listen(PORT, console.log(`Server is starting at ${PORT} `));
