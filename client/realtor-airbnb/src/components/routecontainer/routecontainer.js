import Home from "@pages/home/Home";
import RealtorDashboard from "@pages/realtordashboard/realtordashboard";
import RealtorListings from "@pages/realtorlistings/realtorlistings";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function RouteContainer() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/realtor-dashboard" exact component={RealtorDashboard} />
      <Route
        path="/listings/:slug_id/:state_code/:limit/:offset/:rentOrSell"
        exact
        component={RealtorListings}
      />
    </Router>
  );
}
