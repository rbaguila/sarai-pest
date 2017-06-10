// Import server startup through a single index entry point

import './fixtures.js';
import './register-api.js';
import './startup.js';
//import './smtp.js';
import { Meteor } from 'meteor/meteor';
process.env.MAIL_URL = "smtp://mendozama.angelica:201320378@smtp.gmail.com:465";

Meteor.methods({
    sendEmail: function (email) {
        //if (this.userId == userId) {
            Email.send(email);
        //}
    }
});