// SEARCH PUBLICATION
import { Meteor } from 'meteor/meteor';
import { SearchableCollection } from '../search.js';
import esClient from 'elasticsearch';
import Future from 'fibers/future';


Meteor.publish('search', function(q) {
  var future = new Future();
  esClient.search({ //https://www.npmjs.com/package/elasticsearch
    index: 'searchable-collection',
    q: q, // query
    size: 10,
    function (err, response) {
      // grab all the ids
      var hitIds = _.pluck(reponse.hits.hits, '_id');
      future.return( // find all of documents by id and publish them
        SearchableCollection.find({_id: {$in: hitIds}})
      );
      //return SearchableCollection.find({_id: {$in: hitIds}});
    }
  });
});