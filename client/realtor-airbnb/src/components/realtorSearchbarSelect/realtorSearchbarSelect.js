import { realtorSearchbarBathMin } from "@helpers/formValues/realtorSearchbarBathMin";
import { realtorSearchbarBedMin } from "@helpers/formValues/realtorSearchbarBedMin";
import { realtorSearchbarMaxPrice } from "@helpers/formValues/realtorSearchbarMaxPrice";
import { realtorSearchbarMinPrice } from "@helpers/formValues/realtorSearchbarMinPrice";
import { realtorSearchBarPropType } from "@helpers/formValues/realtorSearchBarPropType";
import { Field } from "formik";

export default function RealtorSearchbarSelect() {
  return (
    <>
      <Field name="min_price" as="select" className="h-full ml-2">
        <option selected value="Min Price" disabled>
          Min Price
        </option>
        {realtorSearchbarMinPrice.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field name="max_price" as="select" className="h-full ml-2">
        <option selected value="Max Price" disabled>
          Max Price
        </option>
        {realtorSearchbarMaxPrice.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field name="prop_type" as="select" className="h-full ml-2">
        <option selected value="Property Type" disabled>
          Property Type
        </option>
        {realtorSearchBarPropType.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field name="beds_min" as="select" className="h-full ml-2">
        <option selected value="Property Type" disabled>
          Beds
        </option>
        {realtorSearchbarBedMin.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
      <Field name="baths_min" as="select" className="h-full ml-2">
        <option selected value="Property Type" disabled>
          Baths
        </option>
        {realtorSearchbarBathMin.map((minPrice) => (
          <option value={minPrice.value} key={minPrice.key}>
            {minPrice.display}
          </option>
        ))}
      </Field>
    </>
  );
}
