import { useLazyQuery } from "@apollo/client";
import { AUTO_COMPLETE_QUERY } from "@apollographql_queries/autocomplete";
import { REALTOR_FORSALE_QUERY } from "@apollographql_queries/realtorforsalequery";
import FontAwesomeLib from "@components/fontawesomelib/fontawesomelib";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Field, Form, Formik } from "formik";
import filterByAreaTypeData from "helpers/filterByAreaTypeData";
import { Fragment, useState } from "react";

export default function RealtorSearchbar() {
  const [autoCompleteSearchValues, setAutoCompleteSearchValues] = useState(
    null
  );
  // Query to get property for sale listings
  const [
    getRealtorSearchbarQuery,
    { loading: realtorSearchbarQueryLoading, 
      // data: realtorSearchbarQueryData 
    },
  ] = useLazyQuery(REALTOR_FORSALE_QUERY);

  // Autocomplete query to get needed information to pass into the for sale query
  const [
    getRealtorSearchAutocompleteQuery,
    {
      loading: realtorSearchAutoCompleteLoading,
      data: realtorSearchAutoCompleteData,
    },
  ] = useLazyQuery(AUTO_COMPLETE_QUERY);

  return (
    <Fragment>
      <div className="bg-gray-200">
        <Formik
          initialValues={{
            location: "",
          }}
          onSubmit={(values) => {
            try {
              // Get the autocomplete values to plug in 'city' and 'state_code' into the property listing query
              getRealtorSearchAutocompleteQuery({
                variables: {
                  location: values.location,
                },
              });

              // Wait for the autocomplete query to return a result before executing the following functions
              if (!realtorSearchAutoCompleteLoading) {
                // When a result is returned from the autocomplete query, filter out unneeded 'area_type' attributes
                filterByAreaTypeData(
                  realtorSearchAutoCompleteData,
                  setAutoCompleteSearchValues
                );
                //  Plug in the 'city' and 'state_code' from the autocomplete result into this property listing query
                getRealtorSearchbarQuery({
                  variables: {
                    city: autoCompleteSearchValues[0].city,
                    limit: 20, // Temporarily set to a hardcoded value
                    offset: 0, // Temporarily set to a hardcoded value
                    state_code: autoCompleteSearchValues[0].state_code,
                  },
                });
              }
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({ handleSubmit }) => (
            <div className="relative">
              <Form className="flex w-5/6 md:w-1/2 py-1 mx-auto">
                <Field
                  name="location"
                  placeholder="Address, School, City, ZIP or Neighborhood"
                  className="w-full"
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={
                    realtorSearchAutoCompleteLoading ||
                    realtorSearchbarQueryLoading
                  }
                  className={
                    !realtorSearchAutoCompleteLoading ||
                    !realtorSearchbarQueryLoading
                      ? "cursor-pointer"
                      : "cursor-default"
                  }
                >
                  <FontAwesomeLib
                    icon={
                      !realtorSearchAutoCompleteLoading ||
                      !realtorSearchbarQueryLoading
                        ? faSearch
                        : faSpinner
                    }
                    size="2x"
                    classNames={
                      !realtorSearchAutoCompleteLoading ||
                      !realtorSearchbarQueryLoading
                        ? "text-white ml-2"
                        : "animate-spin text-red-600 ml-2 transition duration-400 ease-in-out"
                    }
                  />
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
      <div className="text-center">
        <span>Error placeholder</span>
      </div>
    </Fragment>
  );
}
