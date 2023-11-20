import React from 'react';
import { Link } from 'react-router-dom';

const PhotoList = ({ showTitle, title, thoughts }) => {
  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {/* Remove the text content */}
            </h4>
            {thought.imageURL && (
              <div className="card-body bg-light p-2">
                <img
                  src={thought.imageURL}
                  alt="Thought Image"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            )}
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              View Image
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PhotoList;
