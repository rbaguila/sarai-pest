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
    check( newLog.username, String);
    check( newLog.dateReplied, String);
    check( newLog.adminUsername, String);
    check( newLog.adminEmail, String);
    check( newLog.reply, String);
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
          control: newLog.control,
          username: newLog.username,
          dateReplied: newLog.dateReplied,
          adminUsername: newLog.adminUsername,
          adminEmail: newLog.adminEmail,
          reply: newLog.reply
        } 
    );
  },
  'logs.updateLog'( newLog ) {
    check( newLog.adminUsername, String);
    check( newLog.adminEmail, String);
    check( newLog.reply, String);

    Logs.update( {_id: newLog.id},
      { $set:
        {
          dateReplied: newLog.dateReplied,
          adminUsername: newLog.adminUsername,
          adminEmail: newLog.adminEmail,
          reply: newLog.reply
        }
      }
    );
  },

});