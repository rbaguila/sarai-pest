// Methods related to Assistance

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { advanceAssistance } from './advance-assistance.js';

Meteor.methods({

  'advanceAssistance.addAdvanceAssistance'( newAdvanceAssistance ){
    check( newAdvanceAssistance.user, String);
    check( newAdvanceAssistance.date, String);
    check( newAdvanceAssistance.email, String);
    check( newAdvanceAssistance.name, String);
    check( newAdvanceAssistance.location, String);
    check( newAdvanceAssistance.area, String);
    check( newAdvanceAssistance.source, String);
    check( newAdvanceAssistance.cropStage, String);
    check( newAdvanceAssistance.variety, String);
    check( newAdvanceAssistance.pesttype, String);
    check( newAdvanceAssistance.symptoms, String);
    check( newAdvanceAssistance.parts, String);
    check( newAdvanceAssistance.distribution, String);
    check( newAdvanceAssistance.damage, String);
    check( newAdvanceAssistance.affectedArea, String);
    check( newAdvanceAssistance.lengthDays, Number);
    check( newAdvanceAssistance.lengthWeeks, Number);
    check( newAdvanceAssistance.lengthMonths, Number);
    check( newAdvanceAssistance.fertilizer, String);
    check( newAdvanceAssistance.insecticide, String);
    check( newAdvanceAssistance.fungicide, String);
    check( newAdvanceAssistance.herbicide, String);
    check( newAdvanceAssistance.weather, String);
    check( newAdvanceAssistance.chemapplied, String);
    check( newAdvanceAssistance.weatherobserved, String);

      advanceAssistance.insert(
        { 
          user: newAdvanceAssistance.user,
          date: newAdvanceAssistance.date,
          email: newAdvanceAssistance.email,
          name: newAdvanceAssistance.name,
          location: newAdvanceAssistance.location,
          area: newAdvanceAssistance.area,
          source: newAdvanceAssistance.source, 
          cropStage: newAdvanceAssistance.cropStage,
          variety: newAdvanceAssistance.variety,      

          pesttype : newAdvanceAssistance.pesttype,
          symptoms : newAdvanceAssistance.symptoms,
          parts : newAdvanceAssistance.parts,
          distribution : newAdvanceAssistance.distribution,
          damage : newAdvanceAssistance.damage,
          affectedArea : newAdvanceAssistance.affectedArea,
          lengthDays : newAdvanceAssistance.lengthDays,
          lengthWeeks : newAdvanceAssistance.lengthWeeks,
          lengthMonths : newAdvanceAssistance.lengthMonths,
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