import React, { useState } from 'react';

const mockItems = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grapes',
  'Honeydew',
  'Kiwi',
  'Lemon',
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = mockItems.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>List Example</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search items"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
