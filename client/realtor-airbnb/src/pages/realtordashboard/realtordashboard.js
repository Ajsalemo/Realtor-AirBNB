import { useLazyQuery } from "@apollo/client";
import { REALTOR_FORSALE_QUERY } from "@apollographql_queries/realtorforsalequery";
import DisplaySuggestions from "@components/displaysuggestions/displaysuggestions";
import FontAwesomeLib from "@components/fontawesomelib/fontawesomelib";
import Footer from "@components/footer/footer";
import LazyLoadImages from "@components/lazyloadimages/lazyloadimages";
import Navbar from "@components/navbar/navbar";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import RealtorDashboardBackgroundImage from "@images/backgrounds/realtor_dashboard_background.jpg";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

export default function RealtorDashboard() {
  const [getRealtorForsaleQuery, { loading, data }] = useLazyQuery(
    REALTOR_FORSALE_QUERY
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
    <div>
      <Navbar />
      <LazyLoadImages
        src={RealtorDashboardBackgroundImage}
        classNames="object-center object-cover w-full sm:h-96"
      />
      <div className="flex flex-col justify-center md:flex-row bg-gray-400 border-b-4 border-t-4 border-white">
        <button
          className={
            isForSale
              ? "transition duration-500 ease-in-out rounded-lg border-2 border-white py-1 px-6 my-1 font-suez-one bg-red-600 w-3/4 sm:w-1/2 mx-auto md:m-1 md:w-32"
              : "rounded-lg border-2 border-white py-1 px-6 my-1 font-suez-one w-3/4 sm:w-1/2 mx-auto md:m-1 md:w-32"
          }
          onClick={() => toggleSaleSearchMode()}
        >
          For Sale
        </button>
        <button
          className={
            isForRent
              ? "transition duration-500 ease-in-out rounded-lg border-2 border-white py-1 px-6 my-1 font-suez-one bg-red-600 w-3/4 sm:w-1/2 mx-auto md:m-1 md:w-32"
              : "rounded-lg border-2 border-white py-1 px-6 my-1 font-suez-one w-3/4 sm:w-1/2 mx-auto md:m-1 md:w-32"
          }
          onClick={() => toggleRentSearchMode()}
        >
          For Rent
        </button>
        <Formik
          initialValues={{
            location: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            await getRealtorForsaleQuery({
              variables: { location: values.location },
            });
            // Reset the form after form submission
            resetForm();
          }}
        >
          {({ isSubmitting, handleSubmit }) => (
            <Form className="flex bg-gray-400 w-5/6 md:w-1/2 my-2 mx-auto">
              <Field
                name="location"
                placeholder="Address, School, City, ZIP or Neighborhood"
                className="w-full"
              />
              <button type="submit" onClick={handleSubmit} disabled={loading}>
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
          )}
        </Formik>
      </div>
      <DisplaySuggestions data={data} />
      <Footer classNames="bg-gray-400 h-12 absolute bottom-0 w-full border-t-4 font-suez-one text-white text-center pt-1" />
    </div>
  );
}
