import Home from "@pages/home/home";
import PageNotFound from "@pages/pagenotfound/pageNotFound";
import Profile from "@pages/profile/profile";
import RealtorListings from "@pages/realtorlistings/realtorListings";
import RealtorListingsDetail from "@pages/realtorlistingsdetail/realtorListingsDetail";
import RealtorRentalDetail from "@pages/realtorrentaldetail/realtorRentalDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function RouteContainer() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          // the '?' symbol denotes optional paramters on the route
          path="/listings/:city/:state_code/:limit/:offset/:rentOrSell/:optPriceMin?/:optPriceMax?/:optPropType?/:optBedsMin?/:optBathsMin?"
          component={RealtorListings}
        />
        <Route
          path="/sale/detail/:property_id"
          component={RealtorListingsDetail}
        />
        <Route
          path="/rental/detail/:property_id"
          component={RealtorRentalDetail}
        />
        <Route path="/account" component={Profile} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
