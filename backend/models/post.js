const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title:{type:String,required:true},
  content:{type:String,default:'This is the default content'}
});

module.exports= mongoose.model('Post',postSchema);
