import { useAuth0 } from "@auth0/auth0-react";
import FontAwesomeLib from "@components/shared/fontawesomelib/fontAwesomeLib";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function AuthButton({ logInOutClassname, loadingIconClassname }) {
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  if (isLoading) {
    return (
      <FontAwesomeLib
        icon={faCircleNotch}
        size="2x"
        classNames={loadingIconClassname}
      />
    );
  }

  if (!isAuthenticated) {
    return (
      <button className={logInOutClassname} onClick={() => loginWithRedirect()}>
        Log In
      </button>
    );
  }

  return (
    isAuthenticated && (
      <button
        className={logInOutClassname}
        onClick={() => logout({ returnTo: process.env.REACT_APP_REDIRECT_URI })}
      >
        Log Out
      </button>
    )
  );
}
