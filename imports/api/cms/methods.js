// Methods related to CMS

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { CMS } from './cms.js';

Meteor.methods({
  'cms.updatePestLib'(searchlabel, pestType, pestNumbers) {
    check(searchlabel, String);
    //check(pestType, Object);
    check(pestNumbers, Number);

    CMS.update( {info: "finalLib"}, 
    	{ $set: 
    		{ 
    			searchLabelText: searchlabel,
		    	viewPestType: pestType,
		    	pestsPerPage: pestNumbers 
		    } 
	    }
	);
  },
});