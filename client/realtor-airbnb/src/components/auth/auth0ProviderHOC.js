import { Auth0Provider } from "@auth0/auth0-react";

// See - https://auth0.com/docs/quickstart/spa/react?framed=1&sq=1#configure-auth0
export default function Auth0ProviderHOC({ children }) {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={process.env.REACT_APP_REDIRECT_URI}
    >
      {children}
    </Auth0Provider>
  );
}
