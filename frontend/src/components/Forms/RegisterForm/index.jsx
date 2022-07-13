import ProviderButton from "../../Buttons/ProviderButton";
import { LinkToLogin } from "../../Links";
import Divider from "../../Misc/Divider";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import { useState } from "react";

import "./style.css";

const RegisterForm = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex justify-center items-center h-full px-4">
      <div className="bg-white rounded-xl changescrollbar changscro laptop:max-h-[36rem] overflow-y-auto tablet:w-[420px] mobile:w-full px-5 py-5">
        <div className="dir">
          <h1 className="font-bold text-3xl tracking-tight mb-5 mt-3">
            Sign Up
          </h1>
          <div className="mb-3">
            {step === 1 && <FirstForm setStep={setStep} />}
            {step === 2 && <SecondForm setStep={setStep} />}
          </div>
          <Divider Title="or Sign up with" />

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
          <LinkToLogin />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
