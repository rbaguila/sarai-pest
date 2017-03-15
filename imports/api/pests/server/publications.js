// All pests-related publications

import { Meteor } from 'meteor/meteor';
import { Pests } from '../pests.js';

Meteor.publish('pests.all', function () {
  return Pests.find();
});