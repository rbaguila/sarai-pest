import { Plant_Problem, PestsIndex } from '/imports/api/plant_problem/plant_problem.js';
import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './pest-id.html';
import '../library/pest-library/pest-library.html'

var currentPests = "";
var currentType = "";
var cropAffected = "";
var classType = "";
Template.pestId.onCreated(function () {
	Meteor.subscribe('plant_problem.all');
	Meteor.subscribe('cms.all');
	/*this.templateDict = new ReactiveDict();
	this.templateDict.set('currentType', currentType);
	this.templateDict.set('cropAffected', cropAffected);
	this.templateDict.set('classType', classType);
	this.templateDict.set('showOBS', false);*/
	Session.set("showIPS", false);
	Session.set("currentType", currentType);
	Session.set("cropAffected", cropAffected);
	Session.set("classType", classType);
	Session.set("uploaded", false);
	Session.set("showOBS", false);

});

Template.pestId.onRendered(function() {
	Session.set("currentPage", "finalId"); // set the current page to change banner
	$('.jqDropZone').html("<img src='/img/drop-here.png' width='100%' height='295px'/>");
});

Template.pestId.helpers({

	pestsIndex(){
		return PestsIndex
	},

	searchAttributes() {
	    return {
	      placeholder: 'Search',
	      class: 'form-control'
	    };
  	},

  	equals: function(v1, v2) {
		return (v1 === v2);
	},

	getCMS(){
		return CMS.findOne({info:'finalLib'});
	},

	getType(){
		return Plant_Problem.find({})
	},

	setPageSessionsNew(type) {
		var typePerPage = 4;
		Session.set(type, 1);
		Session.set(type + " Count", type);
	},

	setPageSessions(type) {
		currentPest = type;
		var pestCount = Plant_Problem.find({'type': type}).count();
		var pestsPerPage = 4;
		Session.set(currentPest, 1);

		pestCount = pestCount%pestsPerPage == 0? Math.floor(pestCount/pestsPerPage) : Math.floor(pestCount/pestsPerPage+1);
		Session.set(currentPest + " Count", pestCount);
	},

	getCurrentPestType(){
		return currentPest;
	},

	displayPest(type){
		var pestsPerPage = 4;
		return Plant_Problem.find({'type': type}, {sort: {name: 1}, skip:(Session.get(currentPest)-1)*pestsPerPage, limit:pestsPerPage});
	},

	setPagination(type){
		var count = Session.get(type + " Count");
		var pages = [];
		for(var i = 1; i<=count; i++)
			pages.push({num: i});
		return pages;
	},

	isCurrentPage(page){
		return Session.equals(currentPest, page);
	},

	displayInitial(type){
		var limitPerPage = 4;
		/*currentType = Template.instance().templateDict.get("currentType");
		cropAffected = Template.instance().templateDict.get("cropAffected");
		classType = Template.instance().templateDict.get("classType");
		if(currentType == "Pest" && (classType == "Fungal" || classType == "Bacterial" || classType == "Viral")){
			classType = Template.instance().templateDict.set("classType", "");
		}
		else if(currentType == "Disease" && (classType == "Fly-like" || classType == "Caterpillar-like" || classType == "Maggot" || classType == "Beetle-like" || classType == "Moth-like" || classType == "Two or one unit body")){
			classType = Template.instance().templateDict.set("classType", "");
		}

		if(currentType != "" && cropAffected == "" && classType == ""){
			return Plant_Problem.find({'type': currentType}, {sort: {name: 1}});
		}
		else if(cropAffected == "" && classType != ""){
			return Plant_Problem.find({'type': currentType, 'classification': classType}, {sort: {name: 1}});
		}
		else if(currentType == "" && cropAffected != "" && classType == ""){
			return Plant_Problem.find({'plant_affected': cropAffected}, {sort: {name: 1}});
		}
		else if(currentType != "" && cropAffected != "" && classType == ""){
			return Plant_Problem.find({'type': currentType, 'plant_affected': cropAffected}, {sort: {name: 1}});
		}
		else{
			return Plant_Problem.find({'type': currentType, 'plant_affected': cropAffected, 'classification': classType}, {sort: {name: 1}});
		}*/

		currentType = Session.get("currentType");
		cropAffected = Session.get("cropAffected");
		classType = Session.get("classType");
		if(currentType == "Pest" && (classType == "Fungal" || classType == "Bacterial" || classType == "Viral")){
			classType = Session.set("classType", "");
		}
		else if(currentType == "Disease" && (classType == "Fly-like" || classType == "Caterpillar-like" || classType == "Maggot" || classType == "Beetle-like" || classType == "Moth-like" || classType == "Two or one unit body")){
			classType = Session.set("classType", "");
		}
		if(currentType != "" && cropAffected == "" && classType == ""){
			return Plant_Problem.find({'type': currentType}, {sort: {name: 1}});
		}
		else if(cropAffected == "" && classType != ""){
			return Plant_Problem.find({'type': currentType, 'classification': classType}, {sort: {name: 1}});
		}
		else if(currentType == "" && cropAffected != "" && classType == ""){
			return Plant_Problem.find({'plant_affected': cropAffected}, {sort: {name: 1}});
		}
		else if(currentType != "" && cropAffected != "" && classType == ""){
			return Plant_Problem.find({'type': currentType, 'plant_affected': cropAffected}, {sort: {name: 1}});
		}
		else{
			return Plant_Problem.find({'type': currentType, 'plant_affected': cropAffected, 'classification': classType}, {sort: {name: 1}});
		}
	},

	showIPS() {
		/*return Template.instance().templateDict.get("showIPS");*/

		return Session.get("showIPS");
	},

	showOBS() {
		/*return Template.instance().templateDict.get("showOBS");*/

		return Session.get("showOBS");
	},

	myCallbacks: function() {
	    return {
			 finished: function(index, fileInfo, context) {
			 	if (!$("input[name='radiopd']:checked").val()) {
				   alert('Choose either Pest or Disease first.');
				   return false;
				}

			 	Session.set("showIPS", true);
			 	Session.set("spinner", true);
			 	Session.set('data',undefined);
			 	filename = "http://159.203.253.36/upload/"+fileInfo.name;
			 	// filename = "http://localhost:3000/upload/"+fileInfo.name;
			 	//H4Dhw4yPhumNK3PKu.jpg
				var byteNumbers = new Array(filename.length);

				    for (var i = 0; i < filename.length; i++)
				    {
				        byteNumbers[i] = filename.charCodeAt(i);
				    }

				var img = new File(byteNumbers, fileInfo , { type: "image/jpeg" });			 	
			
	 	        Cloudinary.upload(img, function(err, res) {
			          console.log("Upload Error: " + err);
			          console.log("Upload Result: " + res);
				});	
			 	console.log(img)
			 	Session.set("filename",filename);
			 	var type = Session.get("currentType");
			 	var crop = Session.get("cropAffected");
			 	var clas = Session.get("classType");
			 	if(type == "Disease"){
				 	$('.jqDropZone').html("<img src=/upload/"+fileInfo.name+" width='100%' height='295px'/>");
				 	$.ajax({	
						type:"POST",
						url:"http://159.203.253.36:8080/diseaseImageSearch",
						dataType:"json",
						data: 
							{
								'filename': filename,
								'type': type,
								'crop': crop,
								'class': clas,
							},
						success: function(result){
							Session.set("spinner", false);
							Session.set("uploaded", true);
							Session.set('data',result.data);
							console.log(result.data);		
						},
						error: function(error){
							Session.set("spinner", false);
							Session.set("uploaded", false);
							console.log(error.data);
						}
					});
			 	}
			 	else{
					$('.jqDropZone').html("<img src=/upload/"+fileInfo.name+" width='100%' height='295px'/>");
				 	$.ajax({	
						type:"POST",
						url:"http://159.203.253.36:8080/pestImageSearch",
						// url:"http://localhost:5000/pestImageSearch",
						dataType:"json",
						data: 
							{
								'filename': filename,
								'type': type,
								'crop': crop,
								'class': clas,
							},
						success: function(result){
							Session.set("spinner", false);
							Session.set("uploaded", true);
							Session.set("data",result.data);
							//Session.set("showOBS", false);      //Disable showing of ontology-based search/identification
							console.log(result.data);		
						},
						error: function(error){
							Session.set("spinner", false);
							Session.set("uploaded", false);
							console.log(error.data);
						}
					});
			 	}


			}
	    }
	},

	data: function(){
		values=[];
		if(Session.get('data')){
			for(var i = 0;i<Session.get('data').length;i++){
				values.push(Plant_Problem.findOne({'type': Session.get("currentType"),'name':Session.get('data')[i].name}));
			}
		}
		return values;
	},

	numberized: function(index){
		return (index+1) + ". ";
	},

	imageProcessingResultsHeader: function(){
		if(Session.get('data'))
			return "Image Processing's Top Results";
	},

	enableSpinner: function(){
		return Session.get("spinner");
	}
});


