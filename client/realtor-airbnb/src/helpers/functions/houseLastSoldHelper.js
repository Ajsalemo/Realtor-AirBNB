import Moment from 'react-moment';

export default function houseLastSoldHelper(sold_history) {
  return (
    <span className="pr-2">
      ${sold_history[0].listing.price} in <Moment format="YYYY">{sold_history[0].date}</Moment>
    </span>
  );
}
