/**
  * file name: index.js  // indexRouter
  * Student name: Nusrat Jahan
  * Student Id: 300967157
  * Date: Feb 16, 2019
  */

let express = require('express');
let router = express.Router();
//let contactInfo = require('../models/contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('home/about', { title: 'About Me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('home/project', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('home/service', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contacts/index', { title: 'Contact' });
});


/* get contact information using POST method. */
router.post('/contact', function(req, res, next) {
  //console.log(req.body);

  /** Holds values that user input */
  let contactInfo = {
    "firstName" : req.body.firstName,
    "lastName": req.body.lastName,
    "contactNumber": req.body.contactNumber,
    "email": req.body.email,
    "message": req.body.message
  };

  res.render('contacts/contactinfo', { title: "Contact Information", contactInfo: contactInfo});
  
});


module.exports = router;
