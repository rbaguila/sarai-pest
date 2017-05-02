// All plant_problem related publications

import { Meteor } from 'meteor/meteor';
import { Plant_Problem } from '../plant_problem.js';

Meteor.publish('plant_problem.all', function () {
  return Plant_Problem.find();
});

// for PAGINATION
new Meteor.Pagination(Plant_Problem);