import { Plant_Problem } from '../imports/api/plant_problem/plant_problem.js';
// import { Router } from 'meteor/iron:router';
// import './noroutes.html';

if(Meteor.isServer) {

    Router.route('/pests-type',{where: 'server'})
        .get(function(){
            var response = Plant_Problem.find({type: "Pest"}).fetch();
            this.response.setHeader('Content-Type','application/json');
            this.response.end(JSON.stringify(response));
        })

    Router.route('/pests-type/:plant_affected',{where: 'server'})
        .get(function(){
            var response;
            if(this.params.plant_affected !== undefined) {
                var data = Plant_Problem.find({type: "Pest", plant_affected: {$regex : new RegExp(this.params.plant_affected, "i")} }).fetch();
                if(data.length > 0) {
                    response = data
                } else {
                    response = {
                        "error" : true,
                        "message" : "Pest not found."
                    }
                }
            }
            this.response.setHeader('Content-Type','application/json');
            this.response.end(JSON.stringify(response));
        })

    Router.route('/pests-type/:plant_affected/:limit',{where: 'server'})
        .get(function(){
            var response;
            var parseLimit = parseInt(this.params.limit);
            if(this.params.plant_affected !== undefined && this.params.limit !== undefined) {
                
                var data = Plant_Problem.find({type: "Pest", plant_affected: {$regex : new RegExp(this.params.plant_affected, "i")}},{limit:parseLimit}).fetch();
                if(data.length > 0) {
                    response = data
                } else {
                    response = {
                        "error" : true,
                        "message" : "Pest not found."
                    }
                }
            }
            this.response.setHeader('Content-Type','application/json');
            this.response.end(JSON.stringify(response));
        })

    Cloudinary.config({
        cloud_name: 'project-sarai',
        api_key: '165644439513415',
        api_secret: '506mxbG9wwkgkVentEPZk724eOU'
    });



}
