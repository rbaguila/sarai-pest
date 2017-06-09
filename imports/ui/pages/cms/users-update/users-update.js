import { Meteor } from 'meteor/meteor';
import { CMS } from '/imports/api/cms/cms.js';
import './users-update.html';
import '../components/clinic-cms-navbar.html';
import '../components/cms-sidenav.html';

Template.usersUpdate.onCreated(function () {
	Meteor.subscribe('usersList');
});

Template.usersUpdate.helpers({
	getUsers: function() {
		return Meteor.users.find();
	},
	// adminSelected: function () {
	// 	console.log(Meteor.users.roles.find());
 //      return (Meteor.users.roles.find() === 'Admin') ? 'selected' : '';
 //    },
 //    registeredSelected: function () {
 //      return (someOtherCondition) ? 'selected' : '';
 //    }
});

