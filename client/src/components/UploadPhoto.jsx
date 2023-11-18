import React, { useState } from 'react';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileInputChange = (event) => {
    handleFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Here you'd typically use an API or send the file to a backend server
      console.log('File uploaded:', selectedFile);
      // You can add logic here to send the file to your backend
      // For instance, using fetch or Axios to send the file to your server
    } else {
      console.log('Please select a file before uploading.');
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <div className="drop-area" onDrop={handleDrop} onDragOver={handleDragOver}
        style={{
          width: '400px', // Set the width of the drop area
          height: '300px', // Set the height of the drop area
          border: '2px dashed #ccc', // Optional border style
          borderRadius: '10px', // Optional border radius
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '20px auto', // Optional margin for centering
        }}
      >
        <input type="file" accept="image/*" onChange={handleFileInputChange}
          style={{ display: 'none' }}
          id="fileInput"
        />
        <label htmlFor="fileInput">
          Drag & Drop or Click to Select Image
        </label>
      </div>
      {previewImage && (
        <div>
          <h3>Preview:</h3>
          <img
            src={previewImage}
            alt="Preview"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )}
      <button className='upload-btn' onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUpload;
