import React, { useState } from "react";

import "../styles/App.css";

const data = {
  2018: ["Avengers 1", "Now you see me", "Fast and Furious 7"],
  2019: ["Avengers 2", "Now you see me 2", "Fast and Furious 8"],
  2020: [
    "Final Avengers Movie(Iron man dies)",
    "Now you finally used Lenskart",
    "Covid Came",
  ],
  2021: ["Covid Returns"],
  2022: ["Adventures of Saiman", "Adventures of Shaktiman"],
};

const App = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div id="main">
      <div>
        <select onChange={handleYearChange} value={selectedYear}>
          <option value={null}>Select a year</option>
          {Object.keys(data).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div id="selected-year">
        {selectedYear ? `Selected year: ${selectedYear}` : "No year selected"}
      </div>
      {selectedYear && (
        <ul>
          {data[selectedYear].map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
