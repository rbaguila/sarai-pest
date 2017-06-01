import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './pest-lib-update.html';
import '../components/cms-navbar.html';
import '../components/cms-sidenav.html';

Template.pestLibUpdate.onCreated(function () {
	Meteor.subscribe('plant_problem.all');
	Meteor.subscribe('cms.all');
});

Template.pestLibUpdate.onRendered(function() {
	$('#viewChangesBTN').hide();
});

Template.pestLibUpdate.helpers({

	getCMS(){
		return CMS.findOne({info: "finalLib"});
	},

	pestType(){
		var data = Plant_Problem.find().fetch();
		var distinctData = _.uniq(data, false, function(d) {return d.plant_affected});
		return _.pluck(distinctData, "plant_affected");
	},

	isChecked(pestType) {
		return CMS.find({info: "finalLib", viewPestType: pestType}).count() > 0? true : false;
	},

	isSelected(value, position){
		return value == position;
	},

	bannerImageFile(){
		return {
			finished: function(index, fileInfo, context) {
				Session.set('bannerImage', '/img/.uploads/' + fileInfo.name);
			}
		}
	},
});

Template.pestLibUpdate.events({
	'click #saveBTN': function(event){
		event.preventDefault();

		var pestType = [];
		$( "input[type=checkbox]:checked" ).map(function() {
		    pestType.push($( this ).val());
		});
		
		// GET THE VALUES
		var newCMS = {
			bannerImage: (Session.get('bannerImage') == undefined) ? CMS.findOne({info: "finalLib"}).bannerImage : Session.get('bannerImage'),
			bannerPosition: $("#bannerPosition option:selected").val(),
			bannerText : $("#bannerText").val(),
			bannerSubText : $("#bannerSubText").val(),
			searchlabel : $("#searchlabel").val(),
			pestNumbers : parseInt( $("#pestsperpage").val() ),
			diseaseNumbers : parseInt( $("#diseasesperpage").val() ),
			pestType : pestType
		}
		
		// UPDATES THE DATABASE
		Meteor.call('cms.updatePestLib', newCMS, (error) => {
	      if (error) {
	        alert(error.error);
	      } else {
	       	$('#cancelBTN').hide(); 
	       	$('#viewChangesBTN').show(); 
	      }
	    });
	},

	'click #cancelBTN': function(event){
		event.preventDefault();
	},

	'click #viewChangesBTN': function(event){
		event.preventDefault();
		FlowRouter.go("/library");
	}
});