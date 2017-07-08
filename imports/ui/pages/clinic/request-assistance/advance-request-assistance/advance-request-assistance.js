import { Meteor } from 'meteor/meteor';
import { Assistance } from '/imports/api/assistance/assistance.js';
import { advanceAssistance } from '/imports/api/advance-assistance/advance-assistance.js';
import { Logs } from '/imports/api/logs/logs.js';
import './advance-request-assistance.html';
import './advance-request-assistance-css.html';

var newAdvanceAssistance;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
Template.Advance_Request_Assistance.onCreated(function() {
	Meteor.subscribe('assistance.all');
	Meteor.subscribe('advance_assistance.all');
	Meteor.subscribe('logs.all');
});
Template.Advance_Request_Assistance.onRendered({
	
});

Template.Advance_Request_Assistance.events({
		'click #back1': function(){
				$("#geninfo").show();
				$("#pestprob").hide();
				console.log($("#cstage").val());
		},
		'click #back2': function(){
				$("#pestprob").show();
				$("#addinfo").hide();
		},
		'click #closeButton': function(event){
			FlowRouter.go("/pests-clinic");
		}
				
});

Template.GeneralInformation.events({
	'click #con1': function(e){
		e.preventDefault();
		//var form = e.target;
		//console.log("testing",form);
		if( !($("#floc").val()=='') && !($("#src").val()=='') && !($("#area").val()=='') && !($("#cstage").val()=='') && !($("#crop").val()=='')){
			newAdvanceAssistance = {
				user: Meteor.user().username,
				date: moment().format('MMMM Do YYYY, h:mm:ss a'),
				email: Meteor.user().emails[0].address, 

				location: $("#floc").val(),
				source: $("#src").val(), 
				area: $("#area").val(),
				cropStage: $("#cstage").val(),
				variety: $("#crop").val(),
			}
			$("#geninfo").hide();
			$("#pestprob").show();
			var text = document.getElementById('stp2'); 
			text.style.color='black';
			document.getElementById("stp2").style.opacity = "1";
			
		}else{
			$('#incompleteForm').modal('show');
		}
		
	}
});

Template.PestProblemForm.events({
	'click #con2': function(e){
		e.preventDefault();
		
		if($("#insect")[0].checked){
			newAdvanceAssistance.pesttype = $("#insect").val();
		}else if($("#weed")[0].checked){
			newAdvanceAssistance.pesttype = $("#weed").val();
		}else if($("#rat")[0].checked){
			newAdvanceAssistance.pesttype = $("#rat").val();
		}else if($("#bird")[0].checked){
			newAdvanceAssistance.pesttype = $("#bird").val();
		}else if($("#nematode")[0].checked){
			newAdvanceAssistance.pesttype = $("#newAdvanceAssistance").val();
		}else if($("#otrf2-1")[0].checked){
			newAdvanceAssistance.pesttype = $("#others").val();
		}else{
			newAdvanceAssistance.pesttype = "";	
		}
		
		if($("#yellowing")[0].checked){
			newAdvanceAssistance.symptoms = $("#yellowing").val();
		}else if($("#rot")[0].checked){
			newAdvanceAssistance.symptoms = $("#rot").val();
		}else if($("#spot")[0].checked){
			newAdvanceAssistance.symptoms = $("#spot").val();
		}else if($("#stunting")[0].checked){
			newAdvanceAssistance.symptoms = $("#stunting").val();
		}else if($("#otrf2")[0].checked){
			newAdvanceAssistance.symptoms = $("#otrf2").val();
		}else{
			newAdvanceAssistance.symptoms = "";
		}
		
		if($("#wplant")[0].checked){
			newAdvanceAssistance.parts = $("#wplant").val();
		}else if($("#frs")[0].checked){
			newAdvanceAssistance.parts = $("#frs").val();
		}else if($("#local")[0].checked){
			newAdvanceAssistance.parts = $("#local").val();
		}else if($("#flt")[0].checked){
			newAdvanceAssistance.parts = $("#flt").val();
		}else if($("#otrf22")[0].checked){
			newAdvanceAssistance.parts = $("#otrf22").val();
		}else{
			newAdvanceAssistance.parts = "";
		}

		newAdvanceAssistance.distribution = "";
		if($("#random")[0].checked){
			newAdvanceAssistance.distribution = $("#random").val();
		}else if($("#sao")[0].checked){
			newAdvanceAssistance.distribution = $("#sao").val();
		}else{
			newAdvanceAssistance.distribution = $("#otherf23").val();
		}

		if($("#chewing")[0].checked){
			newAdvanceAssistance.damage = $("#chewing").val();
		}else if($("#sucking")[0].checked){
			newAdvanceAssistance.damage = $("#sucking").val();
		}else if($("otr-insect-damage")[0].checked){
			newAdvanceAssistance.damage = $("otr-insect-damage").val();
		}else{
			newAdvanceAssistance.damage = "";
		}

		if(!(newAdvanceAssistance.pesttype =='') && !(newAdvanceAssistance.symptoms =='') && !(newAdvanceAssistance.parts =='') && !(newAdvanceAssistance.distribution =='') && !(newAdvanceAssistance.damage =='')){
			$("#pestprob").hide();
			$("#addinfo").show();
			var text = document.getElementById('stp3'); 
			text.style.color='black';
			document.getElementById("stp3").style.opacity = "1";
		}else{
			$('#incompleteForm').modal('show');
		}
		
	}
});

