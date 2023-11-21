import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_IMAGE } from "../utils/mutations";



// import gql from "graphql-tag";

// const UPLOAD_IMAGE = gql`
//   mutation uploadAvatar($avatar: Upload) {
//     uploadAvatar(avatar: $avatar) {
//       id
//     }
//   }
// `;

const UploadImage = () => {
  const [uploadImagerMutation] = useMutation(UPLOAD_IMAGE);
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    uploadImagerMutation({
      variables: {
        image,
      },
    });
  };

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
