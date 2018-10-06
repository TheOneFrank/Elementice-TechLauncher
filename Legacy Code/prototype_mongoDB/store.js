var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://frank:frank12345@ds133252.mlab.com:33252/elementice_bulletkam');
var conn = mongoose.connection;
var path = require('path');

var Grid = require('gridfs-stream');

var fs = require('fs');

var filepath = path.join(__dirname, '../prototype_mongodb/test.png');

Grid.mongo = mongoose.mongo;

conn.once('open', function(){
  console.log('-Starting-');
  var gfs = Grid(conn.db);

  var writestream = gfs.createWriteStream({
    filename: '1.png'
  });

  fs.createReadStream(filepath).pipe(writestream);

  writestream.on('close',function(file){
    console.log(file.filename + 'written to db');
    console.log('-Done-');
  });
});
