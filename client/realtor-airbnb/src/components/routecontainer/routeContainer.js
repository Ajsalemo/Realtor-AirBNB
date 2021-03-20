import Home from "@pages/home/home";
import RealtorDashboard from "@pages/realtordashboard/realtorDashboard";
import RealtorListings from "@pages/realtorlistings/realtorListings";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function RouteContainer() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/realtor-dashboard" exact component={RealtorDashboard} />
      <Route
        // the '?' symbol denotes optional paramters on the route
        path="/listings/:city/:state_code/:limit/:offset/:rentOrSell/:optPriceMin?/:optPriceMax?/:optPropType?/:optBedsMin?/:optBathsMin?"
        component={RealtorListings}
      />
    </Router>
  );
}
