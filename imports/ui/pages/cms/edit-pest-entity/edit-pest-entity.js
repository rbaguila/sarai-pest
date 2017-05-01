import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { Meteor } from 'meteor/meteor';
import './edit-pest-entity.html';
import '../components/cms-navbar.html';

Template.entityPage.onCreated(function () {
  Meteor.subscribe('plant_problem.all');
});

Template.pestEntity.onRendered(function () {
	 $('[data-toggle="tooltip"]').tooltip(); 
});

Template.pestEntity.helpers({
	pest(){
		return Plant_Problem.findOne({_id: FlowRouter.current().params._id});
	},
});

Template.pestEntity.events({
	'click #saveBTN': function(event){
		event.preventDefault();

		var id = FlowRouter.current().params._id;

		if($("#pestImage").val() == undefined){
			var imageURL = Plant_Problem.findOne({ _id: id }).image;
		} else{
			var imageURL = $("#pestImage").val();	
		} 

		// GET THE VALUES
		var editPest = {
			id : id,
			pestName : $("#pestName").val(),
			engName : $("#engName").val(),
			sciName : $("#sciName").val(),
			image : imageURL,
			// for ENGLISH
			treatment : $("#treatment").val(),
			classification : $("#classification").val(),
			order : $("#order").val(),
			plantAffected : $("#plantAffected").val(),
			description : $("#description").val(),
			symptoms : $("#symptoms").val(),
			stageThreatening : $("#stageThreatening").val(),
			partDestroyed : $("#partDestroyed").val(),
			effect : $("#effect").val(),
			stageAffected : $("#stageAffected").val(),
			// for FILIPINO
			filName : $("#filName").val(),
			filTreatment : $("#filTreatment").val(),
			filClassification : $("#filClassification").val(),
			filPlantAffected : $("#filPlantAffected").val(),
			filDescription : $("#filDescription").val(),
			filSymptoms : $("#filSymptoms").val(),
			filStageThreatening : $("#filStageThreatening").val(),
			filPartDestroyed : $("#filPartDestroyed").val(),
			filEffect : $("#filEffect").val(),
			filStageAffected : $("#filStageAffected").val(),
		}

		// UPDATES THE DATABASE
		Meteor.call('pests.editPest', editPest, (error) => {
	      if (error) {
	        alert(error.error);
	      } else {
	        $('.editSuccess').modal('show');
	      }
	    });
	},
});

Template.pestEntity.events({
	'click .back-button': function(event) {
		FlowRouter.go('/edit-pest');
	},	

	'click #generateKeyword': function(event) {
		var str = $("#description").val() + $("#symptoms").val();
		var keywords = extractKeyword(str);
		var id = FlowRouter.current().params._id;

		// UPDATES THE DATABASE
		Meteor.call('pests.editKeyword', id, keywords, (error) => {
	      if (error) {
	        alert(error.error);
	      } else {
			FlowRouter.go('/edit-pest/' + id);
	      }
	    });
	},	
});

var name = "";
Template.keywordButton.events({
	'click .remove': function(event, template) {
		$('#deleteKeyword').modal('show');
		name = this.id;
	},

	'click .confirmDelete' : function(event) {
		$('#deleteKeyword').modal('hide');
		var count = 0;
		var keyword = Plant_Problem.findOne({_id: FlowRouter.current().params._id}).keywords;
		var newKeywords = [];
		for(var i=0; i<keyword.length; i++){
			if( !(keyword[i] == name) ) newKeywords[count++] = keyword[i]
		}

		var id = FlowRouter.current().params._id;

		// UPDATES THE DATABASE
		Meteor.call('pests.editKeyword', id, newKeywords, (error) => {
	      if (error) {
	        alert(error.error);
	      } else {
			FlowRouter.go('/edit-pest/' + id);
	      }
	    });
	},
});

