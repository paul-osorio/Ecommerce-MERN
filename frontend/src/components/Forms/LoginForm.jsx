import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center h-full px-4">
      <div className="bg-white rounded-xl tablet:w-[375px] shadow mobile:w-full px-5 py-5">
        <h1 className="font-medium text-2xl tracking-tight mb-5 mt-3">
          Sign in to Starbuy
        </h1>
        <div>
          <EntryTextField placeholder="Email address" />
          <EntryTextField placeholder="Password" />
          <button className="w-full bg-orange-300 text-gray-800 py-2 mt-2 rounded-lg font-bold mb-5">
            Sign in
          </button>
          <Divider Title="or Sign in with" />
          <div className="mt-5 flex justify-center space-x-2">
            <ProviderButton
              Image="https://www.svgrepo.com/show/355037/google.svg"
              Name="Google"
            />
            <ProviderButton
              Image="https://www.svgrepo.com/show/157818/facebook.svg"
              Name="Facebook"
            />
            <ProviderButton
              Image="https://www.svgrepo.com/show/157844/twitter.svg"
              Name="Twitter"
            />
          </div>
          <div className="flex justify-center items-center space-x-1 mt-5">
            <span className="text-sm text-gray-600">
              Don't have an account?
            </span>
            <Link
              to="/register"
              className="text-gray-800 hover:text-gray-900 font-medium text-sm"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProviderButton = ({ onClick, Name, Image }) => {
  return (
    <button
      className="border px-3 rounded py-2 w-full flex items-center justify-center space-x-1"
      onClick={onClick}
    >
      <img src={Image} className="h-4 w-4" alt="" />
      <span className="text-sm font-medium">{Name}</span>
    </button>
  );
};

const Divider = ({ Title }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-gray-300 h-[1px]" />
      <span className="block w-full text-center text-sm text-gray-600">
        {Title}
      </span>
      <div className="w-full bg-gray-300 h-[1px]" />
    </div>
  );
};

const EntryTextField = ({ placeholder }) => {
  return (
    <div className="mb-2">
      <input
        type="text"
        placeholder={placeholder}
        className="border w-full text-sm py-3 px-4 rounded-lg outline-none"
      />
    </div>
  );
};

export default LoginForm;
