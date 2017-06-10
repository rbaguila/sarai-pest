//import { Email } from 'meteor/email'; //import the meteor email package
import { Meteor } from 'meteor/meteor';
import './pest-clinic-email.html';

var filename="";
Template.pestClinicEmail.onRendered(function() {
  Session.set("uploaded", false);
	//Session.set("currentPage", "finalEmail"); // set the current page to change banner
	$('.jqDropZone').html("<img src='/img/drop-here.png' width='100%' height='295px'/>");
});
Template.pestClinicEmail.events({
      'click #send-email-button': function () {
      	//event.getPreventDefault();
        var email = {
            to: document.getElementById("toEA").value,
            from: 'mendozama.angelica@gmail.com',
            //replyTo: 'abct@failtracker.com',
            subject: document.getElementById("subject").value,
            text: document.getElementById("message").value,
            attachments:[
              {
                filePath: filename
              }
            ]
        };
        var credentials ={
          username:"mendozama.angelica",
          password:"201320378"
          
        };
        
        //Meteor.call('startup',credentials);
        console.log("Sending...");
        //console.log(file);
        Meteor.call('sendEmail', email);
        document.getElementById('toEA').value = "";
        document.getElementById('subject').value = "";
        document.getElementById('message').value = "";
        filename = "";
        $('.jqDropZone').html("<img src='/img/drop-here.png' width='100%' height='295px'/>");
      }
});
Template.pestClinicEmail.helpers({
  myCallbacks: function() {
    return {
        finished: function(index, fileInfo, context) {
          
          //Session.set("showIPS", true);
          //Session.set("spinner", true);
          //Session.set('data',undefined);
          // filename = "../server/uploads/"+fileInfo.name;
          console.log(fileInfo);
         // file = fileInfo.name;
          filename = "http://localhost:3000/upload/"+fileInfo.name;
          //H4Dhw4yPhumNK3PKu.jpg
          Session.set("filename",filename);
          //var type = Session.get("currentType");
          
          $('.jqDropZone').html("<img src=/upload/"+fileInfo.name+" width='100%' height='295px'/>");
          $.ajax({  
            type:"POST",
            url:"http://localhost:3000/pests-clinic/email",
            dataType:"json",
            data: 
              {
                'filename': filename
              },
            success: function(result){
              //Session.set("spinner", false);
              Session.set("uploaded", true);
              //Session.set('data',result.data);
              //console.log(result.data);   
            },
            error: function(error){
              //Session.set("spinner", false);
              Session.set("uploaded", false);
              //console.log(error.data);
            }
          });
        }

      }
    }
});