import cloudinary from 'cloudinary';

// A simple function to upload to Cloudinary
const uploadFile = async (file) => {
  // The Upload scalar return a a promise
  const { createReadStream } = await file;
  const fileStream = createReadStream();

  // Initiate Cloudinary with your credentials
  cloudinary.v2.config({
    cloud_name: 'dfgsliya9',
    api_key: '757232843664828',
    api_secret: 'y29a42OcK198DuHlqcNfVZb_9NA',
    secure: true
  });

  // Return the Cloudinary object when it's all good
  return new Promise((resolve, reject) => {
    const cloudStream = cloudinary.v2.uploader.upload_stream(function (
      err,
      fileUploaded
    ) {
      // In case something hit the fan
      if (err) {
        rejet(err);
      }

      // All good :smile:
      resolve(fileUploaded);
    });

    fileStream.pipe(cloudStream);
  });
};

module.exports = uploadFile;