Template.pestId.events({
	'change [name="radiopd"]'(event, template) {
		currentType = $(event.target).attr("id");
		/*cropAffected = template.templateDict.get("cropAffected");
		classType = template.templateDict.get("classType");
		template.templateDict.set("currentType", currentType);
		template.templateDict.set("cropAffected", cropAffected);
		template.templateDict.set("classType", classType);
		template.templateDict.set("showOBS", true);*/

		cropAffected = Session.get("cropAffected");
		classType = Session.get("classType");
		Session.set("currentType", currentType);
		Session.set("cropAffected", cropAffected);
		Session.set("classType", classType);
		Session.set("showOBS", true);

		/*cropAffected = template.templateDict.get("cropAffected");
		if(currentType == "Pest"){
			template.templateDict.set("classType", "Fly-like");
			classType = template.templateDict.get("classType");
		}
		else{	
			template.templateDict.set("classType", "Fungal");
			classType = template.templateDict.get("classType");
		}
		if(currentType == "Pest" && cropAffected == ""){ //|| (classType == "Fungal" || classType == "Bacterial" || classType == "Viral"))){
			//Session.set("currentType", "Pest");
			template.templateDict.set("cropAffected", "Rice");
			console.log("pes");
		}
		else if(currentType == "Disease" && cropAffected == ""){
			//Session.set("currentType", "Disease");
			template.templateDict.set("cropAffected", "Rice");
			console.log("dis");
		}
		//setPageSessions(Session.get("currentType"));
		else{
			template.templateDict.set("cropAffected", cropAffected);
			template.templateDict.set("classType", classType);
		}*/

		/*console.log(template.templateDict.get("currentType"));
		console.log(template.templateDict.get("cropAffected"));
		console.log(template.templateDict.get("classType"));*/

		console.log(Session.get("currentType"));
		console.log(Session.get("cropAffected"));
		console.log(Session.get("classType"));
	},

	'change [name="cropAffected"]' (event, template) {
		if (!$('input[name="radiopd"]:checked').val()) {
		   alert('Choose either Pest or Disease first.');
		   $.each($('[name="cropAffected"]:checked'), function(index, item){
				$('[name="cropAffected"]:checked').removeAttr('checked');
			});
		}

		cropAffected = "";
		var count = 0;
		/*currentType = template.templateDict.get("currentType");
		classType = template.templateDict.get("classType");*/

		currentType = Session.get("currentType");
		classType = Session.get("classType");

		event.preventDefault();
		$.each($('[name="cropAffected"]:checked'), function(index, item){
			let x = item.id;
			if(count === 0){
				cropAffected = x;
			}
			else{
				cropAffected = cropAffected + ', ' + x;
			}
			count++;
		});

		/*template.templateDict.set("currentType", currentType);
		template.templateDict.set("cropAffected", cropAffected);
		template.templateDict.set("classType", classType);
		template.templateDict.set("showOBS", true);
		
		console.log(template.templateDict.get("currentType"));
		console.log(template.templateDict.get("cropAffected"));
		console.log(template.templateDict.get("classType"));*/

		Session.set("currentType", currentType);
		Session.set("cropAffected", cropAffected);
		Session.set("classType", classType);
		Session.set("showOBS", true);
		console.log(Session.get("currentType"));
		console.log(Session.get("cropAffected"));
		console.log(Session.get("classType"));

		if(Session.get("uploaded")){
			Session.set("spinner", true);
			Template.pestId.__helpers.get('enableSpinner').call();
			if(currentType == "Pest"){
				var currentURL = "http://localhost:8080/pestImageSearch";
			}
			else{
				var currentURL = "http://localhost:8080/diseaseImageSearch";
			}
			//console.log("May image touhl");
			$.ajax({	
				type:"POST",
				url:currentURL,
				dataType:"json",
				data: 
					{
						'filename': Session.get("filename"),
						'type': currentType,
						'crop': cropAffected,
						'class': classType,
					},
				success: function(result){
					Session.set("spinner", false);
					Session.set("uploaded", true);
					Session.set("data",result.data);
					//Session.set("showOBS", false);      //Disable showing of ontology-based search/identification
					console.log(result.data);		
				},
				error: function(error){
					Session.set("spinner", false);
					Session.set("uploaded", false);
					console.log(error.data);
				}
			});
		}
	},

	'change [name="classType"]' (event, template) {
		classType = $(event.target).attr("id");
		/*currentType = template.templateDict.get("currentType");
		cropAffected = template.templateDict.get("cropAffected");
		template.templateDict.set("currentType", currentType);
		template.templateDict.set("cropAffected", cropAffected);
		template.templateDict.set("classType", classType);
		template.templateDict.set("showOBS", true);
		
		console.log(template.templateDict.get("currentType"));
		console.log(template.templateDict.get("cropAffected"));
		console.log(template.templateDict.get("classType"));*/

		currentType = Session.get("currentType");
		cropAffected = Session.get("cropAffected");
		Session.set("currentType", currentType);
		Session.set("cropAffected", cropAffected);
		Session.set("classType", classType);
		Session.set("showOBS", true);
		console.log(Session.get("currentType"));
		console.log(Session.get("cropAffected"));
		console.log(Session.get("classType"));

	},

	'submit form': function(e, t){
        e.preventDefault();
        Cloudinary.upload(file, function(err, res) {
          console.log("Upload Error: " + err);
          console.log("Upload Result: " + res);
		});	
    },
});
