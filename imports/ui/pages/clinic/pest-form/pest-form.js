import { Meteor } from 'meteor/meteor';
import { Forms } from '/imports/api/forms/forms.js';
import './pest-form.html';

var newForm;
var date = new Date();

Template.FormOnly.onCreated(function () {
  Meteor.subscribe('forms.all');
});

Template.FormOnly.onRendered(function () {
  $("#addinfo2").hide();
  $("#pestprob2").hide();
});

Template.FormOnly.events({

    'submit form': function(e){
        e.preventDefault();
    },
    'click #con1': function(){
            // $("#geninfo2").hide();
            // $("#pestprob2").show();
            var text = document.getElementById('stp2'); 
            text.style.color='black';
            
    },
    'click #con2': function(){
            // $("#pestprob2").hide();
            // $("#addinfo2").show();
            var text = document.getElementById('stp3'); 
            text.style.color='black';
    },
    'click #back1': function(){
            $("#geninfo2").show();
            $("#pestprob2").hide();
    },
    'click #back2': function(){
            $("#pestprob2").show();
            $("#addinfo2").hide();
    }
                
});


Template.GeneralInformation2.events({
    'click #con1': function(e){
        e.preventDefault();
        if( !($("#email2").val()=='') && !($("#floc2").val()=='') && !($('select[name=cstage2]').val()=='') && !($("#area2").val()=='') && !($(".cstage2").val()=='') && !($("#crop2").val()=='')){
            newForm = {
                date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                email: $("#email2").val(), 
                location: $("#floc2").val(),
                source: $("#src2").val(), 
                area: $("#area2").val(),
                cropStage: $('select[name=cstage2]').val(),
                variety: $("#crop2").val(),
            }
            $("#geninfo2").hide();
            $("#pestprob2").show();
            var text = document.getElementById('stp2'); 
            text.style.color='black';
            
        }else{
            $('#incompleteForm2').modal('show');
        }
    }
});

Template.PestProblemForm2.events({
    'click #con2': function(e){
        e.preventDefault();
        
        newForm.pesttype = "";
        if($("#insect2")[0].checked){
            newForm.pesttype = newForm.pesttype.concat($("#insect2").val() + "; ");
        }if($("#weed2")[0].checked){
            newForm.pesttype = newForm.pesttype.concat($("#weed2").val() + "; ");
        }if($("#rat2")[0].checked){
            newForm.pesttype = newForm.pesttype.concat($("#rat2").val() +"; ");
        }if($("#bird2")[0].checked){
            newForm.pesttype = newForm.pesttype.concat($("#bird2").val() + "; ");
        }if($("#nematode2")[0].checked){
            newForm.pesttype = newForm.pesttype.concat($("#nematode2").val() + "; ");
        }if($("#otrf2-12")[0].checked){
            newForm.pesttype = newForm.pesttype.concat($("#otrf2-12").val() + "; ");
        }
        
        newForm.symptoms = "";
        if($("#yellowing2")[0].checked){
            newForm.symptoms = newForm.symptoms.concat($("#yellowing2").val() + "; ");
        }if($("#rot2")[0].checked){
            newForm.symptoms = newForm.symptoms.concat($("#rot2").val() + "; ");
        }if($("#spot2")[0].checked){
            newForm.symptoms = newForm.symptoms.concat($("#spot2").val() + "; ");
        }if($("#stunting2")[0].checked){
            newForm.symptoms = newForm.symptoms.concat($("#stunting2").val() + "; ");
        }if($("#otrf22")[0].checked){
            newForm.symptoms = newForm.symptoms.concat($("#otrf22").val() + "; ");
        }

        newForm.parts = "";
        if($("#wplant2")[0].checked){
            newForm.parts = newForm.parts.concat($("#wplant2").val() + "; ");
        }if($("#frs2")[0].checked){
            newForm.parts = newForm.parts.concat($("#frs2").val() + "; ");
        }if($("#local2")[0].checked){
            newForm.parts = newForm.parts.concat($("#local2").val() + "; ");
        }if($("#flt2")[0].checked){
            newForm.parts = newForm.parts.concat($("#flt2").val() + "; ");
        }if($("#otrf222")[0].checked){
            newForm.parts = newForm.parts.concat($("#otrf222").val() + "; ");
        }

        newForm.distribution = "";
        if($("#random2")[0].checked){
            newForm.distribution = $("#random2").val();
        }else if($("#sao2")[0].checked){
            newForm.distribution = $("#sao2").val();
        }else{
            newForm.distribution = $("#otherf232text").val();
        }

        newForm.damage = "";
        if($("#chewing2")[0].checked){
            newForm.damage = newForm.damage.concat($("#chewing2").val() + "; ");
        }if($("#sucking2")[0].checked){
            newForm.damage = newForm.damage.concat($("#sucking2").val() + "; ");
        }if($("#otherdamage2")[0].checked){
            newForm.damage = newForm.damage.concat($("#otherdamage2").val() + "; ");
        }

        if(!(newForm.pesttype =='') && !(newForm.symptoms =='') && !(newForm.parts =='') && !(newForm.distribution =='') && !(newForm.damage =='')){
            $("#pestprob2").hide();
            $("#addinfo2").show();
            var text = document.getElementById('stp3'); 
            text.style.color='black';
            console.log(newForm.pesttype);
            
        }else{
            $('#incompleteForm2').modal('show');
        }
        
    }
});

