import { Links } from '/imports/api/links/links.js';
import './top_nav.html';

<<<<<<< HEAD
// Template.top_nav.onCreated(function topnavOnCreated() {
// });
// Template.top_nav.helpers({
// });
// Template.top_nav.events({
// });

Template.top_nav.onCreated(function() {
  Meteor.subscribe('links.all');
});

Template.top_nav.helpers({
  links: function() {
    return Links.find({});
  }
=======
Template.top_nav.onCreated(function topnavOnCreated() {
    var instance = this;
    instance.autorun(function(){
         var allUsers = instance.subscribe('allUsers');
    });
});


Template.top_nav.helpers({
  	configureAccountType: function(){	
   		if(Meteor.users.find().fetch().length === 1){
    		
    	}else{
    		console.log(Meteor.users.roles);
   			if(Roles.userIsInRole(Meteor.userId(), ["Admin"])){
	     		Meteor.call('updateAccountRole', ["Admin", "Pests Admin", "Diseases Admin", "Id Admin", "Clinic Admin"]);
	     	}else if(Roles.userIsInRole(Meteor.userId(), ["Pests Admin"])){
	     		Meteor.call('updateAccountRole', ["Pests Admin"]);
	     	}else if(Roles.userIsInRole(Meteor.userId(), ["Diseases Admin"])){
	     		Meteor.call('updateAccountRole', ["Diseases Admin"]);
	     	}else if(Roles.userIsInRole(Meteor.userId(), ["Id Admin"])){
	     		Meteor.call('updateAccountRole', ["Id Admin"]);
	     	}else if(Roles.userIsInRole(Meteor.userId(), ["Clinic Admin"])){
	     		Meteor.call('updateAccountRole', ["Clinic Admin"]);
   			}else{
	    		Meteor.call('updateAccountRole', ["Registered"]);
   			}
    	}
  	},
});


Template.top_nav.events({
  
});

LoggedIn = function(){
	if(Meteor.userId()===null){
		return false;
	}
	else{
		return true;
	}
}

Template._loginButtonsLoggedInDropdownActions.onRendered(function(){
    $("#login-buttons-open-change-password");

>>>>>>> upstream/develop
});