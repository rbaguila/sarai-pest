// All assistance-related publications

import { Meteor } from 'meteor/meteor';
import { Assistance } from '../assistance.js';

Meteor.publish('assistance.all', function () {
  return Assistance.find();
});