Template.AdditionalInformation2.events({
    'click #form-submit': function(e){
        e.preventDefault();
        newForm.fertilizer = "";
        newForm.insecticide = "";
        newForm.fungicide = "";
        newForm.herbicide = "";
        newForm.weather = "";

        newForm.fertilizer = $("#fertilizer2").val();
        newForm.insecticide = $("#insecticide2").val();
        newForm.fungicide = $("#fungicide2").val();
        newForm.herbicide = $("#herbicide2").val();

        newForm.weather = "";
        if($("#rain2")[0].checked){
            newForm.weather = newForm.weather.concat($("#rain2").val() + "; ");
        }if($("#drought2")[0].checked){
            newForm.weather = newForm.weather.concat($("#drought2").val() + "; ");
        }if($("#flood2")[0].checked){
            newForm.weather = newForm.weather.concat($("#flood2").val() + "; ");
        }if($("#fog2")[0].checked){
            newForm.weather = newForm.weather.concat($("#fog2").val() + "; ");
        }if($("#others2")[0].checked){
            newForm.weather = newForm.weather.concat($("#otr-f3-abn2").val() + "; ");
        }

        newForm.chemapplied = $("#d2").val() + " " + $("#days2 option:selected").val();
        newForm.weatherobserved = $("#d22").val() + " " + $("#days22 option:selected").val();
        if(!(newForm.fertilizer =='') && !(newForm.insecticide =='') && !(newForm.fungicide =='') && !(newForm.herbicide =='') && !(newForm.weather =='') && !($("#d1").val() =='') && !($("#d2").val() =='')){
            Meteor.call('Forms.addForm', newForm, (error) => {
              if (error) {
                alert(error.error);
                console.log(error);
              } else {
                $('#requestSubmitted2').modal('show');
                console.log("date: " + newForm.date);
                console.log("email: " + newForm.email);
                console.log("loc: " + newForm.location);
                console.log("source: " + newForm.source);
                console.log("area: " + newForm.area);
                console.log("variety: " + newForm.variety);
                console.log("cropStage: " + newForm.cropStage);
                console.log("pesttype: " + newForm.pesttype);
                console.log("symptoms: " + newForm.symptoms);
                console.log("parts: " + newForm.parts);
                console.log("distribution: " + newForm.distribution);
                console.log("damage: " + newForm.damage);
                console.log("fertilizer: " + newForm.fertilizer);
                console.log("insecticide: " + newForm.insecticide);
                console.log("herbicide: " + newForm.herbicide);
                console.log("fungicide: " + newForm.fungicide);
                console.log("weather: " + newForm.weather);
                console.log("chemapplied: " + newForm.chemapplied);
                console.log("weatherobserved: " + newForm.weatherobserved);
                $('.closeModal').attr('href', '/pests-clinic');
              }
            });
        }else{
            $('#incompleteForm2').modal('show');
        }
    }
});