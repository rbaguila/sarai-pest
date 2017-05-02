import { Meteor } from 'meteor/meteor';
import './sidenav.html';

Template.menuItems.onRendered(function() {
	sideMenu();
});