// Methods related to Assistance

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { advanceAssistance } from './advance-assistance.js';

Meteor.methods({

  'advanceAssistance.addAdvanceAssistance'( newAdvanceAssistance ){
    check( newAdvanceAssistance.user, String);
    check( newAdvanceAssistance.date, String);
    check( newAdvanceAssistance.email, String);
    check( newAdvanceAssistance.location, String);
    check( newAdvanceAssistance.source, String);
    check( newAdvanceAssistance.area, String);
    check( newAdvanceAssistance.cropStage, String);
    check( newAdvanceAssistance.variety, String);
    check( newAdvanceAssistance.pesttype, String);
    check( newAdvanceAssistance.symptoms, String);
    check( newAdvanceAssistance.parts, String);
    check( newAdvanceAssistance.distribution, String);
    check( newAdvanceAssistance.damage, String);

      advanceAssistance.insert(
        { 
          user: newAdvanceAssistance.user,
          date: newAdvanceAssistance.date,
          email: newAdvanceAssistance.email,
          
          location: newAdvanceAssistance.location,
          source: newAdvanceAssistance.source, 
          area: newAdvanceAssistance.area,
          cropStage: newAdvanceAssistance.cropStage,
          variety: newAdvanceAssistance.variety,      

          pesttype : newAdvanceAssistance.pesttype,
          symptoms : newAdvanceAssistance.symptoms,
          parts : newAdvanceAssistance.parts,
          distribution : newAdvanceAssistance.distribution,
          damage : newAdvanceAssistance.damage,
          
          fertilizer: newAdvanceAssistance.fertilizer,
          insecticide: newAdvanceAssistance.insecticide,
          fungicide: newAdvanceAssistance.fungicide, 
          herbicide: newAdvanceAssistance.herbicide,
          weather: newAdvanceAssistance.weather,
          chemapplied: newAdvanceAssistance.chemapplied,
          weatherobserved: newAdvanceAssistance.weatherobserved
        } 
    );
  },
});