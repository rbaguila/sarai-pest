// Methods related to PESTS

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Pests } from './pests.js';

Meteor.methods({
  'pests.addPest'(pestName, engName, sciName, image, treatment, classification, order, plantAffected, description, symptoms, stageThreatening, partDestroyed, effect, stageAffected, filName, filTreatment, filClassification, filPlantAffected, filDescription, filSymptoms, filStageThreatening, filPartDestroyed, filEffect, filStageAffected) {
    check(pestName, String);
    check(engName, String);
    check(sciName, String);
    check(image, String);
    // ENGLISH
    check(treatment, String);
    check(classification, String);
    check(order, String);
    check(plantAffected, String);
    check(description, String);
    check(symptoms, String);
    check(stageThreatening, String);
    check(partDestroyed, String);
    check(effect, String);
    check(stageAffected, String);
    // FILIPINO
    check(filName, String);
    check(filTreatment, String);
    check(filClassification, String);
    check(filPlantAffected, String);
    check(filDescription, String);
    check(filSymptoms, String);
    check(filStageThreatening, String);
    check(filPartDestroyed, String);
    check(filEffect, String);
    check(filStageAffected, String);

    Pests.insert(
  		{ 
        type: 'Pest',
        fil_stage_plant_affected: filStageAffected,
        fil_effect: filEffect,
        fil_part_destroyed: filPartDestroyed,
        fil_stage_threatening: filStageThreatening,
        fil_symptoms: filSymptoms,
        fil_description: filDescription,
        fil_plant_affected: filPlantAffected,
        fil_classification: filClassification,
        fil_treatment: filTreatment,
        fil_name: filName,
        stage_plant_affected: stageAffected,
        effect: effect,
        part_destroyed: partDestroyed,
        stage_threatening: stageThreatening,
        symptoms: symptoms,
        description: description,
        plant_affected: plantAffected,
        order: order,
        classification: classification,
        treatment: treatment,
        sci_name: sciName,
        eng_name: engName,
        name: pestName,
        image: image
	    } 
	);
  },

  'pests.editPest'(id, pestName, engName, sciName, image, treatment, classification, order, plantAffected, description, symptoms, stageThreatening, partDestroyed, effect, stageAffected, filName, filTreatment, filClassification, filPlantAffected, filDescription, filSymptoms, filStageThreatening, filPartDestroyed, filEffect, filStageAffected) {
    check(id, String);
    check(pestName, String);
    check(engName, String);
    check(sciName, String);
    check(image, String);
    // ENGLISH
    check(treatment, String);
    check(classification, String);
    check(order, String);
    check(plantAffected, String);
    check(description, String);
    check(symptoms, String);
    check(stageThreatening, String);
    check(partDestroyed, String);
    check(effect, String);
    check(stageAffected, String);
    // FILIPINO
    check(filName, String);
    check(filTreatment, String);
    check(filClassification, String);
    check(filPlantAffected, String);
    check(filDescription, String);
    check(filSymptoms, String);
    check(filStageThreatening, String);
    check(filPartDestroyed, String);
    check(filEffect, String);
    check(filStageAffected, String);
 
    Pests.update( {_id: id},
        {
            $set:
            { 
                fil_stage_plant_affected: filStageAffected,
                fil_effect: filEffect,
                fil_part_destroyed: filPartDestroyed,
                fil_stage_threatening: filStageThreatening,
                fil_symptoms: filSymptoms,
                fil_description: filDescription,
                fil_plant_affected: filPlantAffected,
                fil_classification: filClassification,
                fil_treatment: filTreatment,
                fil_name: filName,
                stage_plant_affected: stageAffected,
                effect: effect,
                part_destroyed: partDestroyed,
                stage_threatening: stageThreatening,
                symptoms: symptoms,
                description: description,
                plant_affected: plantAffected,
                order: order,
                classification: classification,
                treatment: treatment,
                sci_name: sciName,
                eng_name: engName,
                name: pestName,
                image: image
            } 
        }
    );
  },

  'pests.removePest'(id){
    check(id, String);

    Pests.remove( { _id: id } );
  },
});