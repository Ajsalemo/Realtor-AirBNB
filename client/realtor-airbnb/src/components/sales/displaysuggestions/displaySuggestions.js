import filterByAreaTypeDisplay from "@helpers/functions/filterByAreaTypeDisplay";
import { Link } from "react-router-dom";

export default function DisplaySuggestions({ data, isForRent }) {
  return (
    <div className="pb-12">
      <h2 className="flex justify-center items-center transition-opacity duration-300 ease-in-out font-suez-one text-2xl sm:text-3xl md:4xl h-12">
        {data && data.autoCompleteQuery.autocomplete.length > 0
          ? "This is what we have found.."
          : data && data.autoCompleteQuery.autocomplete.length <= 0
          ? "No results. Try a different search query."
          : null}
      </h2>
      <div className="flex flex-col items-center md:justify-center md:flex-row">
        <div className="bg-primary w-1/2 sm:1/4 font-suez-one p-1 text-center mt-2 rounded h-32 sm:h-48 flex flex-col justify-center bg-realtor-dashboard-one bg-center mx-1">
          <span className="bg-white text-black">Search for your next home.</span>
        </div>
        <div className="py-12 order-first md:order-none w-3/4 sm:1/4 rounded">
          <ul className="text-center">
            {data &&
              data.autoCompleteQuery.autocomplete.map((loc) => (
                <li key={loc.slug_id}>
                  <Link
                    to={`/listings/${loc.city}/${loc.state_code}/10000/0/${
                      isForRent ? "rent" : "sell"
                    }`}
                    className="font-suez-one flex-grow"
                  >
                    {filterByAreaTypeDisplay(loc)}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="bg-primary w-1/2 sm:1/4 font-suez-one p-1 text-center mt-2 rounded h-32 sm:h-48 flex flex-col justify-center bg-realtor-dashboard-two bg-center">
          <span className="bg-white text-black">
            Locate listings by searching for addresses, cities, zip codes or
            neighborhoods.
          </span>
        </div>
      </div>
    </div>
  );
}
