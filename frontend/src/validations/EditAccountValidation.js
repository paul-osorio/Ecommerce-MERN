import { useQuery } from "@tanstack/react-query";
import * as Yup from "yup";
import { checkUserExists } from "../app/lib/auth";
import { getUserDetails } from "../app/lib/user";

const EditSchema = () => {
  const { data: email } = useQuery(["user"], async () => {
    const user = await getUserDetails();
    return user.data.email;
  });

  const EditAccountSchema = Yup.object().shape({
    nameFirst: Yup.string().trim().required("Firstname is required"),
    nameLast: Yup.string().trim().required("Lastname is required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required")
      .test("uniqueEmail", "Email already taken", async (value) => {
        if (value) {
          try {
            const response = await checkUserExists({ email: value });
            const status = response.data.status;

            if (status) {
              if (value !== email) {
                return false;
              } else {
                return true;
              }
            } else {
              return true;
            }
          } catch (err) {
            return false;
          }
        }
      }),
    month: Yup.string().trim().required("Month is required"),
    day: Yup.string().trim().required("Day is required"),
    year: Yup.string().trim().required("Year is required"),
    gender: Yup.string().required("Gender is required"),
    phoneNumber: Yup.string()
      .trim()
      .required("Phone number is required")
      .min(11, "Invalid phone number"),
  });

  return EditAccountSchema;
};

export default EditSchema;
