// All cms-related publications

import { Meteor } from 'meteor/meteor';
import { CMS } from '../cms.js';
import { Experts } from '../cms.js';

Meteor.publish('cms.all', function () {
  return CMS.find();
});

Meteor.publish('experts.all', function () {
  return Experts.find();
});