import React from 'react';
import axios from 'axios';
import './style.css'; // Import your stylesheet

const UploadWidgetComponent = () => {
  const handleUpload = async () => {
    try {
      // Simulating file selection or obtain files from state, etc.
      const files = []; // Array of selected files

      // Loop through the selected files and upload each one
      for (const file of files) {
        const formData = new FormData();
        formData.append('file', file);

        // Adjust the URL and additional parameters as needed
        const response = await axios.post('your_upload_endpoint', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Upload successful:', response.data);
        // Handle the response accordingly
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle the error
    }
  };

  return (
    <div>
      <h2>Upload Files Using the Upload Button</h2>
      <p>Perform an upload by clicking the upload button.</p>
      <div>
        <button className="upload-btn submit" onClick={handleUpload}>
          Upload Files
        </button>
      </div>
      <div>
        <img id="uploaded" alt="Uploaded Image Preview" />
      </div>
      <h3>Upload response:</h3>
      <pre className="data" id="uwdata"></pre>

      <p>
        Back to <a href="client/src/pages/Home.jsx">menu</a>.
      </p>
    </div>
  );
};

export default UploadWidgetComponent;
