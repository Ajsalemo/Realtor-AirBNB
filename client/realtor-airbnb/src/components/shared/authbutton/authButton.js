import { useAuth0 } from "@auth0/auth0-react";
import FontAwesomeLib from "@components/shared/fontawesomelib/fontAwesomeLib";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function AuthButton() {
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return (
      <FontAwesomeLib
        icon={faCircleNotch}
        size="2x"
        classNames={"animate-spin text-white mr-2"}
      />
    );
  }

  if (!isAuthenticated) {
    return (
      <button className="pr-3" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    );
  }

  return (
    isAuthenticated && (
      <button
        className="pr-3"
        onClick={() => logout({ returnTo: process.env.REACT_APP_REDIRECT_URI })}
      >
        Log Out
      </button>
    )
  );
}
