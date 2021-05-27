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
      <Field
        name="minPrice"
        as="select"
        className="h-full ml-2 rounded-none"
        value=""
      >
        <option value="Min Price" disabled>
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
        className="h-full ml-2 rounded-none"
        value=""
      >
        <option value="Max Price" disabled>
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
        className="h-full ml-2 rounded-none"
        value=""
      >
        <option value="Property Type" disabled>
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
        value="Beds"
        className="h-full ml-2 rounded-none"
      >
        <option value="Beds" disabled>
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
        className="h-full ml-2 rounded-none"
        value=""
      >
        <option value="Baths" disabled>
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
        className="h-full ml-2 rounded-none"
        value=""
      >
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
      <Field
        name="rentOrSell"
        as="select"
        className="h-full ml-2 rounded-none"
        value=""
      >
        <option value="sell" disabled>
          For Sale
        </option>
        <option value="sell">For Sale</option>
        <option value="rent">For Rent</option>
        ))
      </Field>
    </>
  );
}
