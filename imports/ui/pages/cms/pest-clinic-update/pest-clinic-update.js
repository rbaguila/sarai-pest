import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './pest-clinic-update.html';
import '../components/clinic-cms-navbar.html';
import '../components/cms-sidenav.html';

Template.pestClinicUpdate.onCreated(function() {
	Meteor.subscribe('usersList');
	Meteor.subscribe('cms.all');
});

Template.pestClinicUpdate.onRendered(function() {
	$('#viewChangesBTN').hide();
});

Template.pestClinicUpdate.helpers({
	getCMS(){
		return CMS.findOne({info: "finalClinic"});
	},
	
	isSelected(value, position){
		return value == position;
	},
});

var file1, file2, file3;
var files1 = [], files2 = [], files3 = [];

Template.pestClinicUpdate.events({
	'submit .upload_btn1': function(e, t){
        e.preventDefault();
		file1 = $('#userimage1')[0].files[0];
		files1.push(file1);
		$('#progress1 #progress-bar1').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    },

    'submit .upload_btn2': function(e, t){
        e.preventDefault();
		file2 = $('#userimage2')[0].files[0];
		files2.push(file2);
		$('#progress2 #progress-bar2').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    },

    'submit .upload_btn3': function(e, t){
        e.preventDefault();
		file3 = $('#userimage3')[0].files[0];
		files3.push(file3);
		$('#progress3 #progress-bar3').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    }, 

	'click #saveBTN': function(event){
		event.preventDefault();
		var imgURL;

		Cloudinary.upload(file1, function(err, res){
          console.log("Upload Error: " + err);
          console.log("Upload Result: " + res);			
          imgURL = res.public_id;
          Session.set('bannerImage', 'http://res.cloudinary.com/project-sarai/image/upload/' + imgURL);          
      	});

		Cloudinary.upload(file2, function(err, res){
          console.log("Upload Error: " + err);
          console.log("Upload Result: " + res);			
          imgURL = res.public_id;
          Session.set('row1Image', 'http://res.cloudinary.com/project-sarai/image/upload/' + imgURL);          
      	});

		Cloudinary.upload(file3, function(err, res) {
          console.log("Upload Error: " + err);
          console.log("Upload Result: " + res);
          imgURL = res.public_id;
          Session.set('row2Image', 'http://res.cloudinary.com/project-sarai/image/upload/' + imgURL);

		// GET THE VALUES
			var newCMS = {
				bannerImage: (Session.get('bannerImage') == undefined) ? CMS.findOne({info: "finalClinic"}).bannerImage : Session.get('bannerImage'),
				bannerText : $("#bannerText").val(),
				bannerSubText : $("#bannerSubText").val(),
				row1HeadText: $("#row1HeadText").val(),
				row1Image: (Session.get('row1Image') == undefined) ? CMS.findOne({info: "finalClinic"}).row1Image : Session.get('row1Image'),
				row2HeadText: $("#row2HeadText").val(),
				row2SubText: $("#row2SubText").val(),
				row2Image: (Session.get('row2Image') == undefined) ? CMS.findOne({info: "finalClinic"}).row2Image : Session.get('row2Image'),
			}
			
			// UPDATES THE DATABASE
			Meteor.call('cms.updatePestClinic', newCMS, (error) => {
		      if (error) {
		        alert(error.error);
		      } else {
		       	$('#cancelBTN').hide(); 
		       	$('#viewChangesBTN').show(); 
		      }
		    });
		});
		$('#progress1 #progress-bar1').css("width",
                function() {
                    return "0%";
                }
        )
  		$('#progress2 #progress-bar2').css("width",
                function() {
                    return "0%";
                }
        )
        $('#progress3 #progress-bar3').css("width",
                function() {
                    return "0%";
                }
        )
	},

	'click #cancelBTN': function(event){
		event.preventDefault();
	},

	'click #viewChangesBTN': function(event){
		event.preventDefault();
		FlowRouter.go("/pests-clinic");
	}
});