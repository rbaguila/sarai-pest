// All assistance-related publications

import { Meteor } from 'meteor/meteor';
import { Logs } from '../logs.js';

Meteor.publish('logs.all', function () {
  return Logs.find();
});