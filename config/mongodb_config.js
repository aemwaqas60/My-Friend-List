const chalk = require('chalk');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


connected = chalk.bold.cyan;
error = chalk.bold.yellow;
disconnected = chalk.bold.red;
termination = chalk.bold.magenta;

let DBURL = process.env.DBURL || 'mongodb://127.0.0.1:27017/friend-list';
mongoose.connect(DBURL);

mongoose.connection.on('connected', () => {
    console.log(connected('Mongoose defual connnection is open to', this.DBURL));
})
mongoose.connection.on('disconnected', () => {
    console.log(connected('Mongoose default connnection is open to', this.DBURL));
})
mongoose.connection.on('error', (err) => {
    console.log(error('Mongoose default connection has occured:', +err + "error"));
})

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log(termination("Mongoose default connection is disconnected due to application termination"));
        process.exit(0)
    });
});