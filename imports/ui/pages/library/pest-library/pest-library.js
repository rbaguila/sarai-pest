import { Plant_Problem, PestsIndex } from '/imports/api/plant_problem/plant_problem.js';
import { CMS } from '/imports/api/cms/cms.js';
import { SearchableCollection } from '/imports/api/search/search.js';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import './pest-library.html';

Template.pestsLib.onCreated(function () {
	Meteor.subscribe('plant_problem.all');
	Meteor.subscribe('cms.all');
});

Template.pestsLib.onRendered(function() {
	Session.set("currentPage", "finalLib"); // set the current page to change banner
});

var currentPest = "";

Template.pestsLib.helpers({

	pestsIndex(){
		return PestsIndex
	},

	searchAttributes() {
	    return {
	      placeholder: 'Search',
	      class: 'form-control'
	    };
	},

  	equals: function(v1, v2) {
		return (v1 === v2);
	},

	getCMS(){
		return CMS.findOne({info:'finalLib'});
	}
});

// SEARCH
/*
	// do a search every time the querystring changes
	Tracker.autorun(function(){
		console.log("tracking...");
		var q = Session.get('querystring'); // reactive
		if (q) {
			Meteor.subscribe('search', q);
		}
	});

	// populate the `searchResults` template with result
	Template.searchResults.results = function () {
		SearchableCollection.find();
		console.log(SearchableCollection.find());
	};

	// update the querystring when the search input changes
	Template.searchResults.events({
	  'keyup #search-input': function (ev, template) {
	  	//console.log(template.find('#search-input').value);
	    var value = template.find('#search-input').value;
	    Session.set('querystring', value);
	  }
	});
*/

// PAGINATION
Template.pestPaginate.onCreated(function () {
	var pestsPerPage = parseInt( CMS.findOne({info:'finalLib'}).pestsPerPage );
    this.pagination = new Meteor.Pagination(Plant_Problem, {
    	perPage: pestsPerPage,
        sort: {
            name: 1
        }
    });
});

Template.pestPaginate.helpers({
    isReady: function () {
        return Template.instance().pagination.ready();
    },
    templatePagination: function () {
        return Template.instance().pagination;
    },
    documents: function (type) {
    	Template.instance().pagination.filters({'type': 'Pest', 'plant_affected': type});
        return Template.instance().pagination.getPage();
    },
    // optional helper used to return a callback that should be executed before changing the page
    clickEvent: function() {
        return function(e, templateInstance, clickedPage) {
            e.preventDefault();
        };
    }
});

