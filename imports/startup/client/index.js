// Import client startup through a single index entry point

import './routes.js';
import { Accounts } from 'meteor/accounts-base';
 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Meteor.startup(function() {
  Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
});

