import { useState } from "react";

export default function SalePropertyDetailDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="border-b-2 border-gray-500 py-4 mb-24">
      <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {!isDropdownOpen ? "Down" : "Up"}
      </span>
      <div className={!isDropdownOpen ? `hidden` : ``}>This is open</div>
    </div>
  );
}
