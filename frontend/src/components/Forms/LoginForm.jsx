import { ProviderButton } from "../Buttons";
import { LinkToRegister } from "../Links";
import Divider from "../Misc";
import { EntryTextField } from "../TextField";

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
          <button className="w-full bg-orange-300 text-gray-800 py-3 mt-2 rounded-lg font-bold mb-5">
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
          <LinkToRegister />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
