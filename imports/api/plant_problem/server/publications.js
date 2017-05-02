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
  getPests: function(searchText) {
    var query = {
			"bool": {
				"must": [
					{
					"bool": {
						"should": [
							{"match": {"eng_name": {"query": searchText}}},
							{"match": {"fil_name": {"query": searchText}}},
							{"match": {"sci_name": {"query": searchText}}},
							{"match": {"keywords": {"query": searchText}}},
						]
						}
					}
				],
				// "should": [
				// 	{"match_phrase_prefix": {"eng_name": {"query": searchText}}},
				// 	{"match_phrase_prefix": {"fil_name": {"query": searchText}}},
				// 	{"match_phrase_prefix": {"sci_name": {"query": searchText}}},
				// 	{"match_phrase_prefix": {"symptoms": {"query": searchText}}},
				// 	{"match_phrase_prefix": {"keywords": {"query": searchText}}},
				// ]
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