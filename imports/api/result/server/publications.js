// All assistance-related publications

import { Meteor } from 'meteor/meteor';
import { Result } from '../result.js';

Meteor.publish('result.all', function () {
  return Result.find();
});