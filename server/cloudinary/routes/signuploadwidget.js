const express = require('express');
const router = express.Router();
const signature = require('..//signuploadwidget');
require('../cloudinary/public/js/config');

const cloudinary = require('cloudinary').v2
const cloudName = cloudinary.config().cloud_name;
const apiKey = cloudinary.config().api_key;

// using this API should require authentication
router.get('/', function (req, res, next) {
  const sig = signature.signuploadwidget()
  res.json({
    signature: sig.signature,
    timestamp: sig.timestamp,
    cloudname: 'dfgsliya9',
    apikey: '757232843664828',
}
)
}
)

module.exports = router