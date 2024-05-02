import React, { useState } from 'react';

const App = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState(null);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., API call, data processing)
    console.log('Submitted:', { name, link, image });
    // Reset form fields after submission
    setName('');
    setLink('');
    setImage(null);
    setPopupOpen(false);
  };

  return (
    <section>
      <style>
        {`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: Arial, sans-serif;
            position: relative;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f2f2f2;
          }
          
          .head {
            width: 1100px;
            display: flex;
            padding: 10px 15px;
          }
          
          .popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            z-index: 9999;
          }
          
          .close-btn {
            position: absolute;
            top: 5px;
            right: 10px;
            cursor: pointer;
          }
          
          .btn {
            position: absolute;
            bottom: 10px;
            right: 10px;
          }
          
          .xmark {
            height: 50px;
            width: 50px;
          }
          
          .f {
            position: sticky;
            bottom: 10px;
            right: 10px;
          }
        `}
      </style>
      <div className="head">
        {/* Your other HTML content here */}

        {/* Popup */}
        {popupOpen && (
          <div className="popup">
            <label className="close-btn" onClick={togglePopup}>
              X
            </label>
            <h2>Popup</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              /><br /><br />
              <label htmlFor="link">Link:</label>
              <input
                type="text"
                id="link"
                name="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
              /><br /><br />
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
                required
              /><br /><br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        )}
        {/* Button to toggle popup */}
        <div className="btn xmark" onClick={togglePopup}>
          <i className="fa-solid fa-circle-plus f"></i>
        </div>
      </div>
    </section>
  );
}

export default App;
