// Client entry point, imports all client code

Meteor._reload.onMigrate(function() {
  return [false];
});

import '/imports/startup/client';
import '/imports/startup/both';
