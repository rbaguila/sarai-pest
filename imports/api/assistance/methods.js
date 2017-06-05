// Methods related to Assistance

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Assistance } from './assistance.js';

Meteor.methods({

  'assistance.addAssistance'( newAssistance ){
    check( newAssistance.email, String);
    check( newAssistance.subject, String);
    check( newAssistance.message, String);
    check( newAssistance.user, String);
    check( newAssistance.date, String);
    check( newAssistance.month, String);
    check( newAssistance.year, String);
    check( newAssistance.problem, String);
    check( newAssistance.control, Number);

      Assistance.insert(
        { 
          type: 'message',
          email: newAssistance.email ,
          subject: newAssistance.subject,
          message: newAssistance.message,
          user: newAssistance.user,
          date: newAssistance.date,
          month: newAssistance.month,
          year: newAssistance.year,
          problem: newAssistance.problem,
          control: newAssistance.control
        } 
    );
  },

  'assistance.removeAssistance'(id){
    check(id, String);

    Assistance.remove( { _id: id } );
  },

});