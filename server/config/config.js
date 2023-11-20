const cloudinary = require('cloudinary').v2;
// Configure your cloud name, API key and API secret:
const myconfig = cloudinary.config({
  cloud_name: 'dfgsliya9',
  api_key: '757232843664828',
  api_secret: 'y29a42OcK198DuHlqcNfVZb_9NA',
  secure: true
});
exports.myconfig = myconfig;