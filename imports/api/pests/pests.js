import { Mongo } from 'meteor/mongo';
import { Index, MinimongoEngine } from 'meteor/easy:search';

export const Pests = new Mongo.Collection('pests');

export const PestsIndex = new Index({
  collection: Pests,
  fields: ['eng_name','fil_name','sci_name','symptoms'],
  engine: new MinimongoEngine(),
});