import { Formik, Form } from "formik";
import { FirstFormSchema } from "../../../validations/RegisterValidation";
import SignUpNextButton from "../../Buttons/SignupButton";
import { EntryTextField } from "../../TextField";
import { useContext } from "react";
import { RegisterContext } from "../../../context/RegisterContext";
import PasswordTextField from "../../TextField/PasswordTextField";

const FirstForm = ({ setStep }) => {
  const regContext = useContext(RegisterContext);
  const personalInfo = regContext?.personalInfo;
  const initialValues = {
    nameFirst: personalInfo?.nameFirst || "",
    nameLast: personalInfo?.nameLast || "",
    email: personalInfo?.email || "",
    password: personalInfo?.password || "",
    passwordConfirm: personalInfo?.passwordConfirm || "",
  };

  const onSubmit = (values) => {
    regContext.setPersonalInfo(values);
    console.log(personalInfo);
    setStep(2);
  };
  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur={false}
      validationSchema={FirstFormSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="w-full">
          <div className="flex w-full space-x-3">
            <EntryTextField
              name="nameFirst"
              placeholder="Firstname"
              label="Firstname"
              type="text"
            />
            <EntryTextField
              name="nameLast"
              placeholder="Lastname"
              label="Lastname"
              type="text"
            />
          </div>
          <EntryTextField
            name="email"
            placeholder="Email address"
            label="Email address"
            type="text"
          />
          <PasswordTextField
            name="password"
            placeholder="Password"
            label="Password"
          />
          <PasswordTextField
            name="passwordConfirm"
            placeholder="Confirm Password"
            label="Confirm Password"
          />
          <div className=" flex">
            <div className="w-full"></div>
            <SignUpNextButton />
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default FirstForm;
