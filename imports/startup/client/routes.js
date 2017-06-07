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
import '../../ui/pages/cms/users-update/users-update.js';
import '../../ui/pages/cms/pest-clinic-update/experts/experts-cms.js';
import '../../ui/pages/cms/pest-clinic-update/assistance/assistance-cms.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

// Set up all routes in the app
FlowRouter.route('/pests', {
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

FlowRouter.route('/admin/pests-id-update', {
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

FlowRouter.route('/admin/diseases-update', {
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

FlowRouter.route('/admin/home-update', {
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

FlowRouter.route('/admin/pests-lib-update', {
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

FlowRouter.route('/admin/insert-pest', {
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

FlowRouter.route('/admin/edit-pest', {
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

FlowRouter.route("/admin/edit-pest/:_id", {
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

FlowRouter.route('/admin/pests-clinic-update', {
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

FlowRouter.route('/admin/edit-expert', {
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

FlowRouter.route('/admin/edit-assistance', {
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

FlowRouter.route('/admin/users-update', {
  name: 'App.users-update',
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            BlazeLayout.render("App_body", {main: "App_home"})
            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          } else {
            BlazeLayout.render("App_body", {main: "usersUpdate"})
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
