// Methods related to Assistance

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Assistance } from './assistance.js';

Meteor.methods({
  'assistance.removeAssistance'(id){
    check(id, String);

    Assistance.remove( { _id: id } );
  }

});