Template.AdditionalInformation.events({
	'click #form-submit': function(e){
		e.preventDefault();
		newAdvanceAssistance.fertilizer = "";
		newAdvanceAssistance.insecticide = "";
		newAdvanceAssistance.fungicide = "";
		newAdvanceAssistance.herbicide = "";
		newAdvanceAssistance.weather = "";

		newAdvanceAssistance.fertilizer = $("#fertilizer").val();
		newAdvanceAssistance.insecticide = $("#insecticide").val();
		newAdvanceAssistance.fungicide = $("#fungicide").val();
		newAdvanceAssistance.herbicide = $("#herbicide").val();
		if($("#rain")[0].checked){
			newAdvanceAssistance.weather = $("#rain").val();
		}else if($("#drought")[0].checked){
			newAdvanceAssistance.weather = $("#drought").val();
		}else if($("#flood")[0].checked){
			newAdvanceAssistance.weather = $("#flood").val();
		}else if($("#fog")[0].checked){
			newAdvanceAssistance.weather = $("#fog").val();
		}else{
			newAdvanceAssistance.weather = $("#otr-f3-abn").val();
		}

		newAdvanceAssistance.chemapplied = $("#d1").val() + " " + $("#days option:selected").val();
		newAdvanceAssistance.weatherobserved = $("#d2").val() + " " + $("#days2 option:selected").val();
		if(!(newAdvanceAssistance.fertilizer =='') && !(newAdvanceAssistance.insecticide =='') && !(newAdvanceAssistance.fungicide =='') && !(newAdvanceAssistance.herbicide =='') && !(newAdvanceAssistance.weather =='') && !($("#d1").val() =='') && !($("#d2").val() =='')){
			
			var newAssistance = {
				email: newAdvanceAssistance.email,
				subject: "Advance Assistance Form",
				message: 
				"Farm Location: " + newAdvanceAssistance.location + "<br>" + 
				"Source of Plant: " + newAdvanceAssistance.source + "<br>" + 
				"Area Planted: " + newAdvanceAssistance.area + "<br>" + 
				"Crop Stage: " + newAdvanceAssistance.cropStage + "<br>" +
				"Crop/Variety: " + newAdvanceAssistance.variety + "<br>" + 
				"Type of Pest: " + newAdvanceAssistance.pesttype + "<br>" + 
				"Description of Symptoms: " + newAdvanceAssistance.symptoms + "<br>" +
				"Parts of Plant Affected: " + newAdvanceAssistance.parts + "<br>" + 
				"Distribution of Symptoms: " + newAdvanceAssistance.distribution + "<br>" +
				"Insect Damage: " + newAdvanceAssistance.damage + "<br>" +
				"Chemical Rate Applied: <br>" + 
				"Fertilizer: " + newAdvanceAssistance.fertilizer + "<br>" +
				"Insecticide: " + newAdvanceAssistance.insecticide + "<br>" +
				"Fungicide: " + newAdvanceAssistance.fungicide + "<br>" +	
				"Herbicide: " + newAdvanceAssistance.herbicide + "<br>" +
				"Usually weather condition that occured before the pest/abnormality was observed: " + newAdvanceAssistance.weather + "<br>" +
				"Pests was observed " + newAdvanceAssistance.chemapplied + " chemical is applied<br>" +
				"Pests was observed " + newAdvanceAssistance.weatherobserved + " an unusual weather<br>",
				user: newAdvanceAssistance.user,
				date: newAdvanceAssistance.date,
				month: months[date.getMonth()],
				year: date.getFullYear().toString(),
				problem: "Others",
				control: (Assistance.find().count() + 1)
			};
			console.log(newAssistance);
			var newLog = {
				email: newAssistance.email,
				subject: newAssistance.subject,
				message: newAssistance.message,
				user: newAssistance.user,
				date: newAssistance.date,
				month: newAssistance.month,
				year: newAssistance.year,
				problem: newAssistance.problem,
				control: newAssistance.control,
			    username: newAssistance.user,
			    dateReplied: '',
			    adminUsername: '',
			    adminEmail: '',
			    reply: ''
			};
			Meteor.call('advanceAssistance.addAdvanceAssistance', newAdvanceAssistance, (error) => {
		      if (error) {
		        alert(error.error);
		      } else {
				Meteor.call('assistance.addAssistance', newAssistance, (error) => {
					if(error){
						alert(error.error);
					}else{
						Meteor.call('logs.addlogs',newLog);
						console.log("Added to assistance and log database!");
					}
				});
				document.getElementById("stp4").style.opacity = "1";
		      	$('#requestSubmitted').modal('show');
		      }
		    });
		}else{
			$('#incompleteForm').modal('show');
		}
		
	}
});


Template.GeneralInformation.onRendered(function(){
    /* $('.firstForm').validate({
        rules: {
            floc: {
                required: true,
                minlength: 6
            },
            area: {
                required: true
            },
            crop: {
                required: true,
                minlength: 6
            },
            src: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            floc: {
               required: "Please fill up this field",
					minlength: "Min length is 6"
            },
            area: {
               required: "Please fill up this field"
            },
            crop: {
               required: "Please fill up this field",
					minlength: "Min length is 6"
            },
            src: {
               required: "Please fill up this field",
					minlength: "Min length is 6"
            }
        }
    });*/
});
