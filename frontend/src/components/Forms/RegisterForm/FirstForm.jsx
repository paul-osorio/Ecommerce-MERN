import { Formik, Form } from "formik";
import { FirstFormSchema } from "../../../validations/RegisterValidation";
import SignUpNextButton from "../../Buttons/SignupNextButton";
import { EntryTextField } from "../../TextField";
import { useDispatch } from "react-redux";
import { setPersonalInfo } from "../../../app/reducers/signupReducer";

const FirstForm = ({ setStep }) => {
  const dispatch = useDispatch();
  const initialValues = {
    nameFirst: "",
    nameLast: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const onSubmit = (values) => {
    dispatch(setPersonalInfo(values));
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
          <EntryTextField
            name="password"
            placeholder="Password"
            label="Password"
            type="password"
          />
          <EntryTextField
            name="passwordConfirm"
            placeholder="Confirm Password"
            label="Confirm Password"
            type="password"
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
