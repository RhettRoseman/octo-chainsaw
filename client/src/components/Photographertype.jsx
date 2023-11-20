import React, { useState } from 'react';

function PhotographerType() {
  const [photographerType, setPhotographerType] = useState('');
  const [album, setAlbum] = useState('');
  const [thoughtText, setThoughtText] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'photographerType') {
      setPhotographerType(value);
    } else if (name === 'album') {
      setAlbum(value);
    } else if (name === 'thoughtText') {
      setThoughtText(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access photographerType, album, and thoughtText here
  };

  // return (
  //   <div className="col-12 col-lg-9">
  //     {/* Removed the form and the dotted border */}
  //   </div>
  // );
}

export default PhotographerType;
