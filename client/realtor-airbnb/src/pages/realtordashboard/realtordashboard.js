import { useLazyQuery } from "@apollo/client";
import { AUTO_COMPLETE_QUERY } from "@apollographql_queries/autoComplete";
import DisplaySuggestions from "@components/displaySuggestions/displaySuggestions";
import FontAwesomeLib from "@components/fontAwesomeLib/fontAwesomeLib";
import Footer from "@components/footer/footer";
import LazyLoadImages from "@components/lazyLoadImages/lazyLoadImages";
import Navbar from "@components/navbar/navbar";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FormSchemaValidation } from "@helpers/formSchemaValidation/FormSchemaValidation";
import RealtorDashboardBackgroundImage from "@images/backgrounds/realtor_dashboard_background.jpg";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

export default function RealtorDashboard() {
  const [getAutocompleteQuery, { loading, data }] = useLazyQuery(
    AUTO_COMPLETE_QUERY
  );

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
    <div className="min-h-screen relative">
      <Navbar />
      <div className="pb-12">
        <LazyLoadImages
          src={RealtorDashboardBackgroundImage}
          classNames="object-center object-cover w-full sm:h-96"
        />
        <div className="flex flex-col justify-center md:flex-row bg-gray-400 border-b-4 border-t-4 border-white">
          <button
            className={
              isForSale
                ? "transition duration-500 ease-in-out rounded-lg border-2 border-white py-1 px-6 my-1 font-suez-one bg-red-600 w-3/4 sm:w-1/2 mx-auto md:m-1 md:w-40 max-h-10"
                : "rounded-lg border-2 border-white py-1 px-6 my-1 font-suez-one w-3/4 sm:w-1/2 mx-auto md:m-1 md:w-40 max-h-10"
            }
            onClick={() => toggleSaleSearchMode()}
          >
            For Sale
          </button>
          <button
            className={
              isForRent
                ? "transition duration-500 ease-in-out rounded-lg border-2 border-white py-1 px-6 my-1 font-suez-one bg-red-600 w-3/4 sm:w-1/2 mx-auto md:m-1 md:w-40 max-h-10"
                : "rounded-lg border-2 border-white py-1 px-6 my-1 font-suez-one w-3/4 sm:w-1/2 mx-auto md:m-1 md:w-40 max-h-10"
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
              await getAutocompleteQuery({
                variables: { location: values.location },
              });
              // Reset the form after form submission
              resetForm();
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <div className="w-full text-center">
                <Form className="flex bg-gray-400 w-5/6 md:w-1/2 my-2 mx-auto">
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
                </Form>
                {/* Display any errors with the form submission */}
                {errors.location && touched.location ? (
                  <span className="text-red-700 font-suez-one">
                    {errors.location}
                  </span>
                ) : null}
              </div>
            )}
          </Formik>
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
