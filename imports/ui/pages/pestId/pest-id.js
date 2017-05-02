import { Plant_Problem, PestsIndex } from '/imports/api/plant_problem/plant_problem.js';
import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './pest-id.html';
import '../library/pest-library/pest-library.html'

var currentPests = "";
var currentType = "";
var cropAffected = "";
var classType = "";

Template.pestId.onCreated(function () {
  Meteor.subscribe('plant_problem.all');
  Meteor.subscribe('cms.all');
  this.templateDict = new ReactiveDict();
  this.templateDict.set('currentType', currentType);
  this.templateDict.set('cropAffected', cropAffected);
  this.templateDict.set('classType', classType);
  this.templateDict.set('showResult', false);
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
		return Plant_Problem.find({})
	},

	setPageSessionsNew(type) {
		var typePerPage = 4;
		Session.set(type, 1);
		Session.set(type + " Count", type);
	},

	setPageSessions(type) {
		currentPest = type;
		var pestCount = Plant_Problem.find({'type': type}).count();
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
		return Plant_Problem.find({'type': type}, {sort: {name: 1}, skip:(Session.get(currentPest)-1)*pestsPerPage, limit:pestsPerPage});
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
	},

	displayInitial(type){
		var limitPerPage = 4;
		/*currentType = Session.get("currentType");
		cropAffected = Session.get("cropAffected");
		classType = Session.get("classType");*/
		return Pests.find({'type': Template.instance().templateDict.get("currentType"), 'plant_affected': Template.instance().templateDict.get("cropAffected"), 'classification': Template.instance().templateDict.get("classType")}, {sort: {name: 1}});
	},

	showResult() {
		return Template.instance().templateDict.get("showResult");
	}
});

Template.pestId.events({
	'click .page-number'(event) {
		currentPest = $(event.target).attr("name");
		Session.set(currentPest, this.num); // stores the current page number of typeOfPest
		// console.log(currentPest + " page: " + Session.get(currentPest));
	},

	'change [name="radiopd"]'(event, template) {
		currentType = $(event.target).attr("id");
		template.templateDict.set("currentType", currentType);
		cropAffected = template.templateDict.get("cropAffected");
		if(currentType == "Pest"){
			template.templateDict.set("classType", "");
			classType = template.templateDict.get("classType");
		}
		else{	
			template.templateDict.set("classType", "Fungal");
			classType = template.templateDict.get("classType");
		}
		if(currentType == "Pest" && (cropAffected == "" || (classType == "Fungal" || classType == "Bacterial" || classType == "Viral"))){
			//Session.set("currentType", "Pest");
			template.templateDict.set("cropAffected", "Rice");
			console.log("pes");
		}
		else if(currentType == "Disease" && classType == "" && cropAffected == ""){
			//Session.set("currentType", "Disease");
			template.templateDict.set("cropAffected", "Rice");
			console.log("dis");
		}
		//setPageSessions(Session.get("currentType"));
		else{
			template.templateDict.set("cropAffected", cropAffected);
			template.templateDict.set("classType", classType);
		}
		template.templateDict.set("showResult", true);
		console.log(template.templateDict.get("currentType"));
		console.log(template.templateDict.get("cropAffected"));
		console.log(template.templateDict.get("classType"));
	},

	'change [name="cropAffected"]' (event, template) {
		cropAffected = "";
		var count = 0;
		currentType = template.templateDict.get("currentType");
		classType = template.templateDict.get("classType");

		event.preventDefault();
		$.each($('[name="cropAffected"]:checked'), function(index, item){
			let x = item.id;
			//template.templateDict.set("cropAffected", cropAffected)
			if(count === 0){
				cropAffected = x;
			}
			else{
				cropAffected = cropAffected + ', ' + x;
			}
			count++;
		});
		/*

	   var selected = template.findAll( "input[name=cropAffected]:checked");

	   var array = _.map(selected, function(item) {
	     return item.id;
	   });

	   console.log(array);*/
		/*if(cropAffected != x){
			x = x + ', ' + cropAffected;
		}
		else{
			x = cropAffected;
		}*/
		//Session.set("cropAffected", cropAffected);
		//console.log(Session.get("cropAffected"));
		template.templateDict.set("currentType", currentType);
		template.templateDict.set("cropAffected", cropAffected);
		template.templateDict.set("classType", classType);
		template.templateDict.set("showResult", true);
		
		console.log(template.templateDict.get("currentType"));
		console.log(template.templateDict.get("cropAffected"));
		console.log(template.templateDict.get("classType"));
	},

	'change [name="classType"]' (event, template) {
		classType = $(event.target).attr("id");
		currentType = template.templateDict.get("currentType");
		cropAffected = template.templateDict.get("cropAffected");
		//Session.set("classType", classType);
		//console.log(Session.get("classType"));
		template.templateDict.set("currentType", currentType);
		template.templateDict.set("cropAffected", cropAffected);
		if(currentType == "Pest"){
			template.templateDict.set("classType", "");
		}
		else{
			template.templateDict.set("classType", classType);
		}
		template.templateDict.set("showResult", true);
		
		console.log(template.templateDict.get("currentType"));
		console.log(template.templateDict.get("cropAffected"));
		console.log(template.templateDict.get("classType"));
	},

	/*'change [name="diseaseType"]' (event, template) {
		classType = $(event.target).attr("id");
		//Session.set("classType", classType);
		//console.log(Session.get("classType"));
		template.templateDict.set("classType", classType);
		template.templateDict.set("showResult", true);
		console.log(template.templateDict.get("currentType"));
		console.log(template.templateDict.get("cropAffected"));
		console.log(template.templateDict.get("classType"));
	},*/
});

