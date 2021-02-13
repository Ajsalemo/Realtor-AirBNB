import FontAwesomeLib from "@components/fontawesomelib/fontawesomelib";
import Footer from "@components/footer/footer";
import Navbar from "@components/navbar/navbar";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RealtorDashboardBackgroundImage from "@images/backgrounds/realtor_dashboard_background.jpg";
import { Field, Form, Formik } from "formik";
import { LazyLoadImage } from "react-lazy-load-image-component";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function RealtorDashboard() {
  return (
    <div>
      <Navbar />
      <LazyLoadImage
        src={RealtorDashboardBackgroundImage}
        className="object-center object-cover w-full sm:h-96"
      />
      <div className="flex justify-center bg-gray-400 border-b-4 border-t-4 border-white">
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
          {({ isSubmitting }) => (
            <Form className="flex bg-gray-400 w-3/4 md:w-1/2 my-2">
              <Field
                name="location"
                placeholder="Address, School, City, ZIP or Neighborhood"
                className="w-full"
              />
              <button type="submit">
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
      <Footer classNames="bg-gray-400 h-12 absolute bottom-0 w-full border-t-4 font-suez-one text-white text-center pt-1" />
    </div>
  );
}
