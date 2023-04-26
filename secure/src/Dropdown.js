import React, { useState } from "react";

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select className="dropdown" value={selectedOption} onChange={handleSelect}>
      <option value="">SERVICES</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  );
}

export default Dropdown;
