import DisplaySuggestions from "@components/displaysuggestions/displaysuggestions";
import FontAwesomeLib from "@components/fontawesomelib/fontawesomelib";
import Footer from "@components/footer/footer";
import Navbar from "@components/navbar/navbar";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RealtorDashboardBackgroundImage from "@images/backgrounds/realtor_dashboard_background.jpg";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLazyQuery } from "@apollo/client";
import { REALTOR_FORSALE_QUERY } from "../../apollographql/queries/realtorforsalequery";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function RealtorDashboard() {
  const [getRealtorForsaleQuery, { loading, data }] = useLazyQuery(
    REALTOR_FORSALE_QUERY
  );
  console.log(data)
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
      <LazyLoadImage
        src={RealtorDashboardBackgroundImage}
        className="object-center object-cover w-full sm:h-96"
      />
      <div className="flex justify-center bg-gray-400 border-b-4 border-t-4 border-white">
        <button
          className={
            isForSale
              ? "transition duration-500 ease-in-out rounded-lg border-2 border-white py-1 px-6 mx-1 my-1 font-suez-one bg-red-600"
              : "rounded-lg border-2 border-white py-1 px-6 mx-1 my-1 font-suez-one"
          }
          onClick={() => toggleSaleSearchMode()}
        >
          For Sale
        </button>
        <button
          className={
            isForRent
              ? "transition duration-500 ease-in-out rounded-lg border-2 border-white py-1 px-6 mx-1 my-1 font-suez-one bg-red-600"
              : "rounded-lg border-2 border-white py-1 px-6 mx-1 my-1 font-suez-one"
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
            await sleep(500);
            console.log(values);
            // Reset the form after form submission
            resetForm();
          }}
        >
          {({ isSubmitting, values }) => (
            <Form className="flex bg-gray-400 w-3/4 md:w-1/2 my-2">
              <Field
                name="location"
                placeholder="Address, School, City, ZIP or Neighborhood"
                className="w-full"
              />
              <button
                type="submit"
                onClick={() =>
                  getRealtorForsaleQuery({
                    variables: { location: values.location },
                  })
                }
              >
                <FontAwesomeLib
                  icon={faSearch}
                  size="2x"
                  classNames="text-white ml-2"
                />
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <DisplaySuggestions />
      <Footer classNames="bg-gray-400 h-12 absolute bottom-0 w-full border-t-4 font-suez-one text-white text-center pt-1" />
    </div>
  );
}
