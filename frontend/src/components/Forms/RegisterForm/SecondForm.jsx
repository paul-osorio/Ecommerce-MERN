import { EntryTextField } from "../../TextField";
import { Formik, Form } from "formik";
import { FirstFormSchema } from "../../../validations/RegisterValidation";
import SignUpNextButton from "../../Buttons/SignupNextButton";
import AddressDropdown from "../../Dropdown/AddressDropdown";
import TextField from "../../TextField/TextField";

const SecondForm = () => {
  const initialValues = {
    nameFirst: "",
    nameLast: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur={false}
      validationSchema={FirstFormSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form className="w-full">
          <AddressDropdown />
          <div className="mb-5">
            <label className="text-xs">Date of Birth</label>
            <div className="flex space-x-2">
              <TextField name="month" placeholder="Month" />
              <TextField name="day" placeholder="Day" />
              <TextField name="year" placeholder="Year" />
            </div>
          </div>
          <div className="flex space-x-2">
            <EntryTextField name="gender" label="Gender" placeholder="Gender" />
            <EntryTextField
              name="phoneNumber"
              label="Mobile number"
              placeholder="Mobile number"
            />
          </div>
          <button>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SecondForm;
