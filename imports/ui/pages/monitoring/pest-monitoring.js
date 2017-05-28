import { Meteor } from 'meteor/meteor';
import './pest-monitoring.html';

Template.pestMonitoring.onRendered(function() {
	Session.set("currentPage", "finalMonitor"); // set the current page to change banner
});