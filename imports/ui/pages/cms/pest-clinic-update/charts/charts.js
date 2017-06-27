import { Meteor } from 'meteor/meteor';
import { Logs } from '/imports/api/logs/logs.js';
import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import Highcharts from 'highcharts';
import './charts.html';
import '../../components/clinic-cms-navbar.html';
import '../../components/cms-sidenav.html';

changeNumberChart = function () {
    // Gather data: 
    console.log("bdshbdsghds");
    var year = $('#yearForm').val();
    var count = 0;

    //if(pest!="" || pest!=null){
    var pestStat = Logs.find({year:year}).fetch();
    count = Logs.find({year:year}).count();
    //}

    var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var ans = [];

    for(i=0; i<12; i++){
        ans.push(Logs.find({month:m[i],year:year}).count());
    }
    Meteor.defer(function() {
        // Create standard Highcharts chart with options:
      Highcharts.chart('number_chart', {
        title: {
          text: 'History of Pest Request'
        },
        legend: {
          enabled: false
        },
        xAxis: {
          categories: m,
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Number of Pest Request per Month'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}:</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.category}</span>'
        },
        credits: {
          enabled: false
        },
        series: [{
          type: 'line',
          name: 'Month',
          data: ans
        }]
      });
    });
  }
Template.Create_chart.onCreated(function() {
  Meteor.subscribe('logs.all');
  Meteor.subscribe('plant_problem.all');
});
Template.columnBar.helpers({
  createColumnBar: function () {
    // Gather data: 
    var pests = Plant_Problem.find({type: 'Pest'}).fetch();
    var categories = [];
    var count = [];
    
    categories.push('Others');
    categories.push('Unknown');
    count.push(Logs.find({problem: 'Others'}).count());
    count.push(Logs.find({problem: 'Unknown'}).count());
    
    for (var i = 0; i<pests.length; i++) {
      categories.push(pests[i].name);
      count.push(Logs.find({problem: pests[i].name}).count());
    }
    var chartData = [];
    for (var i = 0; i < categories.length ; i++) {
      chartData.push({
        y: count[i],
        name: categories[i]
      });
    }
      // Use Meteor.defer() to craete chart after DOM is ready:
    Meteor.defer(function() {
        // Create standard Highcharts chart with options:
      Highcharts.chart('column_bar', {
        title: {
          text: 'Summary of Pest Request Logs per Pest'
        },
        legend: {
          enabled: false
        },
        xAxis: {
          categories
        },
        yAxis: {
          min: 0, 
          title: {
            text: 'Number of Request'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}:</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>'
        },
        series: [{
          type: 'column',
          name: 'Problem Type',
          colorByPoint: true,
          data: chartData
        }]
      });
    });
  }
});
Template.pieChart.helpers({
  /////////////////////////////////////////////////////////////////

  createPie: function () {
    // Gather data: 
    var pests = Plant_Problem.find({type: 'Pest'}).fetch();
    var categories = [];
    var count = [];
    
    categories.push('Others');
    categories.push('Unknown');
    count.push(Logs.find({problem: 'Others'}).count());
    count.push(Logs.find({problem: 'Unknown'}).count());
    
    for (var i = 0; i<pests.length; i++) {
      categories.push(pests[i].name);
      count.push(Logs.find({problem: pests[i].name}).count());
    }
    var chartData = [];
    for (var i = 0; i < categories.length ; i++) {
      if(count[i]>0){
        chartData.push({
          y: count[i],
          name: categories[i]
        });
      }
    }
      // Use Meteor.defer() to craete chart after DOM is ready:
    Meteor.defer(function() {
        // Create standard Highcharts chart with options:
      Highcharts.chart('pie_chart', {
        title: {
          text: 'Problem Types of Requested Logs'
        },
        legend: {
          enabled: false
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}:</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>'
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            }
          }
        },
        series: [{
          type: 'pie',
          name: 'Problem Type',
          data: chartData
        }]
      });
    });
  }
});
Template.numberChart.onRendered(function() {
    var self = this;

    self.autorun(function() {
        var data = Template.currentData();
        $('#' + createNumberChart).highcharts(createNumberChart);
    });
})
Template.numberChart.events({
  'change #yearForm': function(){
    console.log($('#yearForm').val());
    changeNumberChart();
  },
});
Template.numberChart.helpers({
  createNumberChart: function () {
    // Gather data: 
    var year = 2020;
    var count = 0;

    //if(pest!="" || pest!=null){
    var pestStat = Logs.find({year:year}).fetch();
    count = Logs.find({year:year}).count();
    //}

    var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var ans = [];

    for(i=0; i<12; i++){
        ans.push(Logs.find({month:m[i],year:year}).count());
    }
    Meteor.defer(function() {
        // Create standard Highcharts chart with options:
      Highcharts.chart('number_chart', {
        title: {
          text: 'History of Pest Request'
        },
        legend: {
          enabled: false
        },
        xAxis: {
          categories: m,
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Number of Pest Request per Month'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}:</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.category}</span>'
        },
        credits: {
          enabled: false
        },
        series: [{
          type: 'line',
          name: 'Month',
          data: ans
        }]
      });
    });
  }
});
