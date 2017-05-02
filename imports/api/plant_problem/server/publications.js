// All plant_problem related publications

import { Meteor } from 'meteor/meteor';
import { Plant_Problem } from '../plant_problem.js';

Meteor.publish('plant_problem.all', function () {
  return Plant_Problem.find();
});

// for PAGINATION
new Meteor.Pagination(Plant_Problem);

var ES = new ElasticSearch();

Meteor.methods({
  getPests: function(searchText, filter) {
    var query = {
		"bool": {
			"must": [
				{
				"bool": {
					"should": [
						{"match": {"name": {"query": searchText, minimum_should_match: 75}}},
						{"match": {"eng_name": {"query": searchText, minimum_should_match: 75}}},
						{"match": {"fil_name": {"query": searchText, minimum_should_match: 75}}},
						{"match": {"sci_name": {"query": searchText, minimum_should_match: 75}}},
						{"match": {"keywords": {"query": searchText, minimum_should_match: 75}}},
						{"match": {"symptoms": {"query": searchText, minimum_should_match: 75}}},
						{"match": {"description": {"query": searchText, minimum_should_match: 75}}}
					]
					}
				}
			],
			"must_not": [
				{
				"bool": {
					"should": [
						{"match": {"plant_affected": {"query": filter}}}
					]
					}
				}
			]
		}
	}; 

    var result = ES.EsClient.search({
      index: "easysearch",
      type: "plant_problem",
      body: {
        query: query
      }
    });

    return result.hits.hits.map(function(doc) {
      return doc._source;
    });
  }
});