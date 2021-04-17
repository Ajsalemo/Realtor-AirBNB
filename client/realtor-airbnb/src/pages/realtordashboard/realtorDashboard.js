import { useLazyQuery } from "@apollo/client";
import { AUTO_COMPLETE_QUERY } from "@apollographql_queries/autoComplete";
import DisplaySuggestions from "@components/sales/displaysuggestions/displaySuggestions";
import FontAwesomeLib from "@components/shared/fontawesomelib/fontAwesomeLib";
import Footer from "@components/shared/footer/footer";
import LazyLoadImages from "@components/shared/lazyloadimages/lazyLoadImages";
import Navbar from "@components/shared/navbar/navbar";
import { faCircleNotch, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FormSchemaValidation } from "@helpers/formSchemaValidation/FormSchemaValidation";
import RealtorDashboardBackgroundImage from "@images/backgrounds/realtor_dashboard_background.jpg";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

export default function RealtorDashboard() {
  const [
    getAutocompleteQuery,
    { loading, error: apolloGraphqlError, data },
  ] = useLazyQuery(AUTO_COMPLETE_QUERY);
  const [isError, setIsError] = useState(false);
  const [isForSale, setIsForSale] = useState(true);
  const [isForRent, setIsForRent] = useState(false);
  // Functions to toggle the search mode state between looking for homes for rent or homes for sale
  const toggleSaleSearchMode = () => {
    if (isForSale) return;
    if (!isForSale && isForRent) {
      setIsForSale(true);
      setIsForRent(false);
    }
  };

  const toggleRentSearchMode = () => {
    if (isForRent) return;
    if (!isForRent && isForSale) {
      setIsForRent(true);
      setIsForSale(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-secondary text-white">
      <Navbar />
      <div className="pb-12">
        <LazyLoadImages
          src={RealtorDashboardBackgroundImage}
          classNames="object-center object-cover w-full sm:h-96"
        />
        <div className="flex flex-col justify-center md:flex-row bg-primary border-b-2 border-t-2 border-white">
          <button
            className={
              isForSale
                ? "text-white transition duration-500 ease-in-out rounded-lg border-2 border-white py-1 px-6 my-1 font-suez-one bg-red-600 w-3/4 sm:w-1/2 mx-auto md:m-1 md:w-40 max-h-10"
                : "text-white rounded-lg border-2 border-white py-1 px-6 my-1 font-suez-one w-3/4 sm:w-1/2 mx-auto md:m-1 md:w-40 max-h-10"
            }
            onClick={() => toggleSaleSearchMode()}
          >
            For Sale
          </button>
          <button
            className={
              isForRent
                ? "text-white transition duration-500 ease-in-out rounded-lg border-2 border-white py-1 px-6 my-1 font-suez-one bg-red-600 w-3/4 sm:w-1/2 mx-auto md:m-1 md:w-40 max-h-10"
                : "text-white rounded-lg border-2 border-white py-1 px-6 my-1 font-suez-one w-3/4 sm:w-1/2 mx-auto md:m-1 md:w-40 max-h-10"
            }
            onClick={() => toggleRentSearchMode()}
          >
            For Rent
          </button>
          <Formik
            initialValues={{
              location: "",
            }}
            validationSchema={FormSchemaValidation}
            onSubmit={async (values, { resetForm }) => {
              setIsError(false);
              try {
                // If a Apollo/GraphQL error occurs when submitting, set the error state to true to display there is an issue
                if (apolloGraphqlError) {
                  setIsError(true);
                }
                await getAutocompleteQuery({
                  variables: { location: values.location },
                });
                // Reset the form after form submission
                resetForm();
              } catch (error) {
                setIsError(true);
              }
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <div className="w-full text-center md:text-left">
                <Form className="bg-primary w-full">
                  <div className="flex-col w-5/6 md:w-1/2 my-2 mx-auto">
                    <div className="flex">
                      <Field
                        name="location"
                        placeholder="Address, School, City, ZIP or Neighborhood"
                        className="w-full"
                      />
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={
                          loading || (errors.location && touched.location)
                        }
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
                          size="2x"
                          classNames={
                            !loading && errors.location && touched.location
                              ? "text-red-600 ml-2"
                              : loading
                              ? "animate-spin text-red-600 ml-2 transition duration-400 ease-in-out"
                              : "text-white ml-2"
                          }
                        />
                      </button>
                    </div>
                    {/* Display any errors with the form submission */}
                    {errors.location && touched.location ? (
                      <span className="text-red-700 font-suez-one">
                        {errors.location}
                      </span>
                    ) : null}
                  </div>
                </Form>
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
        <DisplaySuggestions
          data={data}
          isForRent={isForRent}
          isForSale={isForRent}
        />
      </div>
      <Footer />
    </div>
  );
}
