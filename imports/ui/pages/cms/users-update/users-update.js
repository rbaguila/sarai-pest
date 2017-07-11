import { Meteor } from 'meteor/meteor';
import { CMS } from '/imports/api/cms/cms.js';
import './users-update.html';
import '../components/clinic-cms-navbar.html';
import '../components/cms-sidenav.html';

var category,userid;
Template.usersUpdate.onCreated(function () {
	Meteor.subscribe('usersList');
});

Template.usersUpdate.helpers({
	getUsers: function() {
		return Meteor.users.find();
	},
    equals: function(v1, v2) {
        return (v1 === v2);
    },
    currUserId: function(){
        return Meteor.userId();
    }
});

Template.userbutton.events({

	'click .edit': function(event, template) {
		userid = this.id;
		$('#editRole').modal('show');
	},
	'change #userRole': function (event, template) {
        category = $(event.currentTarget).val();
        console.log(userid + "category : " + category);
    },
	'click .confirmEdit' : function(event) {
		$('#editRole').modal('hide');
		Meteor.call('updateAccountRole', userid, category, (error) => {
	      if (error) {
	        alert(error.error);
	      } else {
            $('#roleUpdated').modal('show');
        	event.preventDefault();	
	      }
		});
	},
    'click .remove': function(event, template) {
        console.log("DELETE: " + this.id);
        Session.set('id', this.id);
        userid2 = this.id;
        $('#deleteUser').modal('show');
       
    },

    'click .confirmDelete' : function(event) {
        $('#deleteUser').modal('hide');
        Meteor.call('deleteUser',{_id:userid2}, (error) => {
          if (error) {
            alert(error.error);
          } else {
            $('#userDeleted').modal('show');
            event.preventDefault(); 
          }
        });
    },

});


