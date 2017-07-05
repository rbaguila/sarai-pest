// Methods related to forms

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Forms } from './forms.js';

Meteor.methods({
  'Forms.addForm'(newForm) {
    // check(newForm.date, String);
    // check(newForm.email, String);
    // check(newForm.location, String);
    // check(newForm.area, String);
    // check(newForm.source, String);
    // check(newForm.variety, String);
    // check(newForm.cstage, String);
    // check(newForm.pesttype, String);
    // check(newForm.symptoms, String);
    // check(newForm.parts, String);
    // check(newForm.distribution, String);
    // check(newForm.damage, String);

    Forms.insert(
      {
        date: newForm.date,
        email: newForm.email,
        
        location: newForm.location,
        source: newForm.source,
        area: newForm.area,
        variety: newForm.variety,
        cropStage : newForm.cropStage,
        
        pesttype : newForm.pesttype,
        symptoms : newForm.symptoms,
        parts : newForm.parts,
        distribution : newForm.distribution,
        damage : newForm.damage,
        
        fertilizer: newForm.fertilizer,
        insecticide: newForm.insecticide,
        herbicide: newForm.herbicide,
        fungicide: newForm.fungicide, 
        weather: newForm.weather,
        chemapplied: newForm.chemapplied,
        weatherobserved: newForm.weatherobserved
        
      });
  },

});