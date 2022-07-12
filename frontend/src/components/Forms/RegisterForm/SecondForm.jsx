import { EntryTextField } from "../../TextField";
import { Formik, Form, Field } from "formik";
import SignUpNextButton from "../../Buttons/SignupButton";
import AddressDropdown from "../../Dropdown/AddressDropdown";
import dates from "../../../json/dates.json";
import TextArea from "../../TextField/TextArea";
import SignUpPrevButton from "../../Buttons/SignupPrevButton";
import { useContext, useEffect } from "react";
import { RegisterContext } from "../../../context/RegisterContext";
import { useCombineAddress } from "../../../hooks/useCombineAddress";
import { useRef } from "react";
import { SecondFormSchema } from "../../../validations/RegisterValidation";
import { registerUser } from "../../../app/lib/auth";
import { useNavigate } from "react-router-dom";
import { encrypt } from "../../../hooks/useCrypto";

const SecondForm = ({ setStep }) => {
  const regContext = useContext(RegisterContext);
  const {
    details,
    setDetails,
    setError,
    personalInfo,
    city,
    region,
    province,
    barangay,
  } = regContext;
  const { address } = useCombineAddress(regContext);
  const formRef = useRef();
  const navigate = useNavigate();

  const initValues = {
    psgc: address || "",
    zipCode: details?.zipCode || "",
    street: details?.street || "",
    month: details?.month || "",
    day: details?.day || "",
    year: details?.year || "",
    gender: details?.gender || "",
    phoneNumber: details?.phoneNumber || "",
  };
  const onSubmit = async (values) => {
    if (address) {
      const arr = address.split(",");
      if (arr.length === 4) {
        const data = {
          nameFirst: personalInfo?.nameFirst,
          nameLast: personalInfo?.nameLast,
          email: personalInfo?.email,
          password: personalInfo?.password,
          addresses: [
            {
              street: values.street,
              city,
              region,
              barangay,
              province,
              zip: values.zipCode,
            },
          ],
          dateOfBirth: {
            month: values.month,
            day: values.day,
            year: values.year,
          },
          gender: values.gender,
          phoneNumber: values.phoneNumber,
        };
        const encryptedemail = encrypt(personalInfo.encryptedemail);

        navigate(`/success_register/${encryptedemail}`);
        await registerUser(data);
      } else setError("Please select a valid address");
    } else setError("This field is required");
  };

  const getVal = () => {
    const values = formRef.current.values;
    setDetails(values);
    setStep(1);
  };

  return (
    <Formik
      innerRef={formRef}
      initialValues={initValues}
      validateOnBlur={false}
      validationSchema={SecondFormSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="w-full">
          <AddressDropdown name="psgc" type="text" value={address} />
          <EntryTextField
            label="Zip code"
            name="zipCode"
            type="text"
            placeholder="Zip code"
          />
          <div>
            <Field
              name="street"
              as={TextArea}
              placeholder="Street"
              label="Street Name, Building, Unit, etc."
            />
            {errors.street && touched.street && (
              <div className="text-red-500 text-xs">
                <i className="far fa-exclamation-circle mx-1"></i>
                {errors.street}
              </div>
            )}
          </div>
          <div className="mb-5">
            <label className="text-xs text-gray-500">Date of Birth</label>
            <div className="flex space-x-2">
              <Field
                as="select"
                name="month"
                className="outline-none border rounded-lg text-sm w-full px-2 py-3"
              >
                <option selected disabled className="text-gray-200">
                  Month
                </option>
                {dates.months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </Field>
              <Field
                as="select"
                name="day"
                className="outline-none border rounded-lg text-sm w-full px-2"
              >
                <option selected disabled className="text-gray-200">
                  Day
                </option>
                {dates.date.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </Field>
              <Field
                as="select"
                name="year"
                className="outline-none border rounded-lg text-sm w-full px-2"
              >
                <option selected disabled className="text-gray-200">
                  Year
                </option>
                {dates.year.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </Field>
            </div>
            {errors.month && errors.day && errors.year && (
              <div className="text-red-500 text-xs">
                <i className="far fa-exclamation-circle mx-1"></i>
                Please select your date of birth
              </div>
            )}
          </div>
          <div className="flex space-x-2">
            <EntryTextField name="gender" label="Gender" placeholder="Gender" />
            <EntryTextField
              name="phoneNumber"
              label="Mobile number"
              placeholder="Mobile number"
            />
          </div>
          <div className="flex space-x-2">
            <SignUpPrevButton onClick={getVal} />
            <SignUpNextButton name="Submit" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SecondForm;
