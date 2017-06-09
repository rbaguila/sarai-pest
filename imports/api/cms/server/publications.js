// All cms-related publications

import { Meteor } from 'meteor/meteor';
import { CMS } from '../cms.js';

Meteor.publish('cms.all', function () {
  return CMS.find();
});

Meteor.publish("usersList", function(){
	var result = [];
	result = Meteor.users.find();
	return result;
});

Meteor.publish('allUsers', function(){
    return Meteor.users.find();
});

Meteor.publish('secrets', function (group) {
  if (Roles.userIsInRole(this.userId, ['view-secrets','Admin'], group)) {

    return Meteor.secrets.find({group: group});

  } else {

    // user not authorized. do not publish secrets
    this.stop();
    return;

  }
});