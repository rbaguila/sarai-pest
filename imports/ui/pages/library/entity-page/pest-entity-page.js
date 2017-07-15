import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { Meteor } from 'meteor/meteor';
import './pest-entity-page.html';

var specialElementHandlers = {
  '#bypassme': function(element, renderer)
  {
    return true;
  }
};

Template.entityPage.onCreated(function () {
  Meteor.subscribe('plant_problem.all');
});

Template.entity.onRendered(function () {
	 $('[data-toggle="tooltip"]').tooltip();
	 $('.swipebox').swipebox(); 
});

Template.entity.helpers({
  pest(){
		return Plant_Problem.findOne({_id: FlowRouter.current().params._id});
	},
});

Template.entity.events({

	'click .back': function(event){
		FlowRouter.go("/pests");
	},
	'click .download1': function(e, tmpl) {
        e.preventDefault();
     
        var HTML2PDF = function demoFromHTML() {
          var pdf = new jsPDF('p', 'pt', 'letter');
          source = $('#pesttype')[0];

          specialElementHandlers = {
            '#bypassme': function (element, renderer) {
              return true
            }
          };
          var pestname = Plant_Problem.findOne({_id: FlowRouter.current().params._id});
          console.log(pestname.name)
          var pest_name = pestname.name;
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
                pdf.save(pest_name + '.pdf');
            }, margins);
        };

        return HTML2PDF();
    },
});

Template.entity.currentPath =  function () { 
    return Router && Router.current() && Router.current().path;
};
