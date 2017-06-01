// Methods related to CMS

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { CMS } from './cms.js';

Meteor.methods({
  'cms.updatePestLib'( newCMS ) {
    check(newCMS.bannerImage, String);
    check(newCMS.bannerPosition, String);
    check(newCMS.bannerText, String);
    check(newCMS.bannerSubText, String);
    check(newCMS.searchlabel, String);
    check(newCMS.pestNumbers, Number);
    check(newCMS.diseaseNumbers, Number);

    CMS.update( {info: "finalLib"}, 
    	{ $set: 
    		{ 
          bannerImage: newCMS.bannerImage,
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
    check(newCMS.bannerImage, String);
    check(newCMS.bannerPosition, String);
    check(newCMS.bannerText, String);
    check(newCMS.bannerSubText, String);

    CMS.update( {info: "finalMonitor"}, 
      { $set: 
        { 
          bannerImage: newCMS.bannerImage,
          bannerContentPosition: newCMS.bannerPosition,
          bannerHeadText : newCMS.bannerText,
          bannerSubText : newCMS.bannerSubText
        } 
      }
    );
  },

  'cms.updatePestId'( newCMS ) {
    check(newCMS.bannerImage, String);
    check(newCMS.bannerPosition, String);
    check(newCMS.bannerText, String);
    check(newCMS.bannerSubText, String);

    CMS.update( {info: "finalId"}, 
      { $set: 
        { 
          bannerImage: newCMS.bannerImage,
          bannerContentPosition: newCMS.bannerPosition,
          bannerHeadText : newCMS.bannerText,
          bannerSubText : newCMS.bannerSubText
        } 
      }
    );
  },

  'cms.updatePestClinic'( newCMS ) {
    check(newCMS.bannerImage, String);
    check(newCMS.bannerPosition, String);
    check(newCMS.bannerText, String);
    check(newCMS.bannerSubText, String);
    check(newCMS.row1HeadText, String);
    check(newCMS.row1Image, String);
    check(newCMS.row2HeadText, String);
    check(newCMS.row2SubText, String);
    check(newCMS.row2Image, String);

    CMS.update( {info: "finalClinic"}, 
      { $set: 
        { 
          bannerImage: newCMS.bannerImage,
          bannerContentPosition: newCMS.bannerPosition,
          bannerHeadText: newCMS.bannerText,
          bannerSubText: newCMS.bannerSubText,
          row1HeadText: newCMS.row1HeadText,
          row1Image: newCMS.row1Image,
          row2HeadText: newCMS.row2HeadText,
          row2SubText:  newCMS.row2SubText,
          row2Image: newCMS.row2Image
        } 
      }
    );
  },

  'cms.updateHome'( newCMS ) {
    check(newCMS.bannerImage, String);
    check(newCMS.bannerPosition, String);
    check(newCMS.bannerText, String);
    check(newCMS.bannerSubText, String);

    CMS.update( {info: "finalHome"}, 
      { $set: 
        { 
          bannerImage: newCMS.bannerImage,
          bannerContentPosition: newCMS.bannerPosition,
          bannerHeadText : newCMS.bannerText,
          bannerSubText : newCMS.bannerSubText
        } 
      }
    );
  },

});