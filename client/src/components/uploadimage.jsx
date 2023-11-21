const UploadImage = ({ url }) => {
    const [uploadAvatarMutation] = useMutation(UPLOAD_AVATAR);
    const [avatar, setAvatar] = useState(null);
  
    const UPLOAD_AVATAR = gql`
  mutation uploadAvatar($avatar: Upload) {
    uploadAvatar(avatar: $avatar) {
      id
    }
  }
`;
    // Store in the state the file
    const handleChange = (e) => {
      setAvatar(e.target.files[0]);
    };
  
    // Trigger the mutation when we click the submit button
    const handleClick = () => {
      uploadAvatarMutation({
        variables: {
          avatar
        }
      });
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
  };
  
  export default UploadImage;