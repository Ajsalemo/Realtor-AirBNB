import { Link } from "react-router-dom";

export default function DisplaySuggestions({ data }) {
  const filterByAreaType = (searchTerm) => {
    // Switch statement to filter output responses by area type // ex., city, address or neighborhood
    switch (searchTerm && searchTerm.area_type.toLowerCase()) {
      case "neighborhood":
        return `${searchTerm.neighborhood} - ${searchTerm.city} ${searchTerm.state_code}, ${searchTerm.country}`;
      case "address":
        if (searchTerm.full_address > 0) return `${searchTerm.full_address[0]}`;
        return `${searchTerm.line} ${searchTerm.city}, ${searchTerm.state_code} ${searchTerm.postal_code}`;
      case "city":
        return `${searchTerm.city}, ${searchTerm.state_code} ${searchTerm.country}`
      default:
        break;
    }
  };

  return (
    <div>
      <h2 className="font-suez-one text-center text-2xl sm:text-3xl md:4xl">
        {data && data.realtorForsaleQuery.autocomplete.length > 0
          ? "This is what we have found.."
          : data && data.realtorForsaleQuery.autocomplete.length <= 0
          ? "No results. Try a different search query."
          : null}
      </h2>
      <ul>
        {data &&
          data.realtorForsaleQuery.autocomplete.map((loc, i) => (
            <li>
              <Link to="/">{filterByAreaType(loc)}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
