import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
  const [keywords, setKeywords] = useState([]);

  const handleAddKeyword = (e) => {
    e.preventDefault();
    const newKeyword = e.currentTarget.querySelector('[name="newKeyword"]').value;
    if (newKeyword !== '') {
      setKeywords((prevKeywords) => [...prevKeywords, newKeyword]);
      e.currentTarget.querySelector('[name="newKeyword"]').value = '';
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('keywords', keywords);
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:8080/ITEM/ADD', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="Title" placeholder="Імя товару" />
        <input type="text" name="Descer" placeholder="Опис товару" />
        <input type="number" name="Price" placeholder="Ціна" />
        <input type="number" name="KW" placeholder="Ціна" />
        <input type="number" name="V" placeholder="Ціна" />
        <input type="file" name="img" accept="image/png, image/jpeg" multiple />
        <button type="submit">dsadsa</button>
      </form>
    </div>
  );
};

export default AddItem;
