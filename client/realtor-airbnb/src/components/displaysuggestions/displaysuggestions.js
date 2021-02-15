export default function DisplaySuggestions({ data }) {
  console.log(data);
  return (
    <div>
      <h2 className="font-suez-one text-center text-2xl sm:text-3xl md:4xl">
        {data && data.realtorForsaleQuery.autocomplete.length > 0
          ? "This is what we have found.."
          : data && data.realtorForsaleQuery.autocomplete.length <= 0
          ? "No results. Try a different search query."
          : null}
      </h2>
    </div>
  );
}
