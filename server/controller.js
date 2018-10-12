const User = require('../db/db');
const ObjectId = require('mongodb').ObjectID;

exports.createOne = function (req, res ,next) {
    const user = new User(req.body);
    user.save()
    .then(item => {
     res.send("user saved to database");
 })
    .catch(err => {
        next(err)
    });
};

exports.retrieve = function (req, res,next) {
    User.find({})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
        })
 };


exports.retrieveOne = function (req, res,next) {
	const id = req.params.id;
    User.findOne({_id:ObjectId(id)})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        next(err)
    })
};

exports.updateOne = function (req, res, next){
    const id = req.params.id
    const newValue = req.body;
    User.findOneAndUpdate({_id:ObjectId(id)}, newValue)
    .then( previousValue => {
        User.findOne({ _id : id })
        .then(updated => {
            res.send(updated);
        })
        .catch(err => {
            console.log(err);
        });
    })
    .catch(err => {
        next(err)
    })
};


exports.delete = function (req, res, next) {
  User.deleteMany()
    .then(()=>{
        res.send('removed')
    })
    .catch(err => {
        next(err)
    })
};


exports.deleteOne = function (req, res, next) {
   const id = req.params.id;
        User.deleteOne({_id:ObjectId(id)})
        .then(()=>{
            res.send('removed')
        })
        .catch(err => {
            next(err)
        })
};