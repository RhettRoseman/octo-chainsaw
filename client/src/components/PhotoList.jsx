import React from 'react';

const PhotoList = ({ photos }) => {
  return (
    <div>
      {photos && photos.length > 0 ? (
        <div className="photo-list">
          {photos.map((photo, index) => (
            <div key={index} className="photo-item">
              <img
                src={photo.imageUrl}
                alt={`Photo ${index + 1}`}
                className="photo-image"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No photos available.</p>
      )}
    </div>
  );
};

export default PhotoList;
