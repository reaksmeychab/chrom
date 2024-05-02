import React, { useState } from 'react';
import './Style.css'; // Import your CSS file

function Downloads() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Assuming you have the necessary images imported or using URLs directly
  return (
    <section>
      <div className="head">
        {/* Your other HTML content here */}

        {/* Search input */}
        <div className="row">
          <img className="img2" src="img/search.svg" alt="" />
          <input
            type="text"
            placeholder="Search Downloads"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Render downloads based on search term */}
        {downloads
          .filter((download) =>
            download.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((download, index) => (
            <div key={index} className="border1">
              <div className="row1">
                <img className="img4" src={download.icon} alt="" />
              </div>
              <div className="row2">
                <p>
                  <a href={download.link}>{download.name}</a> <br />
                  {download.link}
                </p>
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
          ))}

        {/* Your other HTML content here */}
      </div>
    </section>
  );
}

export default Downloads;
