// Methods related to CMS

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { CMS } from './cms.js';

Meteor.methods({
  'cms.updatePestLib'(bannerText, bannerSubText, searchlabel, pestType, pestNumbers) {
    check(bannerText, String);
    check(bannerSubText, String);
    check(searchlabel, String);
    //check(pestType, Object);
    check(pestNumbers, Number);

    CMS.update( {info: "finalLib"}, 
    	{ $set: 
    		{ 
          bannerHeadText : bannerText,
          bannerSubText : bannerSubText,
    			searchLabelText: searchlabel,
		    	viewPestType: pestType,
		    	pestsPerPage: pestNumbers 
		    } 
	    }
	);
  },
});