import { Meteor } from 'meteor/meteor';
Meteor.methods({
    sendEmail: function (username, password,email) {
        //if (this.userId == userId) {
        process.env.MAIL_URL = 'smtp://' + encodeURIComponent(username) + ':' + encodeURIComponent(password) + '@smtp.gmail.com:465';
        Email.send(email);
        //}
    }
});