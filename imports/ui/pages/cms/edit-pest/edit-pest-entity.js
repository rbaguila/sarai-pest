import { Pests } from '/imports/api/pests/pests.js';
import { Meteor } from 'meteor/meteor';
import './edit-pest-entity.html';

Template.entityPage.onCreated(function () {
  Meteor.subscribe('pests.all');
});

Template.pestEntity.onRendered(function () {
	 $('[data-toggle="tooltip"]').tooltip(); 
});

Template.pestEntity.helpers({
	pest(){
		return Pests.findOne({_id: FlowRouter.current().params._id});
	},
});

Template.pestEntity.events({
	'click #saveBTN': function(event){
		event.preventDefault();

		var id = FlowRouter.current().params._id;

		if($("#pestImage").val() == undefined){
			var imageURL = Pests.findOne({ _id: id }).image;
		} else{
			var imageURL = $("#pestImage").val();	
		} 

		// GET THE VALUES
		var editPest = {
			id : id,
			pestName : $("#pestName").val(),
			engName : $("#engName").val(),
			sciName : $("#sciName").val(),
			image : imageURL,
			// for ENGLISH
			treatment : $("#treatment").val(),
			classification : $("#classification").val(),
			order : $("#order").val(),
			plantAffected : $("#plantAffected").val(),
			description : $("#description").val(),
			symptoms : $("#symptoms").val(),
			stageThreatening : $("#stageThreatening").val(),
			partDestroyed : $("#partDestroyed").val(),
			effect : $("#effect").val(),
			stageAffected : $("#stageAffected").val(),
			// for FILIPINO
			filName : $("#filName").val(),
			filTreatment : $("#filTreatment").val(),
			filClassification : $("#filClassification").val(),
			filPlantAffected : $("#filPlantAffected").val(),
			filDescription : $("#filDescription").val(),
			filSymptoms : $("#filSymptoms").val(),
			filStageThreatening : $("#filStageThreatening").val(),
			filPartDestroyed : $("#filPartDestroyed").val(),
			filEffect : $("#filEffect").val(),
			filStageAffected : $("#filStageAffected").val(),
		}

		// UPDATES THE DATABASE
		Meteor.call('pests.editPest', editPest, (error) => {
	      if (error) {
	        alert(error.error);
	      } else {
	        $('.editSuccess').modal('show');
	      }
	    });
	},
});

Template.pestEntity.events({
	'click .back-button': function(event) {
		FlowRouter.go('/edit-pest');
	},	
});