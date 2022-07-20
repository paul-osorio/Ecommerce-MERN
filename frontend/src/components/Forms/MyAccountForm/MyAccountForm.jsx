import useGetUserDetails from "../../../hooks/useGetUserDetails";
import { Formik, Form, Field } from "formik";
import GridTextField from "./GridTextField";
import SelectDropdown from "../../Dropdown/SelectDropdown";
import dates from "../../../json/dates.json";
import EditSchema from "../../../validations/EditAccountValidation";
import useOnUpdateProfile from "../../../hooks/useOnUpdateProfile";
import SuccessUpdate from "../../Modal/SuccessUpdate";
import { AnimatePresence } from "framer-motion";

const MyAccountForm = () => {
  const { onSubmit, loading, initialValues, success, setSuccess } =
    useOnUpdateProfile();
  const data = useGetUserDetails().user;
  const profile = data?.profilePicture;
  const editSchema = EditSchema();
  const handleClose = () => setSuccess(false);

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={editSchema}
        validateOnBlur={false}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="">
              <div>
                <span className="font-bold mt-3 text-gray-600">
                  Profile Picture
                </span>
                <div className="flex items-center space-x-5">
                  <img
                    src={profile}
                    className="w-14 h-14 rounded-full"
                    alt=""
                  />
                  <div>
                    <button
                      type="button"
                      className="border text-sm px-4 transition py-2 rounded-lg hover:text-purple-600 hover:border-purple-500"
                    >
                      Change Photo
                    </button>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <div className="grid grid-cols-4 gap-y-2 gap-x-5 ">
                <div className="tablet:col-span-2 mobile:col-span-full">
                  <GridTextField
                    label="First Name"
                    Column="2"
                    name="nameFirst"
                  />
                </div>
                <div className="tablet:col-span-2 mobile:col-span-full">
                  <GridTextField label="Last Name" Column="2" name="nameLast" />
                </div>

                <hr className="my-2 col-span-full" />
                <div className="tablet:col-span-2 mobile:col-span-full">
                  <GridTextField
                    Column="2"
                    label="Email Address"
                    name="email"
                  />
                </div>

                <GridTextField
                  Column="1"
                  label="Mobile Number"
                  name="phoneNumber"
                />
                <div className="tablet:col-span-1 mobile:col-span-full">
                  <label className="block text-sm font-bold text-gray-800">
                    Gender
                  </label>
                  <Field
                    // defaultValue={{value: data?.gender, }}
                    value={genderOptions.filter(
                      (option) => option.label === values.gender
                    )}
                    onChange={(value) => setFieldValue("gender", value)}
                    component={SelectDropdown}
                    name="gender"
                    options={genderOptions}
                  />
                </div>
                <hr className="my-2 col-span-full " />
                <div className="tablet:flex col-span-full items-center">
                  <span className="col-span-1 w-52 text-sm font-bold text-gray-800">
                    Date of Birth
                  </span>
                  <div className="grid grid-cols-3 w-full mobile:gap-x-2 tablet:gap-x-10">
                    <Field
                      value={dates.months.filter(
                        (option) => option.label === values.month
                      )}
                      component={SelectDropdown}
                      name="month"
                      options={dates.months}
                    />
                    <Field
                      value={dates.date.filter(
                        (option) => option.label === values.day
                      )}
                      component={SelectDropdown}
                      name="day"
                      options={dates.date}
                    />
                    <Field
                      value={dates.year.filter(
                        (option) => option.label === values.year
                      )}
                      component={SelectDropdown}
                      name="year"
                      options={dates.year}
                    />
                  </div>
                </div>

                <div className="col-span-full flex justify-end">
                  <button
                    type="submit"
                    className="mt-5 bg-indigo-500 text-white px-5 py-2 rounded-full hover:bg-indigo-600"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <AnimatePresence>
        {success && <SuccessUpdate handleClose={handleClose} />}
      </AnimatePresence>
    </>
  );
};

export default MyAccountForm;
