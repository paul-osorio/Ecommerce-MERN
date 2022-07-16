import ReactSelect from "react-select";
import MyAccountForm from "../../components/Forms/MyAccountForm/MyAccountForm";
import useGetUserDetails from "../../hooks/useGetUserDetails";

const MyAccount = () => {
  return (
    <div className="py-8 px-8">
      <h1 className="font-bold text-gray-700 text-2xl">Account</h1>
      <MyAccountForm />
    </div>
  );
};

export default MyAccount;
