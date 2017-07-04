// Methods related to forms

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Forms } from './forms.js';

Meteor.methods({
  'Forms.insert'(date, email, floc, area, crop, src, variety, cstage, vtype, pesttype, symptoms, parts, distribution, damage, fertilizer, insecticide, herbicide, fungicide, weather, chemapplied, weatherobserved) {
    check(date, String);
    check(email, String);
    check(floc, String);
    check(area, String);
    check(crop, String);
    check(src, String);
    check(variety, String);
    check(cstage, String);
    check(vtype, String);
    check(pesttype, String);
    check(symptoms, String);
    check(parts, String);
    check(distribution, String);
    check(damage, String);
    check(fertilizer, String);
    check(insecticide, String);
    check(herbicide, String);
    check(fungicide, String);
    check(weather, String);
    check(chemapplied, String);
    check(weatherobserved, String);


    Forms.insert({
      date: date,
      email: email,
      location: floc,
      area: area,
      crop: crop,
      source: src,
      variety: variety,
      cropstage : cstage,
      varietytype: vtype,     
      pesttype : pesttype,
      symptoms : symptoms,
      parts : parts,
      distribution : distribution,
      damage : damage,
      fertilizer: fertilizer,
      insecticide: insecticide,
      herbicide: herbicide,
      fungicide: fungicide, 
      weather: weather,
      chemapplied: chemapplied,
      weatherobserved: weatherobserved
      
    });
  },

  'forms.removeForm'(id){
    check(id, String);

    Forms.remove( { _id: id } );
  },

});
