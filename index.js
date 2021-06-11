const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const conf = require('./conf');
const mongoose = require('mongoose');

mongoose.connect(conf.url);
mongoose.connection.on('connected', ()=> {

    console.log("connected");

});
//app.use('/users', require('./route/users'));

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});