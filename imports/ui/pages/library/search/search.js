import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './search.html';

var Entries = new ReactiveVar([]);

function getEntries(searchText) {
  var filter = Session.get('filters').length<=0? "":Session.get('filters');

  Meteor.call('getPests', searchText, filter, function(err, searchText, filter) {
    if(err) {
      throw err;
    } else {
      Entries.set(searchText);
    }
  });
}

Template.search.onCreated(function () {
  Meteor.subscribe('plant_problem.all');
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
  entries() {
    var entriesResults = Entries.get();
    var pests = Plant_Problem.find({type:'Pest'}).fetch();
    var results = [];

    for(var i=0; i<entriesResults.length; i++){
      for(var j=0; j<pests.length; j++){
        if(entriesResults[i].name == pests[j].name){
          results.push(pests[j]);
          break;
        }
      }
    }
    return results;
  },

  equals(v1, v2) {
    return (v1 === v2);
  },
});

// ADVANCED-SEARCH
Template.advanced_search.onCreated(function () {
  var filters = "";
  Session.set('filters', filters);
});

Template.advanced_search.helpers({
  getCMS(){
    return CMS.findOne({info:'finalLib'});
  },
});

// FOR FILTERING
Template.advanced_search.events({
  'change [name="checkbox"]' : function (event, template) {
    event.preventDefault();
    var filters = "";
    var count = 0;
    $.each($('[name="checkbox"]:not(:checked)'), function(index, item){
      let x = item.value;
      filters = filters + " " + x;
      count++;
    });

    var pestType = CMS.findOne({info:'finalLib'}).viewPestType; 
    if( !(count == pestType.length)){
      Session.set('filters', filters);  
    } else {
      Session.set('filters', "");  
    }
  },

});