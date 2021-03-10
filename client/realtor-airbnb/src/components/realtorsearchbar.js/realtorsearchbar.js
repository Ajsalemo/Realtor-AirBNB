import { useLazyQuery } from "@apollo/client";
import { AUTO_COMPLETE_QUERY } from "@apollographql_queries/autocomplete";
import { REALTOR_FORSALE_QUERY } from "@apollographql_queries/realtorforsalequery";
import AutoComplete from "@components/autocomplete/autocomplete";
import FontAwesomeLib from "@components/fontawesomelib/fontawesomelib";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Field, Form, Formik } from "formik";
import filterByAreaTypeData from "helpers/filterByAreaTypeData";
import { useState } from "react";

export default function RealtorSearchbar() {
  const [realtorAutoCompletedValues, setRealtorAutoCompletedValues] = useState(
    []
  );
  // State_code stateful to be passed into the onSubmit function when submitting the form
  const [stateCodeValue, setStateCodeValue] = useState(null);
  // City stateful value to be passed into the onSubmit function when submitting the form
  const [cityValue, setCityValue] = useState(null);

  // Query to get property for sale listings
  const [
    getRealtorSearchbarQuery,
    {
      // loading: realtorSearchbarQueryLoading,
      data: realtorSearchbarQueryData,
    },
  ] = useLazyQuery(REALTOR_FORSALE_QUERY);

  // Autocomplete query to get needed information to pass into the for sale query
  const [
    getRealtorSearchAutocompleteQuery,
    {
      // loading: realtorSearchAutoCompleteLoading,
      data: realtorSearchAutoCompleteData,
    },
  ] = useLazyQuery(AUTO_COMPLETE_QUERY);

  const handleOnKeyUp = async (values) => {
    // If the search query is less than 2 characters in length, don't execute the graphql query to prevent uneeded calls
    if (values.location.length < 2 || !values.location) return;
    await getRealtorSearchAutocompleteQuery({
      variables: { location: values.location },
    });

    // Logic - this checks for an existent value upon running the 'onKeyUp' handleOnKeyUp query to the Realtor API
    // Upon doing so, it loops over the result and checks for a certain 'area_type'
    // If it matches, it's placed into the useState value(s) to be returned at a later time
    filterByAreaTypeData(
      realtorSearchAutoCompleteData,
      setRealtorAutoCompletedValues
    );
  };
  console.log(realtorSearchbarQueryData)
  return (
    <div className="bg-gray-200">
      <Formik
        initialValues={{
          location: "",
        }}
        onSubmit={async (values) => {
          // If the city and state_code arguments are not null then this query can be executed
          if (cityValue !== null && stateCodeValue !== null) {
            await getRealtorSearchbarQuery({
              variables: {
                city: cityValue,
                limit: 20, // Temporarily set to a hardcoded value
                offset: 0, // Temporarily set to a hardcoded value
                state_code: stateCodeValue,
              },
            });
          }
        }}
      >
        {({ handleSubmit, values, setFieldValue }) => (
          <div className="relative">
            <Form className="flex w-5/6 md:w-1/2 py-1 mx-auto">
              <Field
                name="location"
                placeholder="Address, School, City, ZIP or Neighborhood"
                className="w-full"
                onKeyUp={() => handleOnKeyUp(values)}
              />
              <button type="submit" onClick={handleSubmit}>
                <FontAwesomeLib
                  icon={faSearch}
                  size="2x"
                  classNames={"text-white ml-2"}
                />
              </button>
            </Form>
            <AutoComplete
              realtorAutoCompletedValues={realtorAutoCompletedValues}
              setFieldValue={setFieldValue}
              setStateCodeValue={setStateCodeValue}
              setCityValue={setCityValue}
            />
          </div>
        )}
      </Formik>
    </div>
  );
}
