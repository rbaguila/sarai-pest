import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { Meteor } from 'meteor/meteor';
import './edit-pest-entity.html';
import '../../components/cms-navbar.html';
import '../../components/cms-sidenav.html';

Template.editPestEntity.onCreated(function () {
  Meteor.subscribe('plant_problem.all');
});

Template.editPestEntity.onRendered(function () {
	 $('[data-toggle="tooltip"]').tooltip(); 
	 Session.set('keywords', Plant_Problem.findOne({_id: FlowRouter.current().params._id}).keywords);
	 console.log(Session.get('keywords'));
});

Template.editPestEntity.helpers({
	pest(){
		return Plant_Problem.findOne({_id: FlowRouter.current().params._id});
	},
	returnKeywords(){
		var keywords = []
		var storedKeywords = Session.get('keywords');
		for(var i=0; i<10; i++){
			keywords[i] = storedKeywords[i];
		}
		return keywords;
	}
});

Template.editPestEntity.events({
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
			keywords : Session.get('keywords'),
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

Template.editPestEntity.events({
	'click .back-button': function(event) {
		FlowRouter.go('/edit-pest');
	},	

	'click #generateKeyword': function(event) {
		var str = $("#description").val() + $("#symptoms").val();
		var newKeywords = extractKeyword(str);
		var keywords = Session.get('keywords');

		for(var i=0; i<newKeywords.length; i++){
			if( !keywords.includes(newKeywords[i]) ) 
				keywords.push(newKeywords[i]);
		}
		Session.set('keywords', keywords);
	},	

	'click .addKeyword': function(event) {
		var str = $("#newKeyword").val();
		var keywords = Session.get('keywords');
		var found = false;

		if(keywords.includes(str)) found = true;
		if(!found) keywords.push(str);

		Session.set('keywords', keywords);
		$('#newKeyword').val('');
	},
});

// KEYWORDS PAGINATION
Template.keywordsPaginate.onCreated(function () {
	var keywordsPerPage = 10;
    this.pagination = new Meteor.Pagination(Plant_Problem, {
    	perPage: keywordsPerPage,
    	filters: {'_id': FlowRouter.current().params._id}
    });
});

Template.keywordsPaginate.helpers({
    isReady: function () {
        return Template.instance().pagination.ready();
    },
    templatePagination: function () {
        return Template.instance().pagination;
    },
    documents: function () {
    	//Template.instance().pagination.fields('keywords');
        return Template.instance().pagination.getPage();
    },
    // optional helper used to return a callback that should be executed before changing the page
    clickEvent: function() {
        return function(event, templateInstance, clickedPage) {
            event.preventDefault();
        };
    }
});

Template.keywordButton.events({
	'click .remove': function(event, template) {
		var count = 0;
		var keyword = Session.get('keywords');
		var newKeywords = [];

		for(var i=0; i<keyword.length; i++){
			if( !(keyword[i] == this.name) ) newKeywords[count++] = keyword[i];
		}

		Session.set('keywords', newKeywords);
	},
});

function extractKeyword(words){

	var str = words.toLowerCase(); // converting all words to lowercase (CASE-FOLDING)
	str = str.replace(/[0-9]/g, ''); // remove the numbers
	var words = str.match(/\b(\w+)\b/g);
	console.log("DESCRIPTION + SYMPTOMS: " + words.length);

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

	var keywords = [];
	for(var i=0; i<rank.length; i++){
		keywords[i] = rank[i].word;
	}
	console.log("KEYWORDS LENGTH: " + keywords.length);

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

 	var stopwords = "a about above after again against all am an and any are aren't as at be because been before being below between both but by can't cannot could couldn't did didn't do does doesn't doing don't down during each few for from further had hadn't has hasn't have haven't having he he'd he'll he's her here here's hers herself him himself his how how's i i'd i'll i'm i've if in into is isn't it it's its itself let's mm cm me more most mustn't my myself no nor not of off on once only or other ought our ours ourselves out over own same shan't she she'd she'll she's should shouldn't so some such than that that's the their theirs them themselves then there there's these they they'd they'll they're they've this us those through to too under until up very was wasn't we we'd we'll we're we've were weren't what what's when when's where where's which while who who's whom why why's with won't would wouldn't you you'd you'll you're you've your yours yourself yourselves a b c d e f g h j k l m n o p q r s t u v w x y z";
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