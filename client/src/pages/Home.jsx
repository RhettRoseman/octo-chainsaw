import { useQuery } from '@apollo/client';

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

//JR
import { QUERY_THOUGHTS } from '../utils/queries';

import  PhotographerType from '../components/Photographertype' 
import PhotoList from '../components/PhotoList'
// import ImageUpload from '../components/UploadPhoto';
import SignedUpload from '../components/signuploadform';
// import Cloud from '../components/cloudinary/cloud';
const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 mb-3 p-3" style={{ border: '1px dotted #1a1a1a' }}
        >
          < PhotographerType />
        </div>
        <div className='cloudinary-div'><SignedUpload/></div>
        {/* <div className='image-upload'><ImageUpload/></div> */}
    {/* <div className='cloudjsx-div'><Cloud/></div> */}
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
          
            <div>Loading...</div>
          ) : (
          
            <PhotoList
              thoughts={thoughts}
              title="Photos:"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
