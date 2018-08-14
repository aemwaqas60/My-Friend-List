var events = require('events');
var eventEmitter = new events.EventEmitter();
var nodemailer = require('nodemailer');

var sendEmail = function sendEmail(email) {

    console.log('Sending email to user');

    // nodemailer configrations

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'afrahtayyab27@gmail.com',
            pass: 'qeaqilmbodtecwcg'
        }
    });

    // nodemailer configurations

    var mailOptions = {
        from: 'afrahtayyab27@gmail.com',
        to: email,
        subject: 'Welcome Message',
        text: `Welcome to My Friend List App`
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            next(err);

        } else {
            return;
        }
    });
}


eventEmitter.on('sendEmail', sendEmail);

// eventEmitter.emit('sendEmail', email);

module.exports = eventEmitter;