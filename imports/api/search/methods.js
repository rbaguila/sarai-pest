import { Meteor } from 'meteor/meteor';
import { SearchableCollection } from './search.js';

var enqueueTask = function (id, type) {
  var  task = {
    id: id,
    type: type,
    collection: SearchableCollection
  };
  // enqueue task to Amazon SQS
  // see: https://www.npmjs.com/package/aws-sdk
};
var cursor = SearchableCollection.find({});
cursor.observeChanges({
  added: function (id) {
    enqueueTask(id, 'added');
  },
  changed: function (id) {
    enqueueTask(id, 'changed');
  },
  removed: function (id) {
    enqueueTask(id, 'removed');
  },
});

// Worker APP
function added(db, esClient, id, collection) {
  // query MongoDB for the document
  db.collection(collection).find({_id: id}).toArray(
    function (err, docs) {
      // index data on elasticsearch
      esClient.index({
        index: collection,
        type: collection,
        id: id,
        body: docs[0] // because there's only one doc
      });
    }
  )
}
// changed is same as add
// function changed(db, esClient, id, collection)
function removed(db, esClient, id, collection) {
  esClient.delete({
    index: collection,
    type: collection,
    id: id,
  });
}