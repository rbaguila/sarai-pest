import { Experts } from '/imports/api/experts/experts.js';
import { Meteor } from 'meteor/meteor';
import './experts-cms.html';
import '../../components/clinic-cms-navbar.html';
import '../../components/cms-sidenav.html';

Template.expertUpdate.onCreated(function() {
	Meteor.subscribe('experts.all');
});

Template.expertUpdate.helpers({
	experts(){
		return Experts.find().fetch();
	},

	profileImageFile(){
		return {
			finished: function(index, fileInfo, context) {
				Session.set('profileImage', '/upload/' + fileInfo.name);
			}
		}
	},
});

Template.expertUpdate.events({
	'click .profile': function(event){
		Session.set('newProfile', Experts.findOne({_id: this._id}));
		// $('.imageUpload').remove();
		// $('.imagePanel').append('<div class="imageUpload"> {{> upload_bootstrap multiple=false callbacks=profileImageFile }} </div>');
		$('#name').val(this.name);
		$('#position').val(this.position);
		$('#company').val(this.company);
	},

	'click #editBTN': function(event){
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