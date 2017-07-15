import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';

Meteor.methods({

})

Meteor.users.allow({
  update: function(userId, user) {
    return true;
   }
});