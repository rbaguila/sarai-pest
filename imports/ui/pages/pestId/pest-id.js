import { Pests, PestsIndex } from '/imports/api/pests/pests.js';
import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './pest-id.html';
import '../library/pest-library.html'

var currentPests = "";

Template.pestId.onCreated(function () {
  Meteor.subscribe('pests.all');
  Meteor.subscribe('cms.all');
});

Template.pestId.helpers({

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
	},

	getType(){
		return Pests.find({})
	},

	setPageSessionsNew(type) {
		var typePerPage = 4;
		Session.set(type, 1);
		Session.set(type + " Count", type);
	},

	setPageSessions(type) {
		currentPest = type;
		var pestCount = Pests.find({'type': type}).count();
		//var pestsPerPage = parseInt(CMS.findOne({info:'finalLib'}).pestsPerPage);
		var pestsPerPage = 4;
		Session.set(currentPest, 1);

		pestCount = pestCount%pestsPerPage == 0? Math.floor(pestCount/pestsPerPage) : Math.floor(pestCount/pestsPerPage+1);
		Session.set(currentPest + " Count", pestCount);
		// console.log(Session.get(currentPest + " Count"));
	},

	getCurrentPestType(){
		return currentPest;
	},

	displayPest(type){
		//var pestsPerPage = parseInt(CMS.findOne({info:'finalLib'}).pestsPerPage);
		var pestsPerPage = 4;
		return Pests.find({'type': type}, {sort: {name: 1}, skip:(Session.get(currentPest)-1)*pestsPerPage, limit:pestsPerPage});
	},

	setPagination(type){
		var count = Session.get(type + " Count");
		var pages = [];
		for(var i = 1; i<=count; i++)
			pages.push({num: i});
		return pages;
	},

	isCurrentPage(page){
		return Session.equals(currentPest, page);
	}
});

Template.pestId.events({
	'click .page-number'(event) {
		currentPest = $(event.target).attr("name");
		Session.set(currentPest, this.num); // stores the current page number of typeOfPest
		// console.log(currentPest + " page: " + Session.get(currentPest));
	},
});

