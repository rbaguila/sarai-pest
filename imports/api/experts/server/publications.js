// All experts-related publications

import { Meteor } from 'meteor/meteor';
import { Experts } from '../experts.js';

Meteor.publish('experts.all', function () {
  return Experts.find();
});