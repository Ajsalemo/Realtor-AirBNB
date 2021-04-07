export default function pricePerSqFtCalc(price, sqft) {
  // price and sqft are supplied as integers
  const division = price / sqft;
  // toFixed returns a string - which is fine in this case as this will be displayed in the component and no further calculation is needed
  return division.toFixed(1);
}
