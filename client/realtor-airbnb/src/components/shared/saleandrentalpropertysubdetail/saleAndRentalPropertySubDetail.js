export default function SaleAndRentalPropertySubDetail({ min, max, roomType }) {
  return (
    /* 
        Conditionally display the min/max range for property features of the apartment
        If one value is avaiable over the other, then display it. If both are, then display the full range
        If none are, display nothing
    */
    min && !max
      ? `${min} ${roomType}`
      : !min && max
      ? `${max} ${roomType}`
      : min && max
      ? `${min} - ${max} ${roomType}`
      : null
  );
}
