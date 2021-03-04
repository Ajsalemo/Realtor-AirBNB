import { Link } from "react-router-dom";

export default function DisplaySuggestions({ data, isForRent, isForSale }) {
  const filterByAreaType = (searchTerm) => {
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
  };

  return (
    <div className="pb-12">
      <h2 className="transition-opacity duration-300 ease-in-out font-suez-one text-center text-2xl sm:text-3xl md:4xl">
        {data && data.autoCompleteQuery.autocomplete.length > 0
          ? "This is what we have found.."
          : data && data.autoCompleteQuery.autocomplete.length <= 0
          ? "No results. Try a different search query."
          : null}
      </h2>
      <div className="flex flex-col items-center md:justify-center md:flex-row">
        <div className="bg-gray-400 w-1/2 sm:1/4 font-suez-one p-1 text-center mt-2 rounded h-32 sm:h-48 flex flex-col justify-center bg-realtor-dashboard-one bg-center mx-1">
          <span className="bg-white">Search for your next home.</span>
        </div>
        <div className="order-first md:order-none w-3/4 sm:1/4 rounded">
          <ul className="text-center">
            {data &&
              data.autoCompleteQuery.autocomplete.map((loc) => (
                <li key={loc.slug_id}>
                  <Link
                    to={`/listings/${loc.city}/${loc.state_code}/20/0/${
                      isForRent ? "rent" : "sell"
                    }`}
                    className="font-suez-one flex-grow"
                  >
                    {filterByAreaType(loc)}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="bg-gray-400 w-1/2 sm:1/4 font-suez-one p-1 text-center mt-2 rounded h-32 sm:h-48 flex flex-col justify-center bg-realtor-dashboard-two bg-center">
          <span className="bg-white">
            Locate listings by searching for addresses, cities, zip codes or
            neighborhoods.
          </span>
        </div>
      </div>
    </div>
  );
}
