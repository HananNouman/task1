// Unauthorized copying of this file, via any medium is strictly prohibited.
// Authored by Rabi Ibrahim <ribra92@icloud.com>

/**
 * in this task we use somting called router from express js this how the project in the real world used to make a readble and maintanable code 
 * 
 * you need to read about router and its implematation 
 * Hint
 *   server.use('/api/users', userapi);
 * note that the userapi refer to anothe file contain the users api implemenation 
 **/
const express = require('express');
const router = express.Router();
const db = require("../db/index");
/* GET ALL USERS */
/**
 * '/' this same as '/api/users' that we used in index.js
 * 
 **/
router.get('/', function (req, res, next) {
  db.User.find(function (err, rows) {
    if (err) return next(err);
    res.status(200).json(rows);
  });
});

/* GET SINGLE USER BY ID */
router.get('/:id', function (req, res, next) {
	let id = req.params.id;
	db.User.findOne({id:id},function (err, rows) {
    if (err) return next(err);
    res.status(200).json(rows);
  })
});


/* SAVE User */
router.post('/', function (req, res, next) {
	let user = new db.User(req.body);
	user.save(function(err){
		if(err) return next(err);
	})
});

/* UPDATE User */
router.put('/:id', function (req, res, next) {
	let id = req.params.id;
	db.User.updateOne({id:id}, req.body, function (err, data) {
  if (err) return next(err);
  res.send(data);
});
});

/* DELETE User */
router.delete('/:id', function (req, res, next) {
	let id = req.params.id;
db.User.deleteOne({id:id}, function(err,data){
	if(err) return next(err);
})
});



/* EXTRA => GET USERS BELONGING TO A ROLE */
router.get('/role/:role', function (req, res, next) {
	let role = req.params.role;
db.User.find({role:role},function (err, rows) {
    if (err) return next(err);
    res.status(200).json(rows);
  })
});


module.exports = router;