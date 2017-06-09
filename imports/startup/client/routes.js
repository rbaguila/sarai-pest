import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/library/library.js';
import '../../ui/pages/pestId/pest-id.js';
import '../../ui/pages/clinic/pest-clinic.js';
import '../../ui/pages/clinic/request-assistance/request-assistance.js';
import '../../ui/pages/diseases/diseases.js';
import '../../ui/pages/diseases/entity-page/disease-entity-page.js';

import '../../ui/pages/cms/pest-id-update/pest-id-update.js';
import '../../ui/pages/cms/diseases-update/diseases-update.js';
import '../../ui/pages/cms/home-update/home-update.js';
import '../../ui/pages/cms/pest-lib-update/pest-lib-update.js';
import '../../ui/pages/cms/pest-lib-update/insert-pest/insert-pest.js';
import '../../ui/pages/cms/pest-lib-update/edit-pest/edit-pest.js';
import '../../ui/pages/cms/pest-lib-update/edit-pest-entity/edit-pest-entity.js';
import '../../ui/pages/cms/pest-clinic-update/pest-clinic-update.js';
import '../../ui/pages/cms/pest-clinic-update/experts/experts-cms.js';
import '../../ui/pages/cms/pest-clinic-update/assistance/assistance-cms.js';

import '../../ui/pages/cms/nav-settings-update/nav-settings-update.js';

import '../../ui/pages/cms/nav-settings-update/edit-link-entity/edit-link-entity.js';
import '../../ui/pages/cms/nav-settings-update/insert-link/insert-link.js';


// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

// Set up all routes in the app
FlowRouter.route('/library', {
  name: 'App.library',
  action() {
    BlazeLayout.render('App_body', { main: 'App_library' });
  },
});

FlowRouter.route('/pests-id', {
  name: 'App.pests-id',
  action(){
    BlazeLayout.render('App_body', { main: "pestId" });
  }
});

FlowRouter.route('/pests-clinic', {
  name: 'App.pests-clinic',
  action(){
    BlazeLayout.render('App_body', { main: "App_clinic" });
  }
});

FlowRouter.route('/request-assistance', {
  name: 'App.request-assistance',
  action(){
    BlazeLayout.render('App_body', { main: "Request_Assistance" });
  }
});

FlowRouter.route('/diseases', {
  name: 'App.diseases',
  action(){
    BlazeLayout.render('App_body', { main: "App_diseases" });
  }
});

FlowRouter.route('/pests-id-update', {
  name: 'App.pests-id-update',
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            BlazeLayout.render("App_body", {main: "App_home"})
            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          } else {
            BlazeLayout.render("App_body", {main: "pestIdUpdate"})
          }
      });
    }
});

FlowRouter.route('/diseases-update', {
  name: 'App.diseases-update',
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            BlazeLayout.render("App_body", {main: "App_home"})
            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          } else {
            BlazeLayout.render("App_body", {main: "diseasesUpdate"})
          }
      });
    }
});

FlowRouter.route('/home-update', {
  name: 'App.home-update',
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            BlazeLayout.render("App_body", {main: "App_home"})
            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          } else {
            BlazeLayout.render("App_body", {main: "homeUpdate"})
          }
      });
    }
});

FlowRouter.route('/pests-lib-update', {
  name: 'App.pests-lib-update',
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            BlazeLayout.render("App_body", {main: "App_home"})
            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          } else {
            BlazeLayout.render("App_body", {main: "pestLibUpdate"})
          }
      });
    }
});

FlowRouter.route('/nav-settings-update', {
  name: 'App.nav-settings-update',
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            BlazeLayout.render("App_body", {main: "App_home"})
            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          } else {
            BlazeLayout.render("App_body", {main: "navSettingsUpdate"})
          }
      });
    }
});

FlowRouter.route('/insert-link', {
  name: 'App.insert-link',
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            BlazeLayout.render("App_body", {main: "App_home"})
            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          } else {
            BlazeLayout.render("App_body", {main: "insertLink"})
          }
      });
    }
});

FlowRouter.route("/edit-link/:_id", {
  name: 'App.edit-link',
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            BlazeLayout.render("App_body", {main: "App_home"})
            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          } else {
            BlazeLayout.render("App_body", {main: "editLinkEntity"})
          }
      });
    }
});

FlowRouter.route('/insert-pest', {
  name: 'App.insert-pest',
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            BlazeLayout.render("App_body", {main: "App_home"})
            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          } else {
            BlazeLayout.render("App_body", {main: "insertPest"})
          }
      });
    }
});

FlowRouter.route('/edit-pest', {
  name: 'App.edit-pest',
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            BlazeLayout.render("App_body", {main: "App_home"})
            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          } else {
            BlazeLayout.render("App_body", {main: "editPest"})
          }
      });
    }
});

FlowRouter.route("/edit-pest/:_id", {
  name: 'App.library',
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            BlazeLayout.render("App_body", {main: "App_home"})
            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          } else {
            BlazeLayout.render("App_body", {main: "editPestEntity"})
          }
      });
    }
});

FlowRouter.route('/pests-clinic-update', {
  name: 'App.pests-clinic-update',
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            BlazeLayout.render("App_body", {main: "App_home"})
            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          } else {
            BlazeLayout.render("App_body", {main: "pestClinicUpdate"})
          }
      });
    }
});

FlowRouter.route('/edit-expert', {
  name: 'App.edit-expert',
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            BlazeLayout.render("App_body", {main: "App_home"})
            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          } else {
            BlazeLayout.render("App_body", {main: "expertUpdate"})
          }
      });
    }
});

FlowRouter.route('/edit-assistance', {
  name: 'App.edit-assistance',
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            BlazeLayout.render("App_body", {main: "App_home"})
            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          } else {
            BlazeLayout.render("App_body", {main: "assistanceUpdate"})
          }
      });
    }
});

FlowRouter.route("/pest-entity/:_id", {
  name: 'App.library',
  action() {
    BlazeLayout.render("App_body", {main: "entityPage"})
  }
});

FlowRouter.route("/disease-entity/:_id", {
  name: 'App.diseases',
  action() {
    BlazeLayout.render("App_body", {main: "diseaseEntityPage"})
  }
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
