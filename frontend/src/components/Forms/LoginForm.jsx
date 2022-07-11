import { LinkToRegister } from "../Links";
import Divider from "../Misc/Divider";
import { EntryTextField } from "../TextField";
import { Formik, Form } from "formik";
import SignInValidation from "../../validations/SignInValidation";
import useLoginUser from "../../hooks/useLoginUser";
import SignInButton from "../Buttons/SignInButton";
import ProviderButton from "../Buttons/ProviderButton";

const LoginForm = () => {
  const { onSubmit, error, setError } = useLoginUser();

  return (
    <div className="flex justify-center items-center h-full px-4">
      <div className="bg-white rounded-xl tablet:w-[375px] shadow-lg mobile:w-full px-5 py-5">
        <h1 className="font-medium text-2xl tracking-tight mb-5 mt-3">
          Sign in to Starbuy
        </h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validateOnBlur={false}
          validationSchema={SignInValidation}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <EntryTextField
                label="Email address"
                name="email"
                type="text"
                onKeyDown={() => setError(null)}
                customError={error?.type === "email" && error.message}
                placeholder="Email address"
              />
              <EntryTextField
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                onKeyDown={() => setError(null)}
                customError={error?.type === "password" && error.message}
              />
              <SignInButton />
            </Form>
          )}
        </Formik>

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
  );
};

export default LoginForm;
