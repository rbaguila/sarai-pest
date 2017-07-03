// Methods related to forms

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Forms } from './forms.js';

Meteor.methods({
  'Forms.addForm'( newForm ) {
    //STEP1
    check(newForm.farmLocation, String);
    check(newForm.sourceOfPlant, String);
    check(newForm.areaPlanted, String);
    check(newForm.cropStage, String);
    check(newForm.cropVariety, String);
    //STEP2
    check(newForm.typeOfPest, String);
    check(newForm.descOfSymptoms, String);
    check(newForm.distributionOfSymptoms, String);
    check(newForm.symptomObservationTime, String);
    //STEP3
    check(newForm.chemicalRate, String);
    check(newForm.weatherCondition, String);
    check(newForm.dayObservedChem, String);
    check(newForm.dayObservedWeather, String);

    Forms.insert(
        { 
            farmLocation: newForm.farmLocation,
            sourceOfPlant: newForm.sourceOfPlant,
            areaPlanted: newForm.areaPlanted,
            cropStage: newForm.cropStage,
            cropVariety: newForm.cropVariety,
            typeOfPest: newForm.typeOfPest,
            descOfSymptoms: newForm.descOfSymptoms,
            distributionOfSymptoms: newForm.distributionOfSymptoms,
            symptomObservationTime: newForm.symptomObservationTime,
            chemicalRate: newForm.chemicalRate,
            weatherCondition: newForm.weatherCondition,
            dayObservedChem: newForm.dayObservedChem,
            dayObservedWeather: newForm.dayObservedWeather
        } 
    );
  },

});