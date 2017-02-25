const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema({
  username: {type:String,required:true,unique:true},
  skills:[{
    name: String,
    score: Number
  }]
},{
  timestamps: true
});

var User = mongoose.model('Users',userSchema)

module.exports = User
