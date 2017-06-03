// Methods related to PESTS

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Plant_Problem } from './plant_problem.js';

Meteor.methods({
  'pests.addPest'( newPest ) {
    check(newPest.pestName, String);
    check(newPest.engName, String);
    check(newPest.sciName, String);
    check(newPest.image, String);
    // ENGLISH
    check(newPest.treatment, String);
    check(newPest.classification, String);
    check(newPest.order, String);
    check(newPest.plantAffected, String);
    check(newPest.description, String);
    check(newPest.symptoms, String);
    check(newPest.stageThreatening, String);
    check(newPest.partDestroyed, String);
    check(newPest.effect, String);
    check(newPest.stageAffected, String);
    // FILIPINO
    check(newPest.filName, String);
    check(newPest.filTreatment, String);
    check(newPest.filClassification, String);
    check(newPest.filPlantAffected, String);
    check(newPest.filDescription, String);
    check(newPest.filSymptoms, String);
    check(newPest.filStageThreatening, String);
    check(newPest.filPartDestroyed, String);
    check(newPest.filEffect, String);
    check(newPest.filStageAffected, String);

    Plant_Problem.insert(
  		{ 
            type: 'Pest',
            keywords: newPest.keywords,
            fil_stage_plant_affected: newPest.filStageAffected,
            fil_effect: newPest.filEffect,
            fil_part_destroyed: newPest.filPartDestroyed,
            fil_stage_threatening: newPest.filStageThreatening,
            fil_symptoms: newPest.filSymptoms,
            fil_description: newPest.filDescription,
            fil_plant_affected: newPest.filPlantAffected,
            fil_classification: newPest.filClassification,
            fil_treatment: newPest.filTreatment,
            fil_name: newPest.filName,
            stage_plant_affected: newPest.stageAffected,
            effect: newPest.effect,
            part_destroyed: newPest.partDestroyed,
            stage_threatening: newPest.stageThreatening,
            symptoms: newPest.symptoms,
            description: newPest.description,
            plant_affected: newPest.plantAffected,
            order: newPest.order,
            classification: newPest.classification,
            treatment: newPest.treatment,
            sci_name: newPest.sciName,
            eng_name: newPest.engName,
            name: newPest.pestName,
            image: newPest.image
	    } 
	);
  },

  'pests.editPest'( editPest ) {
    check(editPest.id, String);
    check(editPest.pestName, String);
    check(editPest.engName, String);
    check(editPest.sciName, String);
    check(editPest.image, String);
    // ENGLISH
    check(editPest.treatment, String);
    check(editPest.classification, String);
    check(editPest.order, String);
    check(editPest.plantAffected, String);
    check(editPest.description, String);
    check(editPest.symptoms, String);
    check(editPest.stageThreatening, String);
    check(editPest.partDestroyed, String);
    check(editPest.effect, String);
    check(editPest.stageAffected, String);
    // FILIPINO
    check(editPest.filName, String);
    check(editPest.filTreatment, String);
    check(editPest.filClassification, String);
    check(editPest.filPlantAffected, String);
    check(editPest.filDescription, String);
    check(editPest.filSymptoms, String);
    check(editPest.filStageThreatening, String);
    check(editPest.filPartDestroyed, String);
    check(editPest.filEffect, String);
    check(editPest.filStageAffected, String);
 
    Plant_Problem.update( {_id: editPest.id},
        {
            $set:
            { 
                keywords: editPest.keywords,
                fil_stage_plant_affected: editPest.filStageAffected,
                fil_effect: editPest.filEffect,
                fil_part_destroyed: editPest.filPartDestroyed,
                fil_stage_threatening: editPest.filStageThreatening,
                fil_symptoms: editPest.filSymptoms,
                fil_description: editPest.filDescription,
                fil_plant_affected: editPest.filPlantAffected,
                fil_classification: editPest.filClassification,
                fil_treatment: editPest.filTreatment,
                fil_name: editPest.filName,
                stage_plant_affected: editPest.stageAffected,
                effect: editPest.effect,
                part_destroyed: editPest.partDestroyed,
                stage_threatening: editPest.stageThreatening,
                symptoms: editPest.symptoms,
                description: editPest.description,
                plant_affected: editPest.plantAffected,
                order: editPest.order,
                classification: editPest.classification,
                treatment: editPest.treatment,
                sci_name: editPest.sciName,
                eng_name: editPest.engName,
                name: editPest.pestName,
                image: editPest.image
            } 
        }
    );
  },

  'pests.removePest'(id){
    check(id, String);

    Plant_Problem.remove( { _id: id } );
  },
});