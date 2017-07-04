import { Forms } from '/imports/api/forms/forms.js';
import { Logs } from '/imports/api/logs/logs.js';
import { Meteor } from 'meteor/meteor';
import './form-result.html'
import '../../components/clinic-cms-navbar.html';
import '../../components/cms-sidenav.html';


Template.formResult.onCreated(function() {
  	Meteor.subscribe('usersList');
	Meteor.subscribe('forms.all');
	Meteor.subscribe('logs.all');
});

Template.formResult.onRendered(function() {
	$("#answerField").hide();
});

Template.formResult.helpers({
	forms(){
		return Forms.find().fetch();
	},
	
});

Template.formResult.events({
	'click .answer': function(event){
		$("#answerField").show();
	},

	'click .closebtn': function(event){
		$('#subject').html('');
		$('#floc').html('');
		$('#area').html('');
		$('#crop').html('');
		$('#src').html('');
		$('#variety').html('');
		$('#cstages').html('');
		$('#vtype').html('');
		$('#pesttype').html('');
		$('#symptoms').html('');
		$('#parts').html('');
		$('#distribution').html('');
		$('#damage').html('');
		$('#fertilizer').html('');
		$('#insecticide').html('');
		$('#herbicide').html('');
		$('#fungicide').html('');
		$('#weather').html('');
		$('#chemapplied').html('');
		$('#weatherobserved').html('');
		$('#close-button').html('');
		$('#answer-button').html('');
		$("#answerField").hide();
	},

	'click #confirmDelete': function(event) {
		$('#deleteEntry').modal('hide');
		console.log(Session.get('id'));
		Meteor.call('forms.removeForm', Session.get('id'), (error) => {
	      if (error) {
	      	console.log(error);
	        alert(error.error);
	      } else {
			$('#subject').html('');
			$('#floc').html('');
			$('#area').html('');
			$('#crop').html('');
			$('#src').html('');
			$('#variety').html('');
			$('#cstages').html('');
			$('#vtype').html('');
			$('#pesttype').html('');
			$('#symptoms').html('');
			$('#parts').html('');
			$('#distribution').html('');
			$('#damage').html('');
			$('#fertilizer').html('');
			$('#insecticide').html('');
			$('#herbicide').html('');
			$('#fungicide').html('');
			$('#weather').html('');
			$('#chemapplied').html('');
			$('#weatherobserved').html('');
			$('#close-button').html('');
			$('#answer-button').html('');
	      }
		});
	},

	'click #cancelBTN': function(event){
		$('#subjectField').val('');
		$('#msgField').val('');
		$("#answerField").hide();
	},
});
Template.resultButton.events({
	'click .view': function(event, template){
		if( !(this.id == undefined) || !(this.id == null) ){
			var entry = Forms.findOne({'_id': this.id});
			console.log(entry);
			$('#subject').html("<h5><b>" + entry.email + " </b><small>" + entry.date + "</small></h5><hr/>");
			$('#floc').html("<h5>Location: " + entry.floc + "</h5>");
			$('#area').html("<h5>Area: " + entry.area + "</h5>");
			$('#crop').html("<h5>Crop: " + entry.crop + "</h5>");
			$('#src').html("<h5>Source: " + entry.src + "</h5>");
			$('#variety').html("<h5>Variety: " + entry.variety + "</h5>");
			$('#cstages').html("<h5>Crop Stage: " + entry.cstage + "</h5>");
			$('#vtype').html("<h5>Variety Type: " + entry.vtype + "</h5>");
			$('#pesttype').html("<h5>Pest Type: " + entry.pesttype + "</h5>");
			$('#symptoms').html("<h5>Sypmtoms: " + entry.symptoms + "</h5>");
			$('#parts').html("<h5>Parts: " + entry.parts + "</h5>");
			$('#distribution').html("<h5>Distribution: " + entry.distribution + "</h5>");
			$('#damage').html("<h5>Damage: " + entry.damage + "</h5>");
			$('#fertilizer').html("<h5>Fertilizer: " + entry.fertilizer + "</h5>");
			$('#insecticide').html("<h5>Insecticide: " + entry.insecticide + "</h5>");
			$('#herbicide').html("<h5>Herbicide: " + entry.herbicide + "</h5>");
			$('#fungicide').html("<h5>Fungicide: " + entry.fungicide + "</h5>");
			$('#weather').html("<h5>Weather: " + entry.weather + "</h5>");
			$('#chemapplied').html("<h5>Chemical Applied: " + entry.chemapplied + "</h5>");
			$('#weatherobserved').html("<h5>Weather Observed: " + entry.weatherobserved + "</h5><hr/>");			
			$('#answer-button').html("<button type='button' class='btn btn-primary answer'>Answer</button>");	
			$('#close-button').html("<button type='button' class='btn btn-secondary closebtn'>Close</button>");
		}

	},
	'click .delete': function(event, template){
		Session.set('id', this.id);
		$("#deleteEntry").modal('show');
	},
});