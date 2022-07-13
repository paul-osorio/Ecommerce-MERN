import { EntryTextField } from "../../TextField";
import { Formik, Form, Field } from "formik";
import SignUpNextButton from "../../Buttons/SignupButton";
import AddressDropdown from "../../Dropdown/AddressDropdown";
import dates from "../../../json/dates.json";
import TextArea from "../../TextField/TextArea";
import SignUpPrevButton from "../../Buttons/SignupPrevButton";
import { useContext } from "react";
import { RegisterContext } from "../../../context/RegisterContext";
import { useCombineAddress } from "../../../hooks/useCombineAddress";
import { useRef } from "react";
import { SecondFormSchema } from "../../../validations/RegisterValidation";
import { registerUser } from "../../../app/lib/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SelectDropdown from "../../Dropdown/SelectDropdown";
import { numberOnly } from "../../../helper/numberOnly";
import { encrypt } from "../../../helper/base64EncodeDecode";

const SecondForm = ({ setStep }) => {
  const navigate = useNavigate();

  const regContext = useContext(RegisterContext);
  const [loading, setLoading] = useState(false);
  const {
    details,
    setDetails,
    personalInfo,
    city,
    region,
    province,
    barangay,
  } = regContext;
  const { address } = useCombineAddress(regContext);
  const formRef = useRef();

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
    setLoading(true);
    try {
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
      const encryptedemail = encrypt(personalInfo.email);

      navigate(`/success_register/${encodeURIComponent(encryptedemail)}`);
      await registerUser(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const getVal = () => {
    const values = formRef.current.values;
    console.log(values);
    setDetails(values);
    setStep(1);
  };

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  return (
    <Formik
      innerRef={formRef}
      initialValues={initValues}
      validateOnBlur={false}
      validationSchema={SecondFormSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="w-full">
          <AddressDropdown name="psgc" type="text" />
          <EntryTextField
            label="Zip code"
            name="zipCode"
            type="text"
            placeholder="Zip code"
            onKeyPress={numberOnly}
            maxLength={10}
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
                component={SelectDropdown}
                name="month"
                options={dates.months}
                className="w-full"
                placeholder="Month"
              />
              <Field
                component={SelectDropdown}
                name="day"
                options={dates.date}
                className="w-full"
                placeholder="Day"
              />
              <Field
                component={SelectDropdown}
                name="year"
                options={dates.year}
                className="w-full"
                placeholder="Year"
              />
            </div>
            {(touched.month || touched.day || touched.year) &&
            (errors.month || errors.day || errors.year) ? (
              <div className="text-red-500 text-xs">
                <i className="far fa-exclamation-circle mx-1"></i>
                Please select your date of birth
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex space-x-2">
            <div className="w-full">
              <Field
                component={SelectDropdown}
                name="gender"
                options={genderOptions}
                className="py-1"
              />
            </div>
            <EntryTextField
              name="phoneNumber"
              label="Mobile number"
              placeholder="Mobile number"
              onKeyPress={numberOnly}
              maxLength={11}
            />
          </div>
          <div className="flex space-x-2">
            <SignUpPrevButton onClick={getVal} />
            <SignUpNextButton name="Submit" isLoading={loading} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SecondForm;
