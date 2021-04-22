export default function SaleAndRentalPropertySubDetail({ min, max, roomType }) {
  return (
    /* 
        Conditionally display the min/max range for property features of the apartment
        If one value is avaiable over the other, then display it. If both are, then display the full range
        If none are, display nothing
        Note: Null values for existing properties are returned as a string in the Realtor API
    */
    min && min !== "null" && !max
      ? `${min} ${roomType}`
      : !min && max && max !== "null"
      ? `${max} ${roomType}`
      : min && min !== "null" && max && max !== "null"
      ? `${min} - ${max} ${roomType}`
      : null
  );
}
