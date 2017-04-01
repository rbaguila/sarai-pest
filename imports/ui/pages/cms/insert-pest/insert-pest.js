import { Pests } from '/imports/api/pests/pests.js';
import { Meteor } from 'meteor/meteor';
import './insert-pest.html';
//import '/js/Porter-Stemmer/PorterStemmer1980.js';

Template.insertPestCMS.events({
	'click #saveBTN': function(event){
		event.preventDefault();
		
		// GET THE VALUES
		var pestName = $("#pestName").val();
		var engName = $("#engName").val();
		var sciName = $("#sciName").val();
		var image = "sample image here";

		// for ENGLISH
		var treatment = $("#treatment").val();
		var classification = $("#classification").val();
		var order = $("#order").val();
		var plantAffected = $("#plantAffected").val();
		var description = $("#description").val();
		var symptoms = $("#symptoms").val();
		var stageThreatening = $("#stageThreatening").val();
		var partDestroyed = $("#partDestroyed").val();
		var effect = $("#effect").val();
		var stageAffected = $("#stageAffected").val();

		// for FILIPINO
		var filName = $("#filName").val();
		var filTreatment = $("#filTreatment").val();
		var filClassification = $("#filClassification").val();
		var filPlantAffected = $("#filPlantAffected").val();
		var filDescription = $("#filDescription").val();
		var filSymptoms = $("#filSymptoms").val();
		var filStageThreatening = $("#filStageThreatening").val();
		var filPartDestroyed = $("#filPartDestroyed").val();
		var filEffect = $("#filEffect").val();
		var filStageAffected = $("#filStageAffected").val();

		console.log(pestName);
		console.log(engName);
		console.log(sciName);
		console.log(image);

		console.log("\n" + treatment);
		console.log(classification);
		console.log(order);
		console.log(plantAffected);
		console.log(description);
		console.log(symptoms);
		console.log(stageThreatening);
		console.log(partDestroyed);
		console.log(effect);
		console.log(stageAffected);

		console.log("\n" + filName);
		console.log(filTreatment);
		console.log(filClassification);
		console.log(filPlantAffected);
		console.log(filDescription);
		console.log(filSymptoms);
		console.log(filStageThreatening);
		console.log(filPartDestroyed);
		console.log(filEffect);
		console.log(filStageAffected);

		var str = symptoms + description;
		extractKeyword(str);
		
		
		// // UPDATES THE DATABASE
		// Meteor.call('pests.addPest', pestName, engName, sciName, image, treatment, classification, order, plantAffected, description, symptoms, stageThreatening, partDestroyed, effect, stageAffected, filName, filTreatment, filClassification, filPlantAffected, filDescription, filSymptoms, filStageThreatening, filPartDestroyed, filEffect, filStageAffected, (error) => {
	 //      if (error) {
	 //        alert(error.error);
	 //      } else {
	 //        alert("Pest successfully added!");
	 //      }
	 //    });
	},

	'click #cancelBTN': function(event){
		event.preventDefault();
	},
});

function extractKeyword(words){

	var str = words.toLowerCase(); // converting all words to lowercase (CASE-FOLDING)
	str = str.replace(/[0-9]/g, ''); // remove the numbers
	var words = str.match(/\b(\w+)\b/g);
	console.log("WORDS LENGTH: " + words.length);

	/********* STOP WORDS REMOVAL *********/
	/* REFERENCE: 	http://www.lextek.com/manuals/onix/stopwords1.html
					https://sites.google.com/site/kevinbouge/stopwords-lists
					http://www.ranks.nl/stopwords
	*/
	//var txtfile = require('stopwords.txt');
	// var data = Assets.getText('stopwords.txt');
 	// var lines = data.split('\n'); //split on new lines
 	// console.log(lines);

 	var stopwords = "a about above after again against all am an and any are aren't as at be because been before being below between both but by can't cannot could couldn't did didn't do does doesn't doing don't down during each few for from further had hadn't has hasn't have haven't having he he'd he'll he's her here here's hers herself him himself his how how's i i'd i'll i'm i've if in into is isn't it it's its itself let's me more most mustn't my myself no nor not of off on once only or other ought our ours ourselves out over own same shan't she she'd she'll she's should shouldn't so some such than that that's the their theirs them themselves then there there's these they they'd they'll they're they've this those through to too under until up very was wasn't we we'd we'll we're we've were weren't what what's when when's where where's which while who who's whom why why's with won't would wouldn't you you'd you'll you're you've your yours yourself yourselves";
 	stopwords = stopwords.split(" ");

 	var words2 = [];
 	var count = 0;

 	for(var i=0; i<words.length; i++){
 		if( !stopwords.includes(words[i]) ){
 			words2[count++] = words[i];
 		}
 	}

 	console.log("REMOVED STOP WORDS!");
 	console.log("WORDS LENGTH: " + words2.length);

	/********* STEMMING *********/ 
	// for(var i=0; i<words2.length; i++){
 // 		words2[i] = stemmer(words2[i]);
 // 	}
 // 	console.log("PERFORMED STEMMING!");
 // 	console.log(words2);
}