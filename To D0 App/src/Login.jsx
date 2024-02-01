import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="flex justify-center">
      {isAuthenticated ? (
        <div className="flex flex-col mx-auto">
          <p className="m-3 text-2xl font-bold text-teal-200">
            Welcome <span className="">{user.nickname}</span>
          </p>
          <button
            className="p-1 px-2 m-2 mx-auto bg-green-400 rounded-lg hover:text-white"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      ) : (
        <button
          className="p-1 px-2 bg-green-400 rounded-lg hover:text-white "
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;
