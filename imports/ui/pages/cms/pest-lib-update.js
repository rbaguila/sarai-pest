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

	pestType(){
		var data = Pests.find().fetch();
		var distinctData = _.uniq(data, false, function(d) {return d.plant_affected});
		return _.pluck(distinctData, "plant_affected");
	},

	getCMS(){
		return CMS.findOne({info: "finalLib"});
	},

	isChecked(pestType) {
		return CMS.find({info: "finalLib", viewPestType: pestType}).count() > 0? true : false;
	},
});

Template.pestLibCMS.events({
	'click #saveBTN': function(event){
		event.preventDefault();
		
		// GET THE VALUES
		var searchlabel = $("#searchlabel").val();
		var pestNumbers = parseInt( $("#pestsperpage").val() );

		var pestType = [];
		$( "input[type=checkbox]:checked" ).map(function() {
		    pestType.push($( this ).val());
		});
		
		// UPDATES THE DATABASE
		Meteor.call('cms.updatePestLib', searchlabel, pestType, pestNumbers, (error) => {
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