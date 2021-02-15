export default function DisplaySuggestions({ data }) {
  console.log(data);
  return (
    <div>
      <h2>
        {data && data.realtorForsaleQuery.autocomplete.length > 0
          ? "This is what we have found.."
          : "No results. Try a different search query"}
      </h2>
    </div>
  );
}
