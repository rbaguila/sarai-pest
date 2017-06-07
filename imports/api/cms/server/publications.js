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