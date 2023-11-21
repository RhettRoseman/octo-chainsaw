import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_IMAGE } from "../utils/mutations";
//   const [uploadImagerMutation] = useMutation(UPLOAD_IMAGE);

const UploadImage = () => {
  const [uploadImageMutation] = useMutation(UPLOAD_IMAGE);
  const [image, setImage] = useState(null);
console.log(1)
  const handleFileChange = (e) => {
    console.log(2)
    setImage(e.target.files[0]);
    console.log(e.target.files[0])
  };

  const handleFormSubmit = (e) => {
    console.log(4)
    e.preventDefault();
    console.log(5)
    uploadImageMutation({
      variables: {
        image,
      },
    }
    );
  };
console.log(8)
  return (
    <div className="upload-container">
      <h2>File Upload</h2>
      <p>
        Select files by clicking "Choose files" or drag and drop your files
        directly onto the button. Then click "Upload Files" to perform a signed
        upload.
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
};

export default UploadImage;
