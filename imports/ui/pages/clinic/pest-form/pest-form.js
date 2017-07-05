import { Meteor } from 'meteor/meteor';
import { Forms } from '/imports/api/forms/forms.js';
import './pest-form.html';

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
            $("#geninfo2").hide();
            $("#pestprob2").show();
            var text = document.getElementById('stp2'); 
            text.style.color='black';
            // console.log($("#email2").val());
            // console.log($("#floc2").val());
            // console.log($("#src2").val());
            // console.log($("#area2").val());
            // console.log($("#cstage2").val());
            // console.log($("#crop2").val());
            
    },
    'click #con2': function(){
            $("#pestprob2").hide();
            $("#addinfo2").show();
            var text = document.getElementById('stp3'); 
            text.style.color='black';
            console.log($("#email2").val());
            console.log($("#floc2").val());
            console.log($("#src2").val());
            console.log($("#area2").val());
            console.log($("#cstage2").val());
            console.log($("#crop2").val());
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

// Template.GeneralInformation.events({
//     'submit form': function(e){
//         e.preventDefault();
//         var form = e.target;
//         console.log("testing",form);
        
//         var floc = $("#floc").val();
//         var area = $("#area").val();
//         var crop = $("#crop").val();
//         var src = $("#src").val();
//         console.log(floc);
//         console.log(area);
//         console.log(crop);
//         console.log(src);
        
//         ClinicForm.insert({
//                 location: floc,
//                 area: area,
//                 crop: crop,
//                 source: src
//             });
            
//         console.log( ClinicForm.find({limit: 8}));
        
//     }
// });

// Template.PestProblemForm.events({
//     'submit form': function(e){
//         e.preventDefault();
        
//         /*ClinicForm.insert({
//                 location: floc,
//                 area: area,
//                 crop: crop,
//                 source: src
//             });
            
//         console.log( ClinicForm.find({limit: 8}));
//         */
//     }
// });

// Template.AdditionalInformation.events({
//     'submit form': function(e){
//         e.preventDefault();
        
//         /*ClinicForm.insert({
//                 location: floc,
//                 area: area,
//                 crop: crop,
//                 source: src
//             });
            
//         console.log( ClinicForm.find({limit: 8}));
//         */
//     }
// });


// Template.GeneralInformation.onRendered(function(){
//      $('.firstForm').validate({
//         rules: {
//             floc: {
//                 required: true,
//                 minlength: 6
//             },
//             area: {
//                 required: true
//             },
//             crop: {
//                 required: true,
//                 minlength: 6
//             },
//             src: {
//                 required: true,
//                 minlength: 6
//             }
//         },
//         messages: {
//             floc: {
//                required: "Please fill up this field",
//                     minlength: "Min length is 6"
//             },
//             area: {
//                required: "Please fill up this field"
//             },
//             crop: {
//                required: "Please fill up this field",
//                     minlength: "Min length is 6"
//             },
//             src: {
//                required: "Please fill up this field",
//                     minlength: "Min length is 6"
//             }
//         }
//     });
// });
