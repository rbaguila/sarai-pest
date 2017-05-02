import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './search.html';

var Entries = new ReactiveVar([]);

var filter = "corn";

function getEntries(searchText) {
  Meteor.call('getPests', searchText, filter, function(err, searchText, filter) {
    if(err) {
      throw err;
    } else {
      Entries.set(searchText);
    }
  });
}

Template.search.onCreated(function () {
  Meteor.subscribe('cms.all');
});

Template.search.onRendered(function () {
  getEntries('');
});

Template.search.events({
  'click #search-box': function(event){
    var searchText = $('#search-box').val();
    getEntries(searchText);
  },

  'keyup #search-box': _.throttle(function(event) {
    var searchText = $('#search-box').val();
    getEntries(searchText);
  }, 1000)
});

Template.search.helpers({
  entries: function() {
    // console.log(Entries.get());
    return Entries.get();
  },

  equals: function(v1, v2) {
    return (v1 === v2);
  },
});

// ADVANCED-SEARCH
Template.advanced_search.onCreated(function () {
  var filters = [];
  Session.set('filters', filters);
});

Template.advanced_search.helpers({
  getCMS(){
    return CMS.findOne({info:'finalLib'});
  },
});

Template.advanced_search.events({
  'click .filter': function(event) {
    var x = $('.filter').is(":checked").val();
    var filters = Session.get('filters');
    var found = false;

    if(filters.length>0){
      for(var i=0; i<filters.length; i++){
        if(filters[i]==x){
          found = true;
          break;
        }
      }
      if(!found){
        filters.push(x);
        Session.set('filters', filters);
      }
    } else {
      filters.push(x);
      Session.set('filters', filters);
    }
    console.log(Session.get('filters'));
  }
});