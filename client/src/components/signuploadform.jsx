import React, { useState } from 'react';
// Import your CSS file here
// import { cloudinary } from '@cloudinary/url-gen';
// Configure your cloud name, API key and API secret:

const myconfig = cloudinary.config({
    cloud_name: 'dfgsliya9', 
    api_key: '757232843664828', 
    api_secret: 'y29a42OcK198DuHlqcNfVZb_9NA',
    secure: true
  });
  
  exports.myconfig = myconfig;
function SignedUpload() {
  const [formData, setFormData] = useState({}); // State to manage form data

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const signResponse = await fetch('/api/signuploadform');
      const signData = await signResponse.json();

      const url = "https://api.cloudinary.com/v1_1/" + signData.cloudname + "/auto/upload";
      const files = formData.files;

      const uploadPromises = Array.from(files).map((file) => {
        const uploadData = new FormData();
        uploadData.append("file", file);
        uploadData.append("api_key", signData.apikey);
        uploadData.append("timestamp", signData.timestamp);
        uploadData.append("signature", signData.signature);
        uploadData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260");
        uploadData.append("folder", "signed_upload_demo_form");

        return fetch(url, {
          method: "POST",
          body: uploadData
        })
          .then((response) => response.text())
          .then((data) => {
            console.log(JSON.parse(data));
            // Handle response data as needed
          });
      });

      await Promise.all(uploadPromises);
    } catch (error) {
      console.error('Error:', erroxr);
      // Handle errors
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setFormData({ files });
  };

  return (
    <div>
      <h2>Upload Files Using a Form</h2>
      <p>Perform a signed upload using a standard HTML form.</p>
      <p>First, choose your files, then click "Upload Files" to perform a signed upload.
        Two eager transformations are performed on the uploaded files.</p>

      <form onSubmit={handleFormSubmit}>
        <input type="file" name="files[]" multiple onChange={handleFileChange} />
        <input type="submit" value="Upload Files" name="submit" className="submit" />
      </form>

      <div><img id="uploaded_form" alt="Uploaded Form" /></div>

      <h3>Upload response:</h3>
      <pre className="data" id="formdata"></pre>
    </div>
  );
}

export default SignedUpload;
