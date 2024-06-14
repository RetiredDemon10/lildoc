// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './Searchbar.css'; 

// const states = ['Lagos', 'Abuja', 'Rivers'];
// const areas = {
//   'Lagos': ['Ikeja', 'Victoria Island', 'Epe'],
//   'Abuja': ['Gwagwalada', 'Wuse', 'Maitama'],
//   'Rivers': ['Port Harcourt', 'Rumokoro', 'Choba'],
// };

// const Searchbar = () => {
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedArea, setSelectedArea] = useState('');
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);

//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//     setSelectedArea('');
//   };

//   const handleAreaChange = (e) => {
//     setSelectedArea(e.target.value);
//   };

//   const handleSearch = () => {
//     // Handle search functionality
//     alert(`Searching for properties in ${selectedArea}, ${selectedState} from ${checkInDate} to ${checkOutDate}`);
//   };

//   return (
//     <div className="search">
//       <select className="dropdown" value={selectedState} onChange={handleStateChange}>
//         <option value="" disabled>Select State</option>
//         {states.map((state) => (
//           <option key={state} value={state}>{state}</option>
//         ))}
//       </select>

//       <select className="dropdown" value={selectedArea} onChange={handleAreaChange} disabled={!selectedState}>
//         <option value="" disabled>Select Area</option>
//         {selectedState && areas[selectedState].map((area) => (
//           <option key={area} value={area}>{area}</option>
//         ))}
//       </select>

//       <DatePicker
//         selected={checkInDate}
//         onChange={(date) => setCheckInDate(date)}
//         selectsStart
//         startDate={checkInDate}
//         endDate={checkOutDate}
//         minDate={new Date()}
//         placeholderText="Check In"
//         className="date-picker"
//       />

//       <DatePicker
//         selected={checkOutDate}
//         onChange={(date) => setCheckOutDate(date)}
//         selectsEnd
//         startDate={checkInDate}
//         endDate={checkOutDate}
//         minDate={checkInDate}
//         placeholderText="Check Out"
//         className="date-picker"
//       />

//       <button className="search-button" onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default Searchbar;


import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Searchbar.css';

const states = ['Lagos', 'Abuja', 'Rivers'];
const areas = {
  'Lagos': ['Ikeja', 'Victoria Island', 'Epe'],
  'Abuja': ['Gwagwalada', 'Wuse', 'Maitama'],
  'Rivers': ['Port Harcourt', 'Rumokoro', 'Choba'],
};

const Searchbar = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [budget, setBudget] = useState('');
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedArea('');
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };

  const handleSearch = () => {
    // Handle search functionality
    alert(`Searching for properties in ${selectedArea}, ${selectedState} from ${checkInDate} to ${checkOutDate} with budget ${budget}`);
  };

  const handleBudgetClick = () => {
    setShowBudgetDropdown(!showBudgetDropdown);
  };

  const handleBudgetSelect = (option) => {
    setBudget(option);
    setShowBudgetDropdown(false);
  };

  return (
    <div className="search">
      <label className="label">State:</label>
      <select className="dropdown" value={selectedState} onChange={handleStateChange}>
        <option value="" disabled>Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>

      <label className="label">Area:</label>
      <select className="dropdown" value={selectedArea} onChange={handleAreaChange} disabled={!selectedState}>
        <option value="" disabled>Select Area</option>
        {selectedState && areas[selectedState].map((area) => (
          <option key={area} value={area}>{area}</option>
        ))}
      </select>

      <label className="label">Check In:</label>
      <DatePicker
        selected={checkInDate}
        onChange={(date) => setCheckInDate(date)}
        selectsStart
        startDate={checkInDate}
        endDate={checkOutDate}
        minDate={new Date()}
        placeholderText="Check In"
        className="date-picker"
      />

      <label className="label">Check Out:</label>
      <DatePicker
        selected={checkOutDate}
        onChange={(date) => setCheckOutDate(date)}
        selectsEnd
        startDate={checkInDate}
        endDate={checkOutDate}
        minDate={checkInDate}
        placeholderText="Check Out"
        className="date-picker"
      />

      <label className="label" htmlFor="budget">Budget:</label>
      <div className="budget-input">
        <div className="budget-placeholder" onClick={handleBudgetClick}>
          {budget || 'Select budget'}
        </div>
        {showBudgetDropdown && (
          <div className="budget-dropdown">
            {["25,000-35,000", 26000, 27000, 28000, 29000, 30000].map((option) => (
              <div
                key={option}
                className="budget-option"
                onClick={() => handleBudgetSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbar;