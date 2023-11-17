import React from 'react';
import { Link } from 'react-router-dom'; 
const showUsername = true;
const PhotoList = ({ showTitle, title, thoughts }) => {
  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this thought on {thought.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this thought on {thought.createdAt}
                  </span>
                </>
              )}
            </h4>
            {thought.imageURL && ( // Check if imageURL exists in the thought
              <div className="card-body bg-light p-2">
                <img
                  src={thought.imageURL} // Display the image
                  alt="Thought Image"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            )}
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
    </div>
 );
}

export default PhotoList;

