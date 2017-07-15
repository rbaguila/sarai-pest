import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { Meteor } from 'meteor/meteor';
import './disease-entity-page.html';

Template.diseaseEntityPage.onCreated(function () {
  Meteor.subscribe('plant_problem.all');
});

Template.diseaseEntity.onRendered(function () {
	 $('[data-toggle="tooltip"]').tooltip();
	 $('.swipebox').swipebox(); 
});

Template.diseaseEntity.helpers({
	disease(){
		return Plant_Problem.findOne({_id: FlowRouter.current().params._id});
	},
});

Template.diseaseEntity.events({

	'click .back': function(event){
		FlowRouter.go("/diseases");
	},
	'click .download': function(e, tmpl) {
	    e.preventDefault();
	 
       var HTML2PDF = function demoFromHTML() {
          var pdf = new jsPDF('p', 'pt', 'letter');
          source = $('#diseasetype')[0];

          specialElementHandlers = {
            '#bypassme': function (element, renderer) {
              return true
            }
          };
          var diseasename = Plant_Problem.findOne({_id: FlowRouter.current().params._id});

          var disease_name = diseasename.name;
          margins = {
              top: 50,
              bottom: 60,
              left: 40,
              width: 522
          };
          pdf.fromHTML(
            source, 
            margins.left, 
            margins.top, { 
                'width': margins.width,
                'elementHandlers': specialElementHandlers
            },

            function (dispose) {
                pdf.save(disease_name + '.pdf');
            }, margins);
        };

        return HTML2PDF();
	},
});

