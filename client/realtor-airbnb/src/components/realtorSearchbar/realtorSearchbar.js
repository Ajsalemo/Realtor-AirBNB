import { useLazyQuery } from "@apollo/client";
import { AUTO_COMPLETE_QUERY } from "@apollographql_queries/autoComplete";
import FontAwesomeLib from "@components/fontawesomelib/fontAwesomeLib";
import RealtorSearchbarSelect from "@components/realtorsearchbarselect/realtorSearchbarSelect";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FormSchemaValidation } from "@helpers/formSchemaValidation/FormSchemaValidation";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function RealtorSearchbar() {
  const history = useHistory();
  const [isError, setIsError] = useState(false);
  const [optionalURLValues, setOptionalURLValues] = useState("");
  const [dataForNextPage, setDataForNextPage] = useState([]);
  // Autocomplete query to get needed information to pass into the for sale query
  const [getRealtorSearchAutocompleteQuery, { loading, data }] = useLazyQuery(
    AUTO_COMPLETE_QUERY
  );
  // When the Formik onSubmit function fires, it will update the 'data' returned from the Apollo/GraphQL query 'getRealtorSearchAutocompleteQuery' on line 14 (above)
  // useEffect is used here to listen to these changes and then use the 'history' hook to push to the /listings page which is set up to take in the parameterized data for processing
  // These changes only happen when the onSubmit function is fired, and not on page load - which is useful for a way to pull in fresh data when using this searchbar component
  useEffect(() => {
    if (data && !loading) {
      const { autocomplete } = data.autoCompleteQuery;
      for (let i = 0; i < autocomplete.length; i++) {
        if (
          autocomplete[i].area_type === "neighborhood" ||
          autocomplete[i].area_type === "address" ||
          autocomplete[i].area_type === "city"
        ) {
          setDataForNextPage(autocomplete[0]);
        }
      }
      history.push(
        `/listings/${dataForNextPage.city}/${dataForNextPage.state_code}/20/0/sell/${optionalURLValues.min_price}/${optionalURLValues.max_price}/${optionalURLValues.prop_type}/${optionalURLValues.beds_min}/${optionalURLValues.baths_min}`
      );
    }
  }, [
    data,
    dataForNextPage,
    history,
    loading,
    optionalURLValues,
    optionalURLValues.baths_min,
    optionalURLValues.beds_min,
    optionalURLValues.max_price,
    optionalURLValues.min_price,
    optionalURLValues.prop_type,
  ]);

  return (
    <>
      <div className="bg-gray-200">
        <Formik
          initialValues={{
            location: "",
          }}
          validationSchema={FormSchemaValidation}
          onSubmit={async (values) => {
            // Set errors to false initially
            setIsError(false);
            setOptionalURLValues(values);
            try {
              await getRealtorSearchAutocompleteQuery({
                variables: {
                  location: values.location,
                },
              });
            } catch (error) {
              setIsError(true);
            }
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <div className="relative">
              <Form className="flex w-5/6 md:w-1/2 py-1 pl-2">
                <Field
                  name="location"
                  placeholder="Address, School, City, ZIP or Neighborhood"
                  className="w-full"
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={loading}
                  className={!loading ? "cursor-pointer" : "cursor-default"}
                >
                  <FontAwesomeLib
                    icon={!loading ? faSearch : faSpinner}
                    size="2x"
                    classNames={
                      !loading
                        ? "text-white ml-2"
                        : "animate-spin text-red-600 ml-2 transition duration-400 ease-in-out"
                    }
                  />
                </button>
                <div className="flex pl-2">
                  {/* Select fields for the Search form */}
                  <RealtorSearchbarSelect />
                </div>
              </Form>
              {/* Display any errors with the form submission */}
              {errors.location && touched.location ? (
                <span className="text-red-700 font-suez-one pl-2">
                  {errors.location}
                </span>
              ) : null}
            </div>
          )}
        </Formik>
      </div>
      {/* Display non-form validation related errors - i.e, upstream not responsive/down */}
      <div className="text-center">
        {isError && (
          <span className="text-red-500">
            An error has occurred. Please try again.
          </span>
        )}
      </div>
    </>
  );
}
