import { Meteor } from 'meteor/meteor';
//process.env.MAIL_URL = "smtp://" + username+":"+password+"@smtp.gmail.com:465";

Meteor.methods({
    sendEmail: function (email) {
        //if (this.userId == userId) {
            Email.send(email);
        //}
    }
});