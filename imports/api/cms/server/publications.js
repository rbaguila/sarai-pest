// All cms-related publications

import { Meteor } from 'meteor/meteor';
import { CMS } from '../cms.js';

Meteor.publish('cms.all', function () {
  return CMS.find();
});