function extractKeyword(words){

	var str = words.toLowerCase(); // converting all words to lowercase (CASE-FOLDING)
	str = str.replace(/[0-9]/g, ''); // remove the numbers
	var words = str.match(/\b(\w+)\b/g);
	console.log("WORDS LENGTH: " + words.length);

	words = removeStopwords(words);
	words = removeRedundancy(words);
 	
	/********************* STEMMING *********************/ 
	for(var i=0; i<words.length; i++){
 		words[i] = stemmer(words[i]);
 	}
 	console.log("\tPERFORMED STEMMING!");


 	/********************* TF-IDF *********************/
 	// count the occurences of words in the array
 	// apply stopwords and stemming in idf !!!!!!!!!!!!!!!
 	var wordCount = [];
	for (var i=0; i<words.length; i++) {
	   wordCount[words[i]] = (wordCount[words[i]] || 0) + 1;
	}
	
	var tf = [];
	for(var i=0; i<words.length; i++){
		tf[i] = wordCount[words[i]] / words.length;
	}
	console.log("TF LENGTH: " + tf.length);

	var idf = [];
	var listOfPests = Plant_Problem.find({ 'type': 'Pest' }).fetch();

	for(var i=0; i<words.length; i++){
		var count = 0;
		for(var j=0; j<listOfPests.length; j++){
			var str = listOfPests[j].symptoms + listOfPests[j].description;
			str = str.toLowerCase();
			//str = removeStopwords(str);
			// for(var k=0; k<str.length; k++){
			// 	str[k] = stemmer(str[k]);
			// }
			if(str.includes(words[i])) count++;
		}
		idf[i] = Math.log(listOfPests.length / count);
	}
	console.log("IDF LENGTH: " + idf.length);
	//console.log(idf);

	// TF-IDF
	var rank = [{}];
	for(var i=0; i<words.length; i++){
		rank[i] = {
			"rank" : tf[i] * idf[i],
			"word" : words[i]
		};
	}
	rank.sort(function(a, b) {
	    return parseFloat(a.rank) - parseFloat(b.rank);
	});
	console.log("RANK LENGTH: " + rank.length);
	console.log(rank);

	var keywords = [];
	var numOfKeywords = 6;
	for(var i=0; i<numOfKeywords; i++){
		keywords[i] = rank[i].word;
	}

	return keywords;
}

function removeStopwords(words){
	/********* STOP WORDS REMOVAL *********/
	/* REFERENCE: 	http://www.lextek.com/manuals/onix/stopwords1.html
					https://sites.google.com/site/kevinbouge/stopwords-lists
					http://www.ranks.nl/stopwords
	*/
	//var txtfile = require('stopwords.txt');
	// var data = Assets.getText('stopwords.txt');
 	// var lines = data.split('\n'); //split on new lines
 	// console.log(lines);

 	var stopwords = "a about above after again against all am an and any are aren't as at be because been before being below between both but by can't cannot could couldn't did didn't do does doesn't doing don't down during each few for from further had hadn't has hasn't have haven't having he he'd he'll he's her here here's hers herself him himself his how how's i i'd i'll i'm i've if in into is isn't it it's its itself let's mm cm me more most mustn't my myself no nor not of off on once only or other ought our ours ourselves out over own same shan't she she'd she'll she's should shouldn't so some such than that that's the their theirs them themselves then there there's these they they'd they'll they're they've this those through to too under until up very was wasn't we we'd we'll we're we've were weren't what what's when when's where where's which while who who's whom why why's with won't would wouldn't you you'd you'll you're you've your yours yourself yourselves";
 	stopwords = stopwords.split(" ");

 	var wordsIncluded = [];
 	var count = 0;

 	for(var i=0; i<words.length; i++){
 		if( !stopwords.includes(words[i]) ){
 			wordsIncluded[count++] = words[i];
 		}
 	}
 	console.log("WORDS LENGTH: " + wordsIncluded.length);
 	console.log("\tREMOVED STOP WORDS!");
 	return wordsIncluded;
}

function removeRedundancy(words){

	var wordsIncluded = [];
	var count = 0;

	for(var i=0; i<words.length; i++){
		if(wordsIncluded.indexOf(words[i]) < 0){
			wordsIncluded[count++] = words[i];
		}
	}

	console.log("WORDS LENGTH: " + wordsIncluded.length);
 	console.log("\tREMOVED REDUNDANCY!");
	return wordsIncluded;
}