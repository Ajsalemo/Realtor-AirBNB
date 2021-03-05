export default function filterByAreaTypeDisplay(searchTerm) {
  // Switch statement to filter output responses by area type // ex., city, address or neighborhood
  switch (searchTerm && searchTerm.area_type.toLowerCase()) {
    case "neighborhood":
      return `${searchTerm.neighborhood} - ${searchTerm.city} ${searchTerm.state_code}, ${searchTerm.country}`;
    case "address":
      if (searchTerm.full_address > 0) return `${searchTerm.full_address[0]}`;
      return `${searchTerm.line} ${searchTerm.city}, ${searchTerm.state_code} ${searchTerm.postal_code}`;
    case "city":
      return `${searchTerm.city}, ${searchTerm.state_code} ${searchTerm.country}`;
    default:
      break;
  }
}
