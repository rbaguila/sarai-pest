import { Links } from '/imports/api/links/links.js';
import './top_nav.html';

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
});