'use strict';

var Mongo = require('mongodb');

function Category(c){
  this.name   = c.name;
  this.userId = Mongo.ObjectID(c.userId);

}

Category.create = function(c, cb){
  var x = new Category(c);
  Category.collection.save(x, cb);
};

Category.all = function(cb){
  Category.collection.find().toArray(cb);
};

module.exports = Category;
