import React, { useEffect } from 'react';
import './style.css'; // Import your stylesheet

const UploadWidgetComponent = () => {
  useEffect(() => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'your_cloud_name',
        uploadPreset: 'your_upload_preset',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the response:', result.info);
          // Handle the response here after a successful upload
        }
      }
    );

    // Find the upload button by class name and bind the widget to it
    const uploadButton = document.querySelector('.upload-button');
    if (uploadButton) {
      uploadButton.addEventListener('click', () => {
        widget.open(); // Open the widget when the button is clicked
      });
    }
  }, []);

  return (
    <div>
      <h2>Upload Files Using the Upload Widget</h2>
      <p>Perform a signed upload using the upload widget.</p>
      <p>Click "Upload Files" to open the upload widget.</p>
      <div>
        <button className="upload-button submit">Upload Files</button>
      </div>
      <div>
        <img id="uploaded" alt="Uploaded Image Preview" />
      </div>
      <h3>Upload response:</h3>
      <pre className="data" id="uwdata"></pre>

      <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>
      {/* Include your local script */}
      {/* <script src="./js/uploadclientwidget.js" type="text/javascript"></script> */}

      <p>
        Back to <a href="client/src/pages/Home.jsx">menu</a>.
      </p>
    </div>
  );
};

export default UploadWidgetComponent;
