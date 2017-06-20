import { Link } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './insert-link.html';
import '../../components/library-cms-navbar.html';
import '../../components/cms-sidenav.html';

Template.insertLink.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.insertLink.onRendered(function () {
     $('[data-toggle="tooltip"]').tooltip(); 
});

Template.insertLink.events({
    'click .back-button': function(event) {
        FlowRouter.go('/admin/nav-settings');
    },  
});

Template.insertLink.events({
    
    'click #saveBTN1': function(event){
        
        // GET THE VALUES
        var newLink = {
            title : $("#title").val(),
            url : $("#url").val(),
        }
        
        // INSERT THE PEST TO THE DATABASE
        Meteor.call('links.insert', $("#title").val(),$("#url").val(), (error) => {
          if (error) {
            alert(error.error);
          } else {
            $('.insertSuccess').modal('show');
            
          }
        });
    },

    'click #cancelBTN1': function(event){
        event.preventDefault();
        FlowRouter.go('/admin/nav-settings');
    },

});

