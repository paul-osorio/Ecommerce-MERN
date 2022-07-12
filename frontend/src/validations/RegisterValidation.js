import * as Yup from "yup";
import { checkUserExists } from "../app/lib/auth";

export const FirstFormSchema = Yup.object().shape({
  nameFirst: Yup.string().trim().required("Firstname is required"),
  nameLast: Yup.string().required("Lastname is required"),
  email: Yup.string()
    .email("Email is invalid")
    .required("Email is required")
    .test("uniqueEmail", "Email already taken", async (value) => {
      if (value) {
        try {
          const response = await checkUserExists({ email: value });
          const status = response.data.status;

          if (status) {
            return false;
          } else {
            return true;
          }
        } catch (err) {
          return false;
        }
      }
    }),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character"
    ),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const SecondFormSchema = Yup.object().shape({
  zipCode: Yup.number("Please enter a valid zip code")
    .min(4, "Zip code must be 4 digits")
    .required("Zip code is required"),
  street: Yup.string().trim().required("Street is required"),
  month: Yup.string().trim().required("Month is required"),
  day: Yup.string().trim().required("Day is required"),
  year: Yup.string().trim().required("Year is required"),
  gender: Yup.string().trim().required("Gender is required"),
  phoneNumber: Yup.string().trim().required("Phone number is required"),
});
