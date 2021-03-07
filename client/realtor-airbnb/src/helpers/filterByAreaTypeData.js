export default function filterByAreaTypeData(
  data,
  setRealtorAutoCompletedValues
) {
  // Logic - this checks for an existent value upon running the 'onKeyUp' handleOnKeyUp query to the Realtor API
  // Upon doing so, it loops over the result and checks for a certain 'area_type'
  // If it matches, it's placed into the useState value(s) to be returned at a later time
  if (data && data.autoCompleteQuery) {
    const { autocomplete } = data.autoCompleteQuery;

    for (let i = 0; i < autocomplete.length; i++) {
      if (
        autocomplete[i].area_type === "neighborhood" ||
        autocomplete[i].area_type === "address" ||
        autocomplete[i].area_type === "city"
      ) {
        setRealtorAutoCompletedValues(autocomplete[i]);
      }
    }
  }
}
