// Methods related to CMS

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { CMS } from './cms.js';

Meteor.methods({
  'cms.updatePestLib'( newCMS ) {
    check(newCMS.bannerPosition, String);
    check(newCMS.bannerText, String);
    check(newCMS.bannerSubText, String);
    check(newCMS.searchlabel, String);
    check(newCMS.pestNumbers, Number);
    check(newCMS.diseaseNumbers, Number);

    CMS.update( {info: "finalLib"}, 
    	{ $set: 
    		{ 
          bannerContentPosition: newCMS.bannerPosition,
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

  'cms.updatePestMonitor'( newCMS ) {
    check(newCMS.bannerPosition, String);
    check(newCMS.bannerText, String);
    check(newCMS.bannerSubText, String);

    CMS.update( {info: "finalMonitor"}, 
      { $set: 
        { 
          bannerContentPosition: newCMS.bannerPosition,
          bannerHeadText : newCMS.bannerText,
          bannerSubText : newCMS.bannerSubText
        } 
      }
  );
  },

  'cms.updatePestId'( newCMS ) {
    check(newCMS.bannerPosition, String);
    check(newCMS.bannerText, String);
    check(newCMS.bannerSubText, String);

    CMS.update( {info: "finalId"}, 
      { $set: 
        { 
          bannerContentPosition: newCMS.bannerPosition,
          bannerHeadText : newCMS.bannerText,
          bannerSubText : newCMS.bannerSubText
        } 
      }
    );
  },

  'cms.updatePestClinic'( newCMS ) {
    check(newCMS.bannerPosition, String);
    check(newCMS.bannerText, String);
    check(newCMS.bannerSubText, String);
    check(newCMS.row1HeadText, String);
    check(newCMS.row2HeadText, String);
    check(newCMS.row2SubText, String);


    CMS.update( {info: "finalClinic"}, 
      { $set: 
        { 
          bannerContentPosition: newCMS.bannerPosition,
          bannerHeadText : newCMS.bannerText,
          bannerSubText : newCMS.bannerSubText,
          row1HeadText: newCMS.row1HeadText,
          row2HeadText: newCMS.row2HeadText,
          row2SubText:  newCMS.row2SubText
        } 
      }
    );
  },

});