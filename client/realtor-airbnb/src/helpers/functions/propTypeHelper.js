export default function propTypeHelper(propType) {
  // Switch statement to filter output responses by prop type // ex., single_family, multi_family, etc.
  switch (propType && propType.prop_type.toLowerCase()) {
    case "single_family":
      return "Single Family Home";
    case "multi_family":
      return "Multi Family Home";
    case "condo":
      return "Condominium";
    case "mobile":
      return "Mobile Home";
    case "land":
      return "Land";
    case "other":
      return "Other";
    default:
      break;
  }
}
