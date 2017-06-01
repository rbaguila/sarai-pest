import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { Meteor } from 'meteor/meteor';
import Highcharts from 'highcharts';
import './pest-monitoring.html';

Template.pestMonitoring.onCreated(function () {
	Meteor.subscribe('plant_problem.all');
});

Template.pestMonitoring.onRendered(function() {
	Session.set("currentPage", "finalMonitor"); // set the current page to change banner
});

Template.pestDescription.helpers({
	getPest(){
		return Plant_Problem.findOne({name:'Black Armyworm adult'});
	},

	armywormRiskMap(){
	    return {
	        chart: {
	            spacingBottom: 20
	        },
	        title : {
	            text : 'Pest Risk Map for Armyworm'
	        },

	        legend: {
	            enabled: true
	        },

	        plotOptions: {
	            map: {
	                allAreas: true,
	                nullColor: 'rgba(0,0,0,0)',
	                joinBy: ['name'],
	                dataLabels: {
	                    enabled: true,
	                    color: '#FFFFFF',
	                    format: null,
	                    style: {
	                        fontWeight: 'bold'
	                    }
	                },
	                mapData: Highcharts.maps['countries/ph/ph-all'],
	                tooltip: {
	                    headerFormat: '',
	                    pointFormat: '{point.name}: <b>{series.name}</b>'
	                }

	            }
	        },

	        series : [{
	            name: 'High Risk',
	            color: '#FF0000',
	            data: $.map(['Quezon', 'Misamis Oriental', 'Bohol'], function (name) {
	                return { name: name };
	            })
	        }, {
	            name: 'Medium Risk',
	            color: '#FFFF00',
	            data: $.map(['Northern Samar', 'Zambales', 'Antique', 'Bukidnon', 'Davao del Sur',
	                         'Negros Occidental', 'Pangasinan', 'Zamboanga', 'Bataan', 'Tuguegarao',
	                         'Cavite', 'La Union', 'Laguna', 'Masbate', 'Misamis Occidental',
	                         'Occidental Mindoro', 'Rizal', 'Aklan', 'Cagayan', 'Capiz'], function (name) {
	                return { name: name };
	            })
	        }, {
	            name: 'Low Risk',
	            color: '#FFFF55',
	            data: $.map(['Quirino', 'Aurora', 'Camarines Norte', 'Eastern Samar', 'Leyte'], function (name) {
	                return { name: name };
	            })
	        }]
	    }
    },

    armywormHistory(){
	    return {
	        chart: {
	            spacingBottom: 20
	        },
	        title : {
	            text : 'Armyworm Pest History'
	        },

	        legend: {
	            enabled: true
	        },

	        plotOptions: {
	            map: {
	                allAreas: true,
	                nullColor: 'rgba(0,0,0,0)',
	                joinBy: ['name'],
	                dataLabels: {
	                    enabled: true,
	                    color: '#FFFFFF',
	                    format: null,
	                    style: {
	                        fontWeight: 'bold'
	                    }
	                },
	                mapData: Highcharts.maps['countries/ph/ph-all'],
	                tooltip: {
	                    headerFormat: '',
	                    pointFormat: '{point.name}: <b>{series.name}</b>'
	                }

	            }
	        },

	        series : [{
	            name: 'History',
	            color: '#AAEE00',
	            data: $.map(['Northern Samar', 'Zambales', 'Antique', 'Bohol', 'Bukidnon', 'Davao del Sur',
	                         'Negros Occidental', 'Pangasinan', 'Zamboanga', 'Bataan', 'Tuguegarao',
	                         'Cavite', 'Isabela', 'La Union', 'Laguna', 'Masbate', 'Misamis Occidental',
	                         'Misamis Oriental', 'Occidental Mindoro', 'Quezon', 'Rizal', 'Aklan', 'Cagayan', 'Capiz'], function (name) {
	                return { name: name };
	            })
	        }]
	    }
	},

	armywormDroughtAssessment(){
	    return {
	        chart: {
	            spacingBottom: 20
	        },
	        title : {
	            text : 'Dry Spell/Drought Assesment for July 2016'
	        },

	        legend: {
	            enabled: true
	        },

	        plotOptions: {
	            map: {
	                allAreas: true,
	                nullColor: 'rgba(0,0,0,0)',
	                joinBy: ['name'],
	                dataLabels: {
	                    enabled: true,
	                    color: '#FFFFFF',
	                    format: null,
	                    style: {
	                        fontWeight: 'bold'
	                    }
	                },
	                mapData: Highcharts.maps['countries/ph/ph-all'],
	                tooltip: {
	                    headerFormat: '',
	                    pointFormat: '{point.name}: <b>{series.name}</b>'
	                }

	            }
	        },

	        series : [{
	            name: 'Dry Spell',
	            color: '#FF0000',
	            data: $.map(['Isabela','Camarines Norte', 'Eastern Samar', 'Leyte'], function (name) {
	                return { name: name };
	            })
	        }, {
	            name: 'Drought',
	            color: '#FFFF00',
	            data: $.map(['Quirino', 'Aurora', 'Quezon', 'Misamis Oriental', 'Bohol'], function (name) {
	                return { name: name };
	            })
	        }]
	    }
	}

});

Template.highmapsHelper.onRendered(function() {
	var self = this;
	
	self.autorun(function() {
		var data = Template.currentData();
		$('#' + data.chartId).highcharts('Map',data.chartObject);
	});
});