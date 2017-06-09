// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';

Meteor.methods({
  'links.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Links.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },

  'links.editLink'(newLink){
    check(url, String);
    check(title, String);

    Links.update({_id: newLink.id},
        {
            $set:
            {
                title: newLink.title,
                url: newLink.url 
            }   
        }
    );
  },

  'links.removeLink'(id){
    check(id, String);

    Links.remove( { _id: id } );
  },
});
