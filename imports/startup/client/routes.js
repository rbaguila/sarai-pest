import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Router } from 'meteor/iron:router';
import { Logs } from '/imports/api/logs/logs.js';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/library/library.js';
import '../../ui/pages/pestId/pest-id.js';
import '../../ui/pages/clinic/pest-clinic.js';
import '../../ui/pages/clinic/request-assistance/request-assistance.js';
import '../../ui/pages/clinic/request-assistance/advance-request-assistance/advance-request-assistance.js';
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

import '../../ui/pages/cms/pest-clinic-update/charts/charts.js';
import '../../ui/pages/cms/pest-clinic-update/form-result/form-result.js';

import '../../ui/pages/cms/nav-settings-update/nav-settings-update.js';
import '../../ui/pages/cms/nav-settings-update/edit-link-entity/edit-link-entity.js';
import '../../ui/pages/cms/nav-settings-update/insert-link/insert-link.js';

import '../../ui/pages/clinic/request-assistance/past-requested-assistance/past-requested-assistance.js';

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
FlowRouter.route('/advance-request-assistance', {
  name: 'App.advance-request-assistance',
  action(){
    BlazeLayout.render('App_body', { main: "Advance_Request_Assistance" });
  }
});
FlowRouter.route('/past-requested-assistance', {
  name: 'App.past-requested-assistance',
  /*action(){
    BlazeLayout.render('App_body', { main: "Past_Assistance" });
  }*/
  subscriptions: function(params, queryParams) {
      this.register('getLogs', Meteor.subscribe('logs.all'));
  },
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getLogs");
        if(Meteor.user()){
          if (ready && Logs.find({username: Meteor.user().username}).count() > 0) {
            BlazeLayout.render("App_body", {main: "Past_Assistance"})
          }else if(ready){
            BlazeLayout.render("App_body", {main: "Request_Assistance"})
            alert("User has no past requested assistance.")
            FlowRouter.redirect('/request-assistance');
          }
        }else if(ready){
          BlazeLayout.render("App_body", {main: "Request_Assistance"})
            alert("User is not  logged in.")
            FlowRouter.redirect('/request-assistance');
        }
      });
    }
});
FlowRouter.route('/diseases', {
  name: 'App.diseases',
  action(){
    BlazeLayout.render('App_body', { main: "App_diseases" });
  }
});

FlowRouter.route('/admin/identification', {
  name: 'App.pests-id-update',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  },  
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getUser");
          if (ready && Roles.userIsInRole(Meteor.user(), ['Id Admin'])) {
            BlazeLayout.render("App_body", {main: "pestIdUpdate"})
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          }
      });
    }
});

FlowRouter.route('/admin/diseases', {
  name: 'App.diseases-update',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  },  
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getUser");
          if (ready && Roles.userIsInRole(Meteor.user(), ['Diseases Admin'])) {
            BlazeLayout.render("App_body", {main: "diseasesUpdate"})
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          }
      });
    }
});

FlowRouter.route('/admin/home', {
    name: 'App.home-update',
    subscriptions: function(params, queryParams) {
        this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
    },
    action(params, queryParams) {
        Tracker.autorun(function() {
            var ready = FlowRouter.subsReady("getUser");
            console.log(ready);
                if(ready && Roles.userIsInRole(Meteor.userId(), ['Admin'])){
                    BlazeLayout.render("App_body", {main: "homeUpdate"})
               console.log("mico");
                }
                else if(ready){
                    BlazeLayout.render("App_body", {main: "App_home"})
                    //alert("User is not allowed to access the page.")
                    FlowRouter.redirect('/');
                }
        });
    }
});


FlowRouter.route('/admin/library', {
  name: 'App.pests-lib-update',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  }, 
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getUser");
          if (ready && Roles.userIsInRole(Meteor.user(), ['Pests Admin'])) {
            BlazeLayout.render("App_body", {main: "pestLibUpdate"})
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          }
      });
    }
});

FlowRouter.route('/admin/nav-settings', {
  name: 'App.nav-settings-update',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  }, 
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getUser");
          if (ready && Roles.userIsInRole(Meteor.user(), ['Admin'])) {
            BlazeLayout.render("App_body", {main: "navSettingsUpdate"})
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          }
      });
    }
});

