import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/library/library.js';
import '../../ui/pages/cms/pest-lib-update.js';
import '../../ui/pages/pestId/pest-id.js'

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

// FlowRouter.route("/pests-lib-update", {
//   name: 'App.pests-lib-update',
//   action() {
//     BlazeLayout.render("App_body", {main: "pestLibUpdate"})
//   }
// });

FlowRouter.route('/pests-id', {
  name: 'App.pests-id',
  action(){
    BlazeLayout.render('App_body', { main: "pestId" });
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

FlowRouter.route("/entity/:_id", {
  name: 'App.library',
  action() {
    BlazeLayout.render("App_body", {main: "entityPage"})
  }
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
