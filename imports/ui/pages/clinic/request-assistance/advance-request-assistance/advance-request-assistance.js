import './advance-request-assistance.html';

Template.Advance_Request_Assistance.onCreated(function() {
	Meteor.subscribe('clinicForm')
});
Template.Advance_Request_Assistance.helpers({
	
});

Template.Advance_Request_Assistance.events({
		'submit form': function(e){
			e.preventDefault();
		},
		'click #con1': function(){
				$("#geninfo").hide();
				$("#pestprob").show();
				var text = document.getElementById('stp2'); 
				text.style.color='black';
		},
		'click #con2': function(){
				$("#pestprob").hide();
				$("#addinfo").show();
				var text = document.getElementById('stp3'); 
				text.style.color='black';
		},
		'click #back1': function(){
				$("#geninfo").show();
				$("#pestprob").hide();
		},
		'click #back2': function(){
				$("#pestprob").show();
				$("#addinfo").hide();
		}
				
		});

/*Template.sampleTemplate.events({
	'submit form': function(e){
		e.preventDefault();
	},
	'click #submitBtn': function(){
		var error = $("#field1-error").text();
		if(error!=""){
			alert('error!');
		}
		else{
			alert('submit');
		}
	}
});*/

Template.GeneralInformation.events({
	'submit form': function(e){
		e.preventDefault();
		/*var form = e.target;
		console.log("testing",form);
		
		var floc = $("#floc").val();
		var area = $("#area").val();
		var crop = $("#crop").val();
		var src = $("#src").val();
		console.log(floc);
		console.log(area);
		console.log(crop);
		console.log(src);
		
		ClinicForm.insert({
				location: floc,
				area: area,
				crop: crop,
				source: src
			});
			
		console.log( ClinicForm.find({limit: 8}));
		*/
	}
});

Template.PestProblemForm.events({
	'submit form': function(e){
		e.preventDefault();
		
		/*ClinicForm.insert({
				location: floc,
				area: area,
				crop: crop,
				source: src
			});
			
		console.log( ClinicForm.find({limit: 8}));
		*/
	}
});

Template.AdditionalInformation.events({
	'submit form': function(e){
		e.preventDefault();
		
		/*ClinicForm.insert({
				location: floc,
				area: area,
				crop: crop,
				source: src
			});
			
		console.log( ClinicForm.find({limit: 8}));
		*/
	}
});


Template.GeneralInformation.onRendered(function(){
     $('.firstForm').validate({
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
    });
});
