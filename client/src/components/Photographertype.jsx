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

  return (
    <div className="col-12 col-lg-9">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="photographerType"
          placeholder="Picture"
          value={photographerType}
          className="form-input w-100"
          style={{ lineHeight: '1.5' }}
          onChange={handleChange}
        />
        <input
          type="text"
          name="album"
          placeholder="Photographer"
          value={album}
          className="form-input w-100"
          style={{ lineHeight: '1.5' }}
          onChange={handleChange}
        />
        <textarea
          name="thoughtText"
          placeholder="Album"
          value={thoughtText}
          className="form-input w-100"
          style={{ lineHeight: '1.5', }}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PhotographerType;
