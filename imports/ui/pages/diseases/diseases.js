import { Plant_Problem, DiseasesIndex} from '/imports/api/plant_problem/plant_problem.js';
import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './diseases.html';

Template.plantDiseases.onCreated(function () {
	Meteor.subscribe('plant_problem.all');
	Meteor.subscribe('cms.all');
});

Template.plantDiseases.onRendered(function() {
	Session.set("currentPage", "finalDiseases"); // set the current page to change banner
});

Template.plantDiseases.helpers({
    diseasesIndex(){
        return DiseasesIndex
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
		return CMS.findOne({info:'finalDiseases'});
	},
});

Template.plantDiseases.events({
    'click #dlcsv'(event) {
        document.getElementById("myDropdown").classList.toggle("show");
        if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    },
});

// DISEASE PAGINATION
Template.diseasePaginate.onCreated(function () {
    var diseasesPerPage = parseInt( CMS.findOne({info:'finalDiseases'}).diseasesPerPage );
    this.pagination = new Meteor.Pagination(Plant_Problem, {
        perPage: diseasesPerPage,
        sort: {
            name: 1
        }
    });
});

Template.diseasePaginate.helpers({
    isReady: function () {
        return Template.instance().pagination.ready();
    },
    templatePagination: function () {
        return Template.instance().pagination;
    },
    documents: function (type) {
        Template.instance().pagination.filters({'type': 'Disease', 'plant_affected': type});
        return Template.instance().pagination.getPage();
    },
    // optional helper used to return a callback that should be executed before changing the page
    clickEvent: function() {
        return function(event, templateInstance, clickedPage) {
            event.preventDefault();
        };
    }
});