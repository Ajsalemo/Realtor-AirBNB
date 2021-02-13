import Home from "@pages/home/Home";
import RealtorDashboard from "@pages/realtordashboard/realtordashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function RouteContainer() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/realtor-dashboard" exact component={RealtorDashboard} />
    </Router>
  );
}
