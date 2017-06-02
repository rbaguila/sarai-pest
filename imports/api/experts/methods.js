// Methods related to CMS

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Experts } from './experts.js';

Meteor.methods({
  'experts.updateProfile'( newProfile ) {
    check(newProfile.image, String);
    check(newProfile.name, String);
    check(newProfile.position, String);
    check(newProfile.company, String);

    Experts.update( {_id: newProfile.id},
      { $set:
        {
          profile: newProfile.image,
          name: newProfile.name,
          position: newProfile.position,
          company: newProfile.company
        }
      }
    );
  },

  'experts.removeExpert'(id){
    check(id, String);

    Experts.remove( { _id: id } );
  },

});