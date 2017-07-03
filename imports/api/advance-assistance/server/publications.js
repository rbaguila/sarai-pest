// All assistance-related publications

import { Meteor } from 'meteor/meteor';
import { advanceAssistance } from '../advance-assistance.js';

Meteor.publish('advance_assistance.all', function () {
  return advanceAssistance.find();
});