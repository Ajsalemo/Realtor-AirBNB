import { useLazyQuery } from "@apollo/client";
import { AUTO_COMPLETE_QUERY } from "@apollographql_queries/autocomplete";
import FontAwesomeLib from "@components/fontawesomelib/fontawesomelib";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

export default function RealtorSearchbar() {
  const [realtorAutoCompletedValues, setRealtorAutoCompletedValues] = useState([]);
  const [getRealtorSearchAutocompleteQuery, { loading: realtorSearchAutoCompleteLoading, data: realtorSearchAutoCompleteData }] = useLazyQuery(
    AUTO_COMPLETE_QUERY
  );

  const handleOnKeyUp = async (values) => {
    // If the search query is less than 2 characters in length, don't execute the graphql query to prevent uneeded calls
    if (values.location.length < 2 || !values.location) return;
    console.log(values.location);
    await getRealtorSearchAutocompleteQuery({
      variables: { location: values.location },
    });

    // TODO - Move this into its own 'helper' function under @helpers
    // Logic - this checks for an existent value upon running the 'onKeyUp' handleOnKeyUp query to the Realtor API
    // Upon doing so, it loops over the result and checks for a certain 'area_type'
    // If it matches, it's placed into the useState value(s) to be returned at a later time
    if (realtorSearchAutoCompleteData && realtorSearchAutoCompleteData.autoCompleteQuery) {
      const { autocomplete } = realtorSearchAutoCompleteData.autoCompleteQuery;
      console.log(realtorSearchAutoCompleteData.autoCompleteQuery.autocomplete)
      for (let i = 0; i < autocomplete.length; i++) {
        if (autocomplete[i].area_type === "neighborhood" || autocomplete[i].area_type === "address" || autocomplete[i].area_type === "city") {
          console.log(autocomplete[i])
          setRealtorAutoCompletedValues(autocomplete[i])
        }
      }
    }
  };
  // Log the current stateful data from the autocomplete queries
  console.log(realtorAutoCompletedValues)
  
  return (
    <div className="bg-gray-200">
      <Formik
        initialValues={{
          location: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          console.log(values);
          // Reset the form after form submission
          resetForm();
        }}
      >
        {({ handleSubmit, values }) => (
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
        )}
      </Formik>
    </div>
  );
}
