import { useParams } from "react-router-dom";

export default function RealtorListings() {
  const { slug_id, state_code, limit, offset } = useParams();
  console.log(slug_id);
  console.log(state_code);
  console.log(limit);
  console.log(offset);
  return <div>test</div>;
}
