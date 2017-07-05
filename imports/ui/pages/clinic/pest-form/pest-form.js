import { Meteor } from 'meteor/meteor';
import { Forms } from '/imports/api/forms/forms.js';
import { Assistance } from '/imports/api/assistance/assistance.js';
import { Logs } from '/imports/api/logs/logs.js';
import './pest-form.html';

var newForm;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
            console.log($('select[name=cstage2]').val());
            
    },
    'click #con2': function(){
            $("#pestprob2").hide();
            $("#addinfo2").show();
            var text = document.getElementById('stp3'); 
            text.style.color='black';
            console.log($("#insect2")[0].checked);
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

// /*Template.sampleTemplate.events({
//     'submit form': function(e){
//         e.preventDefault();
//     },
//     'click #submitBtn': function(){
//         var error = $("#field1-error").text();
//         if(error!=""){
//             alert('error!');
//         }
//         else{
//             alert('submit');
//         }
//     }
// });*/

Template.GeneralInformation2.events({
    'click #con1': function(e){
        e.preventDefault();
        //var form = e.target;
        //console.log("testing",form);
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
        
        if($("#insect2")[0].checked){
            newForm.pesttype = $("#insect2").val();
        }else if($("#weed2")[0].checked){
            newForm.pesttype = $("#weed2").val();
        }else if($("#rat2")[0].checked){
            newForm.pesttype = $("#rat2").val();
        }else if($("#bird2")[0].checked){
            newForm.pesttype = $("#bird2").val();
        }else if($("#nematode2")[0].checked){
            newForm.pesttype = $("#newForm").val();
        }else if($("#otrf2-12")[0].checked){
            newForm.pesttype = $("#others2").val();
        }else{
            newForm.pesttype = ""; 
        }
        
        if($("#yellowing2")[0].checked){
            newForm.symptoms = $("#yellowing2").val();
        }else if($("#rot2")[0].checked){
            newForm.symptoms = $("#rot2").val();
        }else if($("#spot2")[0].checked){
            newForm.symptoms = $("#spot2").val();
        }else if($("#stunting2")[0].checked){
            newForm.symptoms = $("#stunting2").val();
        }else if($("#otrf22")[0].checked){
            newForm.symptoms = $("#otrf22").val();
        }else{
            newForm.symptoms = "";
        }
        
        if($("#wplant2")[0].checked){
            newForm.parts = $("#wplant2").val();
        }else if($("#frs2")[0].checked){
            newForm.parts = $("#frs2").val();
        }else if($("#local2")[0].checked){
            newForm.parts = $("#local2").val();
        }else if($("#flt2")[0].checked){
            newForm.parts = $("#flt2").val();
        }else if($("#otrf222")[0].checked){
            newForm.parts = $("#otrf222").val();
        }else{
            newForm.parts = "";
        }

        newForm.distribution = "";
        if($("#random2")[0].checked){
            newForm.distribution = $("#random2").val();
        }else if($("#sao2")[0].checked){
            newForm.distribution = $("#sao2").val();
        }else{
            newForm.distribution = $("#otherf232").val();
        }

        if($("#chewing2")[0].checked){
            newForm.damage = $("#chewing2").val();
        }else if($("#sucking2")[0].checked){
            newForm.damage = $("#sucking2").val();
        }else if($("otr-insect-damage2")[0].checked){
            newForm.damage = $("otr-insect-damage2").val();
        }else{
            newForm.damage = "";
        }

        if(!(newForm.pesttype =='') && !(newForm.symptoms =='') && !(newForm.parts =='') && !(newForm.distribution =='') && !(newForm.damage =='')){
            $("#pestprob2").hide();
            $("#addinfo2").show();
            var text = document.getElementById('stp3'); 
            text.style.color='black';
            
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
        if($("#rain2")[0].checked){
            newForm.weather = $("#rain2").val();
        }else if($("#drought2")[0].checked){
            newForm.weather = $("#drought2").val();
        }else if($("#flood2")[0].checked){
            newForm.weather = $("#flood2").val();
        }else if($("#fog2")[0].checked){
            newForm.weather = $("#fog2").val();
        }else{
            newForm.weather = $("#otr-f3-abn2").val();
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
                console.log("success");
                $('.closeModal').attr('href', '/pests-clinic');
              }
            });
        }else{
            $('#incompleteForm2').modal('show');
        }
    }
});