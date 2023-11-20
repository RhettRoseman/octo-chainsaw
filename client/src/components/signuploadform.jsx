import React, { useState } from 'react';
// import ‘./cloudinary/config’
// Import CSS file here
function SignedUpload() {
  const [formData, setFormData] = useState({}); // State to manage form data
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const signResponse = await fetch('/routes/signuploadform');
      const signData = await signResponse.json();
      const url = "https://api.cloudinary.com/v1_1/" + signData.cloudname + "/auto/upload";
      const files = formData.files;
      console.log('bell');
      const uploadPromises = Array.from(files).map((file) => {
        const uploadData = new FormData();
        for (let i = 0; i < files.length; i++) {
          let file = files[i];
        uploadData.append("file", file);
        uploadData.append("api_key", signData.apikey);
        uploadData.append("timestamp", signData.timestamp);
        uploadData.append("signature", signData.signature);
        uploadData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260");
        uploadData.append("folder", "signed_upload_demo_form");
      }
      console.log('bobby');
         fetch(url, {
          method: "POST",
          body: uploadData
        })
          .then((response) =>
          response.text())
          .then((data) => {
            console.log('bobthebuilder');
            var str = JSON.stringify(JSON.parse(data), null, 4);
            document.getElementById("formdata").innerHTML += str;
            console.log(JSON.parse(data));
            // Handle response data as needed
          });
      });
console.log('bob');
      await Promise.all(uploadPromises);
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
  };
  const handleFileChange = (e) => {
    const files = e.target.files;
    setFormData({ files });
  };
  return (
    <div className="upload-container">
      <h2>File Upload</h2>
      <p>
        Select files by clicking "Choose files" or drag and drop your files directly onto the button.
        Then click "Upload Files" to perform a signed upload.
      </p>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="fileInput" className="file-label">
          Choose files
        </label>
        <input
          type="file"
          id="fileInput"
          name="files[]"
          multiple
          onChange={handleFileChange}
        />
        <button type="submit" className="upload-button">
          Upload Files
        </button>
      </form>
      <h3>Upload response:</h3>
      <pre className="response-data" id="formdata"></pre>
    </div>
  );
}

export default SignedUpload;










