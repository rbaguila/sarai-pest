import { Mongo } from 'meteor/mongo';
import { Index, MinimongoEngine } from 'meteor/easy:search';
import { ElasticSearchEngine } from 'meteor/easysearch:elasticsearch';

export const Plant_Problem = new Mongo.Collection('plant_problem');

export const PestsIndex = new Index({
  collection: Plant_Problem,
  fields: ['eng_name','fil_name','sci_name','symptoms'],
  engine: new ElasticSearchEngine({
  	/*query: (searchString) => {
		query = {
			"bool": {
				"must": [
					{
					"bool": {
						"should": [
							{"match": {"eng_name": {"query": searchString}}},
							{"match": {"fil_name": {"query": searchString}}},
							{"match": {"sci_name": {"query": searchString}}},
							{"match": {"symptoms": {"query": searchString}}}
						]
						}
					}
				],
				"should": [
					{"match_phrase_prefix": {"eng_name": {"query": searchString}}},
					{"match_phrase_prefix": {"fil_name": {"query": searchString}}},
					{"match_phrase_prefix": {"sci_name": {"query": searchString}}},
					{"match_phrase_prefix": {"symptoms": {"query": searchString}}},
				]
			}
		};          	
		return query;                                                                                                            
	},*/
	body: () => { }
  }),
});

export const DiseasesIndex = new Index({
  collection: Plant_Problem,
  fields: ['eng_name','fil_name','sci_name','symptoms'],
  engine: new MinimongoEngine()
});