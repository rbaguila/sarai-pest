// Methods related to logs

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Logs } from './logs.js';

Meteor.methods({

  'logs.addlogs'( newLog ){
    check( newLog.email, String);
    check( newLog.subject, String);
    check( newLog.message, String);
    check( newLog.user, String);
    check( newLog.date, String);
    check( newLog.month, String);
    check( newLog.year, String);
    check( newLog.problem, String);
    check( newLog.control, Number);

      Logs.insert(
        { 
          type: 'message',
          email: newLog.email ,
          subject: newLog.subject,
          message: newLog.message,
          user: newLog.user,
          date: newLog.date,
          month: newLog.month,
          year: newLog.year,
          problem: newLog.problem,
          control: newLog.control
        } 
    );
  },

});