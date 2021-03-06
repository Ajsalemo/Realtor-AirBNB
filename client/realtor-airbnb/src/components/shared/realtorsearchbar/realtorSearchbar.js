import { useLazyQuery } from "@apollo/client";
import { AUTO_COMPLETE_QUERY } from "@apollographql_queries/autoComplete";
import FontAwesomeLib from "@components/shared/fontawesomelib/fontAwesomeLib";
import RealtorSearchbarSelect from "@components/shared/realtorsearchbarselect/realtorSearchbarSelect";
import {
  faAngleLeft,
  faCircleNotch,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FormSchemaValidation } from "@helpers/formSchemaValidation/FormSchemaValidation";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function RealtorSearchbar() {
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;
  // Check if the 'window' object is available
  const isBrowser = typeof window !== "undefined";
  const [isError, setIsError] = useState(false);
  const [isUserError, setIsUserError] = useState(false);
  const [noResultsMessage, setNoResultsMessage] = useState("");
  const [optionalURLValues, setOptionalURLValues] = useState("");
  // Autocomplete query to get needed information to pass into the for sale query
  const [
    getRealtorSearchAutocompleteQuery,
    { loading, error: apolloGraphqlError, data },
  ] = useLazyQuery(AUTO_COMPLETE_QUERY);
  // When the Formik onSubmit function fires, it will update the 'data' returned from the Apollo/GraphQL query 'getRealtorSearchAutocompleteQuery'
  // useEffect is used here to listen to these changes and then use the 'history' hook to push to the /listings page which is set up to take in the parameterized data for processing
  // These changes only happen when the onSubmit function is fired, and not on page load - which is useful for a way to pull in fresh data when using this searchbar component
  useEffect(() => {
    // Start at the top of the page for new search queries
    if (isBrowser) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (data && !loading) {
      const { autocomplete } = data.autoCompleteQuery;
      if (
        autocomplete &&
        autocomplete[0] &&
        (autocomplete[0].area_type === "neighborhood" ||
          autocomplete[0].area_type === "address" ||
          autocomplete[0].area_type === "city")
      ) {
        setIsUserError(false);
        setNoResultsMessage("");

        history.push(
          `/listings/${autocomplete[0].city}/${autocomplete[0].state_code}/${optionalURLValues.results}/0/${optionalURLValues.rentOrSell}/${optionalURLValues.minPrice}/${optionalURLValues.maxPrice}/${optionalURLValues.propType}/${optionalURLValues.bedsMin}/${optionalURLValues.bathsMin}`
        );
      } else {
        setIsUserError(true);
        setNoResultsMessage(
          "No results match that search term. Please try again."
        );
      }
    }
  }, [
    data,
    history,
    isBrowser,
    loading,
    optionalURLValues,
    optionalURLValues.bathsMin,
    optionalURLValues.bedsMin,
    optionalURLValues.maxPrice,
    optionalURLValues.minPrice,
    optionalURLValues.propType,
    optionalURLValues.rentOrSell,
  ]);

  return (
    <>
      <div className="bg-primary border-b-2 border-white">
        <Formik
          enableReinitialize={true}
          initialValues={{
            location: "",
            minPrice: 0,
            maxPrice: 0,
            propType: "any",
            bedsMin: 0,
            bathsMin: 0,
            results: 10000,
            rentOrSell: "sell",
          }}
          validationSchema={FormSchemaValidation}
          onSubmit={async (values) => {
            // Set errors to false initially
            setIsError(false);
            setOptionalURLValues(values);

            // If a Apollo/GraphQL error occurs when submitting, set the error state to true to display there is an issue
            if (apolloGraphqlError) {
              setIsError(true);
            }

            try {
              await getRealtorSearchAutocompleteQuery({
                variables: {
                  location: values.location,
                },
              });
            } catch (error) {
              setIsError(true);
              setNoResultsMessage("An error has occured. Please try again.");
            }
          }}
        >
          {({ handleSubmit, errors, touched, values }) => (
            <div className="relative">
              <Form className="flex flex-col py-1 lg:flex-row h-8">
                <div className="flex px-2 pb-2 md:pb-0 md:w-full">
                  <Field
                    name="location"
                    placeholder="Address, School, City, ZIP or Neighborhood"
                    className="w-full rounded-none"
                  />
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={loading || (errors.location && touched.location)}
                    className={
                      !loading && errors.location && touched.location
                        ? "cursor-default"
                        : loading
                        ? "cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    <FontAwesomeLib
                      icon={!loading ? faSearch : faCircleNotch}
                      classNames={
                        !loading && errors.location && touched.location
                          ? "text-red-600 ml-2 text-xl"
                          : loading
                          ? "animate-spin text-red-600 ml-2 transition duration-400 ease-in-out text-xl"
                          : "text-white ml-2 text-xl"
                      }
                    />
                  </button>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 md:flex bg-primary lg:mt-0 md:mt-2">
                  {/* Select fields for the Search form */}
                  <RealtorSearchbarSelect values={values} />
                </div>
              </Form>
              {/* Display any errors with the form submission */}
              {errors.location && touched.location ? (
                <span className="text-red-700 font-raleway pl-2">
                  {errors.location}
                </span>
              ) : null}
              {/* Display a link to go back to the results page - only display this on the details page for sales/rental properties*/}
              {path.includes("/detail") ? (
                <button
                  onClick={() => history.goBack()}
                  className="text-white pl-2 block"
                >
                  <FontAwesomeLib
                    icon={faAngleLeft}
                    classNames="text-white mr-2"
                  />
                  Back to results
                </button>
              ) : null}
            </div>
          )}
        </Formik>
      </div>
      {/* Display non-form validation related errors - i.e, upstream not responsive/down */}
      <div className="text-center">
        {isError && <span className="text-red-500">{noResultsMessage}</span>}
      </div>
      {/* Display user related error messages - i.e, not valid search term */}
      <div className="text-center">
        {isUserError && (
          <span className="text-red-500">{noResultsMessage}</span>
        )}
      </div>
    </>
  );
}
