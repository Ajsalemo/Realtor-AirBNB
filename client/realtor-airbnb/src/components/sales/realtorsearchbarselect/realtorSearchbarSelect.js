import { realtorSearchbarBathMin } from "@helpers/formValues/realtorSearchbarBathMin";
import { realtorSearchbarBedMin } from "@helpers/formValues/realtorSearchbarBedMin";
import { realtorSearchbarMaxPrice } from "@helpers/formValues/realtorSearchbarMaxPrice";
import { realtorSearchbarMinPrice } from "@helpers/formValues/realtorSearchbarMinPrice";
import { realtorSearchbarPropType } from "@helpers/formValues/realtorSearchbarPropType";
import { realtorSearchbarResults } from "@helpers/formValues/realtorSearchbarResults";
import { Field } from "formik";

export default function RealtorSearchbarSelect({ values }) {
  return (
    <>
      <Field
        name="minPrice"
        as="select"
        value={values.minPrice} 
        className="h-full ml-2 rounded-none bg-primary text-white border-2 border-gray-400 rounded-sm"
      >
        <option value={0} defaultValue disabled>
          Min Price
        </option>
        {realtorSearchbarMinPrice.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field
        name="maxPrice"
        as="select"
        value={values.maxPrice} 
        className="h-full ml-2 rounded-none bg-primary text-white border-2 border-gray-400 rounded-sm"
      >
        <option value={0} defaultValue disabled>
          Max Price
        </option>
        {realtorSearchbarMaxPrice.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field
        name="propType"
        as="select"
        value={values.propType} 
        className="h-full ml-2 rounded-none bg-primary text-white border-2 border-gray-400 rounded-sm"
      >
        <option value="single_family" defaultValue disabled>
          Property Type
        </option>
        {realtorSearchbarPropType.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field
        name="bedsMin"
        as="select"
        value={values.bedsMin} 
        className="h-full ml-2 rounded-none bg-primary text-white border-2 border-gray-400 rounded-sm"
      >
        <option value={0} defaultValue disabled>
          Beds
        </option>
        {realtorSearchbarBedMin.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field
        name="bathsMin"
        as="select"
        value={values.bathsMin} 
        className="h-full ml-2 rounded-none bg-primary text-white border-2 border-gray-400 rounded-sm"
      >
        <option value={0} defaultValue disabled>
          Baths
        </option>
        {realtorSearchbarBathMin.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field
        name="results"
        as="select"
        value={values.results} 
        className="h-full ml-2 rounded-none bg-primary text-white border-2 border-gray-400 rounded-sm"
      >
        {/* If no 'results' value is chosen, then it will default to 10,000 (arbitrary number, equivalent to no limit) */}
        <option value={10000} defaultValue disabled>
          Results
        </option>
        {realtorSearchbarResults.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field
        name="rentOrSell"
        as="select"
        value={values.rentOrSell} 
        className="h-full ml-2 rounded-none bg-primary text-white border-2 border-gray-400 rounded-sm"
      >
        <option value="sell" defaultValue disabled>
          For Sale
        </option>
        <option value="sell">For Sale</option>
        <option value="rent">For Rent</option>
        ))
      </Field>
    </>
  );
}
