// Methods related to CMS

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { CMS } from './cms.js';

Meteor.methods({
  'cms.updatePestLib'( newCMS ) {
    check(newCMS.bannerText, String);
    check(newCMS.bannerSubText, String);
    check(newCMS.searchlabel, String);
    check(newCMS.pestNumbers, Number);
    check(newCMS.diseaseNumbers, Number);

    CMS.update( {info: "finalLib"}, 
    	{ $set: 
    		{ 
          bannerHeadText : newCMS.bannerText,
          bannerSubText : newCMS.bannerSubText,
    			searchLabelText: newCMS.searchlabel,
		    	viewPestType: newCMS.pestType,
		    	pestsPerPage: newCMS.pestNumbers,
          diseasesPerPage: newCMS.diseaseNumbers 
		    } 
	    }
	);
  },
});