import { useState } from "react";
import { useMyShop } from "../../../context/MyShopContext";
import FirstForm from "./FirstForm";
import LastForm from "./LastForm";
import SecondForm from "./SecondForm";
import { StepProgress } from "./StepProgress";

const CreateShop = () => {
  const { step } = useMyShop();
  return (
    <div>
      <StepProgress Step={step} />
      <div className="mt-10 h-52 flex items-center justify-center">
        <div className="tablet:w-1/2 mobile:w-3/4 ">
          {step === 1 && <FirstForm />}
          {step === 2 && <SecondForm />}
          {step === 3 && <LastForm />}
        </div>
      </div>
    </div>
  );
};

export default CreateShop;
