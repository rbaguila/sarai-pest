// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Forms } from '../forms.js';

Meteor.publish('forms.all', function () {
  return Forms.find();
});
