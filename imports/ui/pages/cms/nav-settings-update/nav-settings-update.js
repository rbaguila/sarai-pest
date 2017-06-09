import { Links } from '/imports/api/links/links.js';
import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './nav-settings-update.html';
import '../components/cms-sidenav.html';


Template.navSettingsUpdate.onCreated(function () {
    Meteor.subscribe('links.all');
    Meteor.subscribe('cms.all');
});

Template.navSettingsUpdate.onRendered(function() {
    $('#viewChangesBTN').hide();
    $('[data-toggle="tooltip"]').tooltip();
});

var count = 0;
Template.navSettingsUpdate.helpers({
    getCMS(){
        return CMS.findOne({info: "finalNav"});
    },
    links: function() {
    return Links.find({});
    },
    equals: function(v1, v2) {
        return (v1 === v2);
    }
});

Template.navSettingsUpdate.events({
    'click #addBTN': function(event){
        FlowRouter.go('/insert-link');
    },
});

Template.button.events({
    'click .edit1': function(event, template) {
        console.log("EDIT: " + this.id);
        FlowRouter.go('/edit-link/' + this.id);
    },  

    'click .remove1': function(event, template) {
        console.log("DELETE: " + this.id);
        Session.set('id', this.id);
        $('#deleteLink').modal('show');
    },

    'click .confirmDelete' : function(event) {
        $('#deleteLink').modal('hide');
        Meteor.call('links.removeLink', Session.get('id'), (error) => {
          if (error) {
            alert(error.error);
          } else {
            $('#pestDeleted').modal('show');
            event.preventDefault(); 
          }
        });
    },
});