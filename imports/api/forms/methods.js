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

});

// Meteor.methods({
//   'Forms.addForm'( newForm ) {
//     //STEP1
//     check(newForm.farmLocation, String);
//     check(newForm.sourceOfPlant, String);
//     check(newForm.areaPlanted, String);
//     check(newForm.cropStage, String);
//     check(newForm.cropVariety, String);
//     //STEP2
//     check(newForm.typeOfPest, String);
//     check(newForm.descOfSymptoms, String);
//     check(newForm.distributionOfSymptoms, String);
//     check(newForm.symptomObservationTime, String);
//     //STEP3
//     check(newForm.chemicalRate, String);
//     check(newForm.weatherCondition, String);
//     check(newForm.dayObservedChem, String);
//     check(newForm.dayObservedWeather, String);

//     Forms.insert(
//         { 
//             farmLocation: newForm.farmLocation,
//             sourceOfPlant: newForm.sourceOfPlant,
//             areaPlanted: newForm.areaPlanted,
//             cropStage: newForm.cropStage,
//             cropVariety: newForm.cropVariety,
//             typeOfPest: newForm.typeOfPest,
//             descOfSymptoms: newForm.descOfSymptoms,
//             distributionOfSymptoms: newForm.distributionOfSymptoms,
//             symptomObservationTime: newForm.symptomObservationTime,
//             chemicalRate: newForm.chemicalRate,
//             weatherCondition: newForm.weatherCondition,
//             dayObservedChem: newForm.dayObservedChem,
//             dayObservedWeather: newForm.dayObservedWeather
//         } 
//     );
//   },

// });