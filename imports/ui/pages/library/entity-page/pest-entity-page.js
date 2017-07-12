import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { Meteor } from 'meteor/meteor';
import './pest-entity-page.html';

var specialElementHandlers = {
  '#bypassme': function(element, renderer)
  {
    return true;
  }
};

Template.entityPage.onCreated(function () {
  Meteor.subscribe('plant_problem.all');
});

Template.entity.onRendered(function () {
	 $('[data-toggle="tooltip"]').tooltip();
	 $('.swipebox').swipebox(); 
});

Template.entity.helpers({
	pest(){
		return Plant_Problem.findOne({_id: FlowRouter.current().params._id});
	},
});

Template.entity.events({

	'click .back': function(event){
		FlowRouter.go("/pests");
	},
	'click .download1': function(e, tmpl) {
        e.preventDefault();
     
        Meteor.call('pest/generate_pdf', FlowRouter.current().params._id,function(err, res) {
          if (err) {
            console.error(err);
          } else if (res) {
            window.location.href = 'data:application/octet-stream;base64,' + res;
          }
        })
    },
});

Template.entity.currentPath =  function () { 
    return Router && Router.current() && Router.current().path;
};
