import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './home-update.html';
import '../components/cms-sidenav.html';

Template.homeUpdate.onCreated(function () {
	Meteor.subscribe('users.all');
	Meteor.subscribe('cms.all');
});

Template.homeUpdate.onRendered(function() {
	$('#viewChangesBTN').hide();
});

Template.homeUpdate.helpers({
	getCMS(){
		return CMS.findOne({info: "finalHome"});
	},
	
	isSelected(value, position){
		return value == position;
	},
});

var file;
var files = [];
Template.homeUpdate.events({
	'submit form': function(e, t){
        e.preventDefault();
		file = $('#userimage')[0].files[0];
		files.push(file);
		$('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )		
    },

	'click #saveBTN': function(event){
		event.preventDefault();
		var imgURL;

		Cloudinary.upload(file, function(err, res) {
          console.log("Upload Error: " + err);
          console.log("Upload Result: " + res);
          imgURL = res.public_id;
          Session.set('bannerImage', 'http://res.cloudinary.com/project-sarai/image/upload/' + imgURL);		
		
		// GET THE VALUES
			var newCMS = {
				bannerImage: (Session.get('bannerImage') == undefined) ? CMS.findOne({info: "finalHome"}).bannerImage : Session.get('bannerImage'),
				bannerText : $("#bannerText").val(),
				bannerSubText : $("#bannerSubText").val()
			}
			
			// UPDATES THE DATABASE
			Meteor.call('cms.updateHome', newCMS, (error) => {
		      if (error) {
		        alert(error.error);
		      } else {
		       	$('#cancelBTN').hide(); 
		       	$('#viewChangesBTN').show(); 
		      }
		    });
		});
	},

	'click #cancelBTN': function(event){
		event.preventDefault();
	},

	'click #viewChangesBTN': function(event){
		event.preventDefault();
		FlowRouter.go("/");
	}
});