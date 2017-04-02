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
		
		// GET THE VALUES
		var pestName = $("#pestName").val();
		var engName = $("#engName").val();
		var sciName = $("#sciName").val();

		if($("#pestImage").val() == undefined){
			var image = Pests.findOne({ _id: id }).image;
		} else{
			var image = $("#pestImage").val();	
		} 

		// for ENGLISH
		var treatment = $("#treatment").val();
		var classification = $("#classification").val();
		var order = $("#order").val();
		var plantAffected = $("#plantAffected").val();
		var description = $("#description").val();
		var symptoms = $("#symptoms").val();
		var stageThreatening = $("#stageThreatening").val();
		var partDestroyed = $("#partDestroyed").val();
		var effect = $("#effect").val();
		var stageAffected = $("#stageAffected").val();

		// for FILIPINO
		var filName = $("#filName").val();
		var filTreatment = $("#filTreatment").val();
		var filClassification = $("#filClassification").val();
		var filPlantAffected = $("#filPlantAffected").val();
		var filDescription = $("#filDescription").val();
		var filSymptoms = $("#filSymptoms").val();
		var filStageThreatening = $("#filStageThreatening").val();
		var filPartDestroyed = $("#filPartDestroyed").val();
		var filEffect = $("#filEffect").val();
		var filStageAffected = $("#filStageAffected").val();

		console.log(pestName);
		console.log(engName);
		console.log(sciName);
		console.log(image);

		console.log("\n" + treatment);
		console.log(classification);
		console.log(order);
		console.log(plantAffected);
		console.log(description);
		console.log(symptoms);
		console.log(stageThreatening);
		console.log(partDestroyed);
		console.log(effect);
		console.log(stageAffected);

		console.log("\n" + filName);
		console.log(filTreatment);
		console.log(filClassification);
		console.log(filPlantAffected);
		console.log(filDescription);
		console.log(filSymptoms);
		console.log(filStageThreatening);
		console.log(filPartDestroyed);
		console.log(filEffect);
		console.log(filStageAffected);

		// UPDATES THE DATABASE
		Meteor.call('pests.editPest', id, pestName, engName, sciName, image, treatment, classification, order, plantAffected, description, symptoms, stageThreatening, partDestroyed, effect, stageAffected, filName, filTreatment, filClassification, filPlantAffected, filDescription, filSymptoms, filStageThreatening, filPartDestroyed, filEffect, filStageAffected, (error) => {
	      if (error) {
	        alert(error.error);
	      } else {
	        alert("Pest successfully edited!");
	      }
	    });
	},
});

Template.pestEntity.events({
	'click .back-button': function(event) {
		FlowRouter.go('/edit-pest');
	},	
});