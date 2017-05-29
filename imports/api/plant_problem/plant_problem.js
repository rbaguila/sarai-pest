import { Mongo } from 'meteor/mongo';
import { Index, MinimongoEngine } from 'meteor/easy:search';
import { ElasticSearchEngine } from 'meteor/easysearch:elasticsearch';

export const Plant_Problem = new Mongo.Collection('plant_problem');

export const PestsIndex = new Index({
  collection: Plant_Problem,
  fields: ['eng_name','fil_name','sci_name','symptoms'],
  engine: new ElasticSearchEngine({
	body: () => { }
  }),
});

export const DiseasesIndex = new Index({
  collection: Plant_Problem,
  fields: ['eng_name','fil_name','sci_name','symptoms'],
  engine: new MinimongoEngine()
});