import { useLazyQuery } from "@apollo/client";
import { AUTO_COMPLETE_QUERY } from "@apollographql_queries/autocomplete";
import { REALTOR_FORSALE_QUERY } from "@apollographql_queries/realtorforsalequery";
import FontAwesomeLib from "@components/fontawesomelib/fontawesomelib";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Field, Form, Formik } from "formik";
import filterByAreaTypeData from "helpers/filterByAreaTypeData";
import { useState } from "react";

export default function RealtorSearchbar() {
  const [autoCompleteSearchValues, setAutoCompleteSearchValues] = useState(null);
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

  return (
    <div className="bg-gray-200">
      <Formik
        initialValues={{
          location: "",
        }}
        onSubmit={async (values) => {
          await getRealtorSearchAutocompleteQuery({
            variables: {
              location: values.location,
            },
          });

          filterByAreaTypeData(
            realtorSearchAutoCompleteData,
            setAutoCompleteSearchValues
          );
          console.log(realtorSearchbarQueryData);
          console.log(autoCompleteSearchValues);

          await getRealtorSearchbarQuery({
            variables: {
              city: autoCompleteSearchValues[0].city,
              limit: 20, // Temporarily set to a hardcoded value
              offset: 0, // Temporarily set to a hardcoded value
              state_code: autoCompleteSearchValues[0].state_code,
            },
          });
        }}
      >
        {({ handleSubmit, values }) => (
          <div className="relative">
            <Form className="flex w-5/6 md:w-1/2 py-1 mx-auto">
              <Field
                name="location"
                placeholder="Address, School, City, ZIP or Neighborhood"
                className="w-full"
              />
              <button type="submit" onClick={handleSubmit}>
                <FontAwesomeLib
                  icon={faSearch}
                  size="2x"
                  classNames={"text-white ml-2"}
                />
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
