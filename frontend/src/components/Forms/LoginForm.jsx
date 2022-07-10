import { ProviderButton, SignInButton } from "../Buttons";
import { LinkToRegister } from "../Links";
import Divider from "../Misc";
import { EntryTextField } from "../TextField";
import { Formik, Form } from "formik";
import SignInValidation from "../../validations/SignInValidation";
import useLoginUser from "../../hooks/useLoginUser";

const LoginForm = () => {
  const { onSubmit, error } = useLoginUser();

  return (
    <div className="flex justify-center items-center h-full px-4">
      <div className="bg-white rounded-xl tablet:w-[375px] shadow mobile:w-full px-5 py-5">
        <h1 className="font-medium text-2xl tracking-tight mb-5 mt-3">
          Sign in to Starbuy
        </h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={SignInValidation}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <EntryTextField
                name="email"
                type="text"
                placeholder="Email address"
              />
              <EntryTextField
                name="password"
                type="password"
                placeholder="Password"
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
