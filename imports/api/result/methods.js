// Methods related to logs

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Result } from './result.js';

Meteor.methods({

  'result.addResults'( newResult ){
    check( newResult.email, String);
    check( newResult.subject, String);
    check( newResult.message, String);
    check( newResult.user, String);
    check( newResult.date, String);
    check( newResult.month, String);
    check( newResult.year, String);
    check( newResult.problem, String);
    check( newResult.control, Number);
    check( newResult.username, String);
    check( newResult.dateReplied, String);
    check( newResult.adminUsername, String);
    check( newResult.adminEmail, String);
    check( newResult.reply, String);
      Result.insert(
        { 
          type: 'message',
          email: newResult.email ,
          subject: newResult.subject,
          message: newResult.message,
          user: newResult.user,
          date: newResult.date,
          month: newResult.month,
          year: newResult.year,
          problem: newResult.problem,
          control: newResult.control,
          username: newResult.username,
          dateReplied: newResult.dateReplied,
          adminUsername: newResult.adminUsername,
          adminEmail: newResult.adminEmail,
          reply: newResult.reply
        } 
    );
  },

  'result.removeResult'(id){
    check(id, String);

    Result.remove( { _id: id } );
  },

});