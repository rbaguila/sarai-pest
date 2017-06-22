import { Experts } from '/imports/api/experts/experts.js';
import { Meteor } from 'meteor/meteor';
import './experts-cms.html';
import '../../components/clinic-cms-navbar.html';
import '../../components/cms-sidenav.html';

Template.expertUpdate.onCreated(function() {
	Meteor.subscribe('usersList');
	Meteor.subscribe('experts.all');
});

Template.expertUpdate.helpers({
	experts(){
		return Experts.find().fetch();
	},
});

var file;
var files = [];
Template.expertUpdate.events({
	'click .profile': function(event){
		Session.set('newProfile', Experts.findOne({_id: this._id}));
		// $('#imageUploadPanel').html('');
		// $('#imageUploadPanel').html('{{> upload_bootstrap multiple=false callbacks=profileImageFile }} <br/>');
		$('#name').val(this.name);
		$('#position').val(this.position);
		$('#company').val(this.company);
	},

	'submit form': function(e, t){
        e.preventDefault();
		file = $('#userimage')[0].files[0];
		files.push(file);
    }, 

	'click #editBTN': function(event){
		var imgURL;

		Cloudinary.upload(file, function(err, res) {
          console.log("Upload Error: " + err);
          console.log("Upload Result: " + res);
          imgURL = res.public_id;
          Session.set('profileImage', 'http://res.cloudinary.com/project-sarai/image/upload/' + imgURL);

			if( Session.get('newProfile') == undefined ){
				$('#nothingToEdit').modal('show');
			} else{
				var expert = Session.get('newProfile');
				// GET THE VALUES
				var newProfile = {
					id: expert._id,
					image: (Session.get('profileImage') == undefined) ? expert.profile : Session.get('profileImage'),
					name: $('#name').val(),
					position: $('#position').val(),
					company: $('#company').val(),
				}
				
				if(newProfile.name == "" || newProfile.position == "" || newProfile.company == ""){
					$('#invalidEdit').modal('show');
				} else{
					// UPDATES THE DATABASE
					Meteor.call('experts.updateProfile', newProfile, (error) => {
				      if (error) {
				        alert(error.error);
				      } else {
				      	$('#expertEdited').modal('show');
				      }
				    });
				}
			}
		});
	},

	'click #deleteBTN': function(event){
		$('#deleteExpert').modal('show');
	},

	'click #confirmDelete' : function(event) {
		$('#deleteExpert').modal('hide');
		Meteor.call('experts.removeExpert', Session.get('newProfile')._id , (error) => {
	      if (error) {
	        alert(error.error);
	      } else {
        	$('#expertDeleted').modal('show');
        	event.preventDefault();	
	      }
		});
	},
});