FlowRouter.route('/admin/insert-link', {
  name: 'App.insert-link',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  }, 
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getUser");
          if (ready && Roles.userIsInRole(Meteor.user(), ['Admin'])) {
            BlazeLayout.render("App_body", {main: "insertLink"})
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          }
      });
    }
});

FlowRouter.route("/admin/edit-link/:_id", {
  name: 'App.edit-link',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  }, 
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getUser");
          if (ready && Roles.userIsInRole(Meteor.user(), ['Admin'])) {
            BlazeLayout.render("App_body", {main: "editLinkEntity"})
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          }
      });
    }
});


FlowRouter.route('/admin/insert-pest', {
  name: 'App.insert-pest',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  }, 
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getUser");
          if (ready && Roles.userIsInRole(Meteor.user(), ['Pests Admin'])) {
            BlazeLayout.render("App_body", {main: "insertPest"})
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          }
      });
    }
});

FlowRouter.route('/admin/edit-pest', {
  name: 'App.edit-pest',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  }, 
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getUser");
          if (ready && Roles.userIsInRole(Meteor.user(), ['Pests Admin'])) {
            BlazeLayout.render("App_body", {main: "editPest"})
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          }
      });
    }
});

FlowRouter.route("/admin/edit-pest/:_id", {
  name: 'App.library',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  }, 
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getUser");
          if (ready && Roles.userIsInRole(Meteor.user(), ['Pests Admin'])) {
            BlazeLayout.render("App_body", {main: "editPestEntity"})
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          }
      });
    }
});

FlowRouter.route('/admin/pests-clinic', {
  name: 'App.pests-clinic-update',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  }, 
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getUser");
          if (ready && Roles.userIsInRole(Meteor.user(), ['Clinic Admin'])) {
            BlazeLayout.render("App_body", {main: "pestClinicUpdate"})
          }else if(ready && Roles.userIsInRole(Meteor.user(), ['Pest Expert'])) {
            BlazeLayout.render("App_body", {main: "assistanceUpdate"})            
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          }
      });
    }
});

FlowRouter.route('/admin/experts', {
  name: 'App.edit-expert',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  }, 
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getUser");
          if (ready && Roles.userIsInRole(Meteor.user(), ['Clinic Admin'])) {
            BlazeLayout.render("App_body", {main: "expertUpdate"})
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          }
      });
    }
});

FlowRouter.route('/admin/assistance', {
  name: 'App.edit-assistance',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  }, 
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getUser");
          if(ready && Roles.userIsInRole(Meteor.user(), ['Pest Expert'])) {
            BlazeLayout.render("App_body", {main: "assistanceUpdate"});          
          }else if (ready && Roles.userIsInRole(Meteor.user(), ['Clinic Admin'])) {
            BlazeLayout.render("App_body", {main: "assistanceUpdate"})
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          }
      });
    }
});

FlowRouter.route('/admin/users', {
  name: 'App.users-update',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  }, 
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getUser");
          if (ready && Roles.userIsInRole(Meteor.user(), ['Admin'])) {
            BlazeLayout.render("App_body", {main: "usersUpdate"})
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
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

FlowRouter.route('/admin/activity-log', {
  name: 'App.activity-log',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  },
  action: function(params) {
      Tracker.autorun(function() {
      var ready = FlowRouter.subsReady("getUser");
          if (ready && Roles.userIsInRole(Meteor.user(), ['Clinic Admin'])) {
            BlazeLayout.render("App_body", {main: "Create_chart"})
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          }
      });
    }
});
FlowRouter.route('/admin/form-result', {
  name: 'App.form-result',
  subscriptions: function(params, queryParams) {
      this.register('getUser', Meteor.subscribe('allUsers', Meteor.userId()));
  },
  action: function(params) {
      Tracker.autorun(function() {
          var ready = FlowRouter.subsReady("getUser");
          if(ready && Roles.userIsInRole(Meteor.user(), ['Pest Expert'])) {
            BlazeLayout.render("App_body", {main: "formResult"});          
          }else if (ready && Roles.userIsInRole(Meteor.user(), ['Clinic Admin'])) {
            BlazeLayout.render("App_body", {main: "formResult"});
          }else if(ready){
            BlazeLayout.render("App_body", {main: "App_home"})
//            alert("User is not allowed to access the page.")
            FlowRouter.redirect('/');
          }
      });
    }
});
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
