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
}

export default PhotographerType;
