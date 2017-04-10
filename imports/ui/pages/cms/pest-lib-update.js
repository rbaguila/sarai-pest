import { Pests } from '/imports/api/pests/pests.js';
import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './pest-lib-update.html';

Template.pestLibUpdate.onCreated(function () {
	Meteor.subscribe('pests.all');
	Meteor.subscribe('cms.all');
});

Template.pestLibUpdate.onRendered(function() {
	$('#viewChangesBTN').hide();
});

Template.pestLibCMS.helpers({

	getCMS(){
		return CMS.findOne({info: "finalLib"});
	},

	pestType(){
		var data = Pests.find().fetch();
		var distinctData = _.uniq(data, false, function(d) {return d.plant_affected});
		return _.pluck(distinctData, "plant_affected");
	},

	isChecked(pestType) {
		return CMS.find({info: "finalLib", viewPestType: pestType}).count() > 0? true : false;
	},

	isSelected(position){
		var banner = CMS.findOne({info:'finalLib'});
		return position == banner.bannerContentPosition; // may error daw sa bannerContentPosition!!!!!???
	}
});

Template.pestLibCMS.events({
	'click #saveBTN': function(event){
		event.preventDefault();
		
		// GET THE VALUES
		var bannerText = $("#bannerText").val();
		var bannerSubText = $("#bannerSubText").val();
		var searchlabel = $("#searchlabel").val();
		var pestNumbers = parseInt( $("#pestsperpage").val() );

		var pestType = [];
		$( "input[type=checkbox]:checked" ).map(function() {
		    pestType.push($( this ).val());
		});
		
		// UPDATES THE DATABASE
		Meteor.call('cms.updatePestLib', bannerText, bannerSubText, searchlabel, pestType, pestNumbers, (error) => {
	      if (error) {
	        alert(error.error);
	      } else {
	        console.log("updated!!!!");
	      }
	    });
		
		$('#viewChangesBTN').show();
	},

	'click #cancelBTN': function(event){
		event.preventDefault();
	},

	'click #viewChangesBTN': function(event){
		event.preventDefault();
		FlowRouter.go("/library");
	}
});