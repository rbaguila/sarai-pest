import { Links } from '/imports/api/links/links.js';
import './top_nav.html';

Template.top_nav.onCreated(function topnavOnCreated() {
    Meteor.subscribe('links.all');
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
	     		Meteor.call('updateAccountRole', Meteor.userId(),["Admin", "Pests Admin", "Diseases Admin", "Id Admin", "Clinic Admin", "Pest Expert"]);
	     	}else if(Roles.userIsInRole(Meteor.userId(), ["Pests Admin"])){
	     		Meteor.call('updateAccountRole', Meteor.userId(),["Pests Admin"]);
	     	}else if(Roles.userIsInRole(Meteor.userId(), ["Diseases Admin"])){
	     		Meteor.call('updateAccountRole', Meteor.userId(),["Diseases Admin"]);
	     	}else if(Roles.userIsInRole(Meteor.userId(), ["Id Admin"])){
	     		Meteor.call('updateAccountRole', Meteor.userId(),["Id Admin"]);
	     	}else if(Roles.userIsInRole(Meteor.userId(), ["Clinic Admin"])){
	     		Meteor.call('updateAccountRole', Meteor.userId(),["Clinic Admin", "Pest Expert"]);
        }else if(Roles.userIsInRole(Meteor.userId(), ["Pest Expert"])){
          Meteor.call('updateAccountRole', Meteor.userId(),["Pest Expert"]);          
   			}else{
	    		Meteor.call('updateAccountRole', Meteor.userId(),["Registered"]);
   			}
    	}
  	},
    links: function() {
      return Links.find({});
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

});