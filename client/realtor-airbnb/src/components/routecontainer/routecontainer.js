import Home from "@pages/home/home";
import RealtorDashboard from "@pages/realtorDashboard/realtorDashboard";
import RealtorListings from "@pages/realtorListings/realtorListings";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function RouteContainer() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/realtor-dashboard" exact component={RealtorDashboard} />
      <Route
        path="/listings/:city/:state_code/:limit/:offset/:rentOrSell"
        exact
        component={RealtorListings}
      />
    </Router>
  );
}
