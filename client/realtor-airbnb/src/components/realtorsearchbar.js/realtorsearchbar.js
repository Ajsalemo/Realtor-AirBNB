import FontAwesomeLib from "@components/fontawesomelib/fontawesomelib";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Field, Form, Formik } from "formik";

export default function RealtorSearchbar() {
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
        {({ handleSubmit }) => (
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
        )}
      </Formik>
    </div>
  );
}
