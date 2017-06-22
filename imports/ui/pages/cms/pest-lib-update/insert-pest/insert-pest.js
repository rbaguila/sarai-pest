import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { Meteor } from 'meteor/meteor';
import './insert-pest.html';
import '../../components/library-cms-navbar.html';
import '../../components/cms-sidenav.html';
import '../../components/upload.html';

var imageURL = "";

Template.insertPest.onCreated(function () {
	Meteor.subscribe('usersList');
	Meteor.subscribe('plant_problem.all');
});

Template.insertPest.onRendered(function () {
	 $('[data-toggle="tooltip"]').tooltip(); 
});

Template.insertPest.helpers({
	pestImageFile(){
		return {
			finished: function(index, fileInfo, context) {
				Session.set('pestImageFile', '/upload/' + fileInfo.name);
			}
		}
	}
});

Template.insertPest.events({
	
	'click #saveBTN': function(event){
		
		var str = $("#description").val() + $("#symptoms").val();

		if( !(str.length <=0) ) var keywords = extractKeyword(str);
		else var keywords = [];

		// GET THE VALUES
		var newPest = {
			pestName : $("#pestName").val(),
			engName : $("#engName").val(),
			sciName : $("#sciName").val(),
			image: (Session.get('pestImageFile') == undefined) ? "/img/no-image-available.jpg" : Session.get('pestImageFile'),
			keywords : keywords,
			// for ENGLISH
			treatment : $("#treatment").val(),
			classification : $("#classification").val(),
			order : $("#order").val(),
			plantAffected : $("#plantAffected").val()==""? "Uncategorized" : $("#plantAffected").val(),
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
		
		// INSERT THE PEST TO THE DATABASE
		Meteor.call('pests.addPest', newPest, (error) => {
	      if (error) {
	        alert(error.error);
	      } else {
	        $('.insertSuccess').modal('show');
	      }
	    });
	},

	'click #cancelBTN': function(event){
		event.preventDefault();
		FlowRouter.go('/admin/edit-pest');
	},

	'click .back-button': function(event) {
		FlowRouter.go('/admin/edit-pest');
	},	
});

function extractKeyword(words){

	var str = words.toLowerCase(); // converting all words to lowercase (CASE-FOLDING)
	str = str.replace(/[0-9]/g, ''); // remove the numbers
	var words = str.match(/\b(\w+)\b/g);

	words = removeStopwords(words);
	words = removeRedundancy(words);
 	
	/********************* STEMMING *********************/ 
	for(var i=0; i<words.length; i++){
 		words[i] = stemmer(words[i]);
 	}

 	words = removeStopwords(words);
 	words = removeRedundancy(words);

 	/********************* TF-IDF *********************/
 	var wordCount = [];
	for (var i=0; i<words.length; i++) {
	   wordCount[words[i]] = (wordCount[words[i]] || 0) + 1;
	}
	
	var tf = [];
	for(var i=0; i<words.length; i++){
		tf[i] = wordCount[words[i]] / words.length;
	}

	var idf = [];
	var listOfPests = Plant_Problem.find({ 'type': 'Pest' }).fetch();

	for(var i=0; i<words.length; i++){
		var count = 0;
		for(var j=0; j<listOfPests.length; j++){
			var str = listOfPests[j].symptoms + listOfPests[j].description;
			str = str.toLowerCase();
			if(str.includes(words[i])) count++;
		}
		idf[i] = Math.log(listOfPests.length / count);
	}

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
	console.log(rank);

	var keywords = [];
	for(var i=0; i<rank.length; i++){
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

 	var stopwords = "a about above after again against all am an and any are aren't as at be because been before being below between both but by can't cannot could couldn't did didn't do does doesn't doing don't down during each few for from further had hadn't has hasn't have haven't having he he'd he'll he's her here here's hers herself him himself his how how's i i'd i'll i'm i've if in into is isn't it it's its itself let's mm cm me more most mustn't my myself no nor not of off on once only or other ought our ours ourselves out over own same shan't she she'd she'll she's should shouldn't so some such than that that's the their theirs them themselves then there there's these they they'd they'll they're they've this those through to too under until up very was wasn't we we'd we'll we're we've were weren't what what's when when's where where's which while who who's whom why why's with won't would wouldn't you you'd you'll you're you've your yours yourself yourselves a b c d e f g h j k l m n o p q r s t u v w x y z";
 	stopwords = stopwords.split(" ");

 	var wordsIncluded = [];
 	var count = 0;

 	for(var i=0; i<words.length; i++){
 		if( !stopwords.includes(words[i]) ){
 			wordsIncluded[count++] = words[i];
 		}
 	}

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

	return wordsIncluded;
}