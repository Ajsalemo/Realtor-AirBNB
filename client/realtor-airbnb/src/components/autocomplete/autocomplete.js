import filterByAreaTypeDisplay from "@helpers/filterByAreaTypeDisplay";

export default function Autocomplete({
  realtorAutoCompletedValues,
  setFieldValue,
  setCityValue,
  setStateCodeValue
}) {
  return (
    <div
      className={
        realtorAutoCompletedValues.length < 2
          ? "hidden"
          : "bg-gray-400 w-1/4 absolute z-10 rounded-md left-1/4"
      }
    >
      <ul className="p-2">
        {realtorAutoCompletedValues.map((autoCompletedValues) => (
          <li
            className="text-white cursor-pointer"
            onClick={() => {
              setFieldValue(
                "location",
                filterByAreaTypeDisplay(autoCompletedValues)
              );
              setCityValue(autoCompletedValues.city);
              setStateCodeValue(autoCompletedValues.state_code)
            }}
          >
            {filterByAreaTypeDisplay(autoCompletedValues)}
          </li>
        ))}
      </ul>
    </div>
  );
}
