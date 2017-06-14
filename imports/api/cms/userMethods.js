import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  deleteUser: function (targetUserId, group) {
    var loggedInUser = Meteor.user()

    if (!loggedInUser ||
        !Roles.userIsInRole(loggedInUser,
                            ['admin'], group)) {
      throw new Meteor.Error(403, "Access denied")
    }

    // remove permissions for target group
    Roles.setUserRoles(targetUserId, [], group)

    // do other actions required when a user is removed...
  }

  updateRoles: function (targetUserId, roles, group) {
    var loggedInUser = Meteor.user()

    if (!loggedInUser ||
        !Roles.userIsInRole(loggedInUser,
                            ['admin'], group)) {
      throw new Meteor.Error(403, "Access denied")
    }

    Roles.setUserRoles(targetUserId, roles, group)
  }
})