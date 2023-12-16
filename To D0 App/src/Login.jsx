import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className=" flex pt-5 justify-center ">
      {isAuthenticated ? (
        <div className="flex mx-auto flex-col">
          <p className="font-bold text-teal-200 text-2xl m-3">
            Welcome <span className="">{user.nickname}</span>
          </p>
          <button
            className="m-2 p-1 bg-green-400 rounded-lg mx-auto px-2 hover:text-white"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      ) : (
        <button
          className="p-1 bg-green-400 rounded-lg px-2 hover:text-white "
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;
