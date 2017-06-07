import { Meteor } from 'meteor/meteor';
import { CMS } from '/imports/api/cms/cms.js';
import './users-update.html';
import '../components/cms-navbar.html';
import '../components/cms-sidenav.html';

Template.usersUpdate.onCreated(function () {
	Meteor.subscribe('usersList');
});

Template.usersUpdate.helpers({
	getUsers: function() {
		return Meteor.users.find();
	}
});
