import { Link } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './edit-link-entity.html';
import '../../components/library-cms-navbar.html';
import '../../components/cms-sidenav.html';

Template.editLinkEntity.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.editLinkEntity.onRendered(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

Template.editLinkEntity.events({
    'click #saveBTN2': function(event){

        event.preventDefault();

        var id = FlowRouter.current().params._id;
        console.log("EDIT: " + id + $("#title").val() + $("#url").val())

        // GET THE VALUES
        var editedLink = {
            id : id,
            title : $("#title").val(),
            url : $("#url").val(),
        }

        // UPDATES THE DATABASE
        Meteor.call('links.editLink', editedLink, (error) => {
          if (error) {
            alert(error.error);
          } else {
            console.log('!!!!');
            $('.editSuccess').modal('show');
          }
        });
    },

    'click #cancelBTN2': function(event){
        event.preventDefault();
        FlowRouter.go('/nav-settings-update');
    },
});

Template.editLinkEntity.events({
    'click .back-button': function(event) {
        FlowRouter.go('/nav-settings-update');
    },  
});