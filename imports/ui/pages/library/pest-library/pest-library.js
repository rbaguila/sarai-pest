import { Plant_Problem, PestsIndex, DiseasesIndex } from '/imports/api/plant_problem/plant_problem.js';
import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './pest-library.html';

Template.pestsLib.onCreated(function () {
	Meteor.subscribe('plant_problem.all');
	Meteor.subscribe('cms.all');
});

Template.pestsLib.onRendered(function() {
	Session.set("currentPage", "finalLib"); // set the current page to change banner
});

Template.pestsLib.helpers({

	pestsIndex(){
		return PestsIndex
	},

    diseasesIndex(){
        return DiseasesIndex
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
	},
});

Template.advanced_search.helpers({
	getCMS(){
		return CMS.findOne({info:'finalLib'});
	},
});

// PEST PAGINATION
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
        return function(event, templateInstance, clickedPage) {
            event.preventDefault();
        };
    }
});

// DISEASE PAGINATION
Template.diseasePaginate.onCreated(function () {
    var diseasesPerPage = parseInt( CMS.findOne({info:'finalLib'}).diseasesPerPage );
    this.pagination = new Meteor.Pagination(Plant_Problem, {
        perPage: diseasesPerPage,
        sort: {
            name: 1
        }
    });
});

Template.diseasePaginate.helpers({
    isReady: function () {
        return Template.instance().pagination.ready();
    },
    templatePagination: function () {
        return Template.instance().pagination;
    },
    documents: function (type) {
        Template.instance().pagination.filters({'type': 'Disease', 'plant_affected': type});
        return Template.instance().pagination.getPage();
    },
    // optional helper used to return a callback that should be executed before changing the page
    clickEvent: function() {
        return function(event, templateInstance, clickedPage) {
            event.preventDefault();
        };
    }
});

