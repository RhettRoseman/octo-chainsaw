//JRimport { Cloudinary } from "@cloudinary/url-gen";
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPLOAD_AVATAR_MUTATION } from './graphql'; // Import your mutation from your GraphQL file

function Cloud() {
  const cld = new Cloudinary({ cloud: { cloudName: 'dfgsliya9' } });

  const [formData, setFormData] = useState({});
  const [uploadAvatarMutation] = useMutation(UPLOAD_AVATAR_MUTATION);
  const [avatar, setAvatar] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const signResponse = await fetch('/api/signuploadform');
      const signData = await signResponse.json();

      const url = "https://api.cloudinary.com/v1_1/" + signData.cloudname + "/auto/upload";
      const files = formData.files;

      const uploadPromises = Array.from(files).map((file) => {
        const uploadData = new FormData();
       const jsonData =[
        uploadData.append("file", file),
        uploadData.append("api_key", signData.apikey),
        uploadData.append("timestamp", signData.timestamp),
        uploadData.append("signature", signData.signature),
        uploadData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260"),
        uploadData.append("folder", "signed_upload_demo_form")
        ]
        return fetch(url, {
          method: "POST",
          body: uploadData
        }).then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Failed to upload');
        }).then((data) => {
          // Handle successful upload, maybe update UI or do something with the data
          console.log('Upload success:', data);
        }).catch((error) => {
          console.error('Upload failed:', error);
          // Handle upload failure
        });
      });

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
    <div id="upload-div">
      <h2>Upload Files</h2>
      <p>First, click "Choose files", then click "Upload Files" to perform a signed upload,
        or you can drag and drop your files directly on the button</p>

      <form onSubmit={handleFormSubmit}>
        <input type="file" name="files[]" multiple onChange={handleFileChange} />
        <input type="submit" value="Upload Files" name="submit" className="submit" />
      </form>

      <h3>Upload response:</h3>
      <pre className="data" id="formdata"></pre>
    </div>
  );
}

export default Cloud;
