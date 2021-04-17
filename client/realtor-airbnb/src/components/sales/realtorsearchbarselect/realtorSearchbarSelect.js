import { realtorSearchbarBathMin } from "@helpers/formValues/realtorSearchbarBathMin";
import { realtorSearchbarBedMin } from "@helpers/formValues/realtorSearchbarBedMin";
import { realtorSearchbarMaxPrice } from "@helpers/formValues/realtorSearchbarMaxPrice";
import { realtorSearchbarMinPrice } from "@helpers/formValues/realtorSearchbarMinPrice";
import { realtorSearchbarPropType } from "@helpers/formValues/realtorSearchbarPropType";
import { realtorSearchbarResults } from "@helpers/formValues/realtorSearchbarResults";
import { Field } from "formik";

export default function RealtorSearchbarSelect() {
  return (
    <>
      <Field name="min_price" as="select" defaultValue="Min Price" className="h-full ml-2">
        <option value="Min Price" disabled>
          Min Price
        </option>
        {realtorSearchbarMinPrice.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field name="max_price" as="select" defaultValue="Max Price" className="h-full ml-2">
        <option value="Max Price" disabled>
          Max Price
        </option>
        {realtorSearchbarMaxPrice.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field name="prop_type" as="select" defaultValue="Property Type" className="h-full ml-2">
        <option value="Property Type" disabled>
          Property Type
        </option>
        {realtorSearchbarPropType.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field name="beds_min" as="select" defaultValue="Beds" className="h-full ml-2">
        <option value="Beds" disabled>
          Beds
        </option>
        {realtorSearchbarBedMin.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field name="baths_min" as="select" defaultValue="Baths" className="h-full ml-2">
        <option value="Baths" disabled>
          Baths
        </option>
        {realtorSearchbarBathMin.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field name="results" as="select" defaultValue="10000"  className="h-full ml-2">
        {/* If no 'results' value is chosen, then it will default to 10,000 (arbitrary number, equivalent to no limit) */}
        <option value="10000" disabled>
          Results
        </option>
        {realtorSearchbarResults.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
    </>
  );
}
