import { Pests, PestsIndex} from '/imports/api/pests/pests.js';
import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './pest-library.html';

var currentPests = "";
var currentDiseases = "";

Template.pestsLib.onCreated(function () {
	Meteor.subscribe('pests.all');
	Meteor.subscribe('cms.all');
});

Template.pestsLib.onRendered(function() {
	Session.set("currentPage", "finalLib"); // set the current page to change banner
	// this.PaginatedStuff = new Meteor.Pagination(Pests, {
	// 	// route: "/library",
	// 	// router: "iron-router",
	// 	// routerTemplate: "paginatedStuff",
	// 	// routerLayout: "pestsLib",
	// 	templateName: 'paginatedStuff',
	// 	itemTemplate: 'stuffListItem',
	// 	perPage: 8,
	// 	sort: {
	// 		name: 1
	// 	}
	// });
});

var currentPest = "";

Template.pestsLib.helpers({

	pestsIndex(){
		return PestsIndex;
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

	setPageSessionsPest(type) {
		currentPest = type + " Pest";
		var pestCount = Pests.find({'type': 'Pest', 'plant_affected': type}).count();
		var pestsPerPage = parseInt(CMS.findOne({info:'finalLib'}).pestsPerPage);

			Session.set(currentPest, 1);
			pestCount = pestCount % pestsPerPage == 0? Math.floor(pestCount/pestsPerPage) : Math.floor(pestCount/pestsPerPage+1);
			Session.set(currentPest + " Count", pestCount);
			//console.log(Session.get(currentPest + " Count"));
	},

	setPageSessionsDisease(type) {
		currentDisease = type + " Disease";
		var diseaseCount = Pests.find({'type': 'Disease', 'plant_affected': type}).count();
		var diseasesPerPage = parseInt(CMS.findOne({info:'finalLib'}).pestsPerPage);
		//var pestsPerPage = 4;
			Session.set(currentDisease, 1);

			diseaseCount = diseaseCount%diseasesPerPage == 0? Math.floor(diseaseCount/diseasesPerPage) : Math.floor(diseaseCount/diseasesPerPage+1);
			Session.set(currentDisease + " Count", diseaseCount);
			// console.log(Session.get(currentDisease + " Count"));
	},

	getCurrentPestType(){
		return currentPest;
	},

	getCurrentDiseaseType(){
		return currentDisease;
	},

	getCurrentType(){
		return currentType;
	},

	displayPest(type){
		var pestsPerPage = parseInt( CMS.findOne({info:'finalLib'}).pestsPerPage );
		return Pests.find({'type': 'Pest', 'plant_affected': type}, {sort: {name: 1}, skip:(Session.get(currentPest)-1)*pestsPerPage, limit:pestsPerPage});
	},

	displayDisease(type){
		var diseasesPerPage = parseInt(CMS.findOne({info:'finalLib'}).pestsPerPage);
		//var pestsPerPage = 4;
		return Pests.find({'type': 'Disease', 'plant_affected': type}, {sort: {name: 1}, skip:(Session.get(currentDisease)-1)*diseasesPerPage, limit:diseasesPerPage});
	},

	setPestPagination(type){
		var count = Session.get(type + " Pest Count");
		var pages = [];
		for(var i = 1; i<=count; i++)
			pages.push({num: i});
		return pages;
	},

	setDiseasePagination(type){
		var count = Session.get(type + " Disease Count");
		var pages = [];
		for(var i = 1; i<=count; i++)
			pages.push({num: i});
		return pages;
	},

	setDiseasePagination(type){
		var count = Session.get(type + " Disease Count");
		var pages = [];
		for(var i = 1; i<=count; i++)
			pages.push({num: i});
		return pages;
	},

	isCurrentPestPage(page){
		return Session.equals(currentPest, page);
	},

	isCurrentDiseasePage(page){
		return Session.equals(currentDisease, page);
	},
});

Template.pestsLib.events({
	'click .page-number-pest'(event) {
		currentPest = $(event.target).attr("name");
		Session.set(currentPest, this.num); // stores the current page number of typeOfPest
		//console.log(currentPest + " page: " + Session.get(currentPest));
	},

	'click .page-number-disease'(event) {
		currentDisease = $(event.target).attr("name");
		Session.set(currentDisease, this.num); // stores the current page number of typeOfDisease
		//console.log(currentDisease + " page: " + Session.get(currentDisease));
	},

	'click .pest-lib'(event) {
		currentType = $(event.target).attr("name");
		Session.set(currentType, "Pest"); // stores the current page number of typeOfPest
		// console.log(currentPest + " page: " + Session.get(currentPest));
		//console.log("Pest");
	},

	'click .disease-lib'(event) {
		currentType = $(event.target).attr("name");
		Session.set(currentType, "Disease"); // stores the current page number of typeOfPest
		// console.log(currentPest + " page: " + Session.get(currentPest));
		//console.log("Disease");
	},
});

