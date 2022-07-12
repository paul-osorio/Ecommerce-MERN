import { useParams } from "react-router-dom";
import { decrypt } from "../../hooks/useCrypto";

const SuccessRegister = () => {
  const { email } = useParams();
  const decryptedemail = decrypt(email);
  console.log(decryptedemail);
  return (
    <div className="bg-gray-100 h-screen w-screen flex items-center justify-center px-2">
      <div className="bg-white border-t-4 border-t-indigo-500 shadow-lg px-6 rounded-3xl max-w-[320px]">
        <div className="w-full">
          <div className="flex justify-center my-6">
            <img
              src="https://www.svgrepo.com/show/241788/email-mail.svg"
              className="h-20 w-20"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-center text-gray-700 text-xl font-bold">
              Thank you for registering!
            </h1>
            <h1 className="text-center my-2 font-medium text-green-800">
              One last thing!
            </h1>
            <p className="text-center text-gray-600 text-sm">
              Please check your email for a verification link. If you don't see
              it in your inbox, please check your spam folder.
            </p>
          </div>
          <div className="w-full flex justify-center my-3">
            <button className="text-sm hover:bg-indigo-600 active:scale-[.99] bg-indigo-500 text-white px-4 py-1 rounded-full">
              Resend verification link
            </button>
          </div>
          <hr />

          <div className="my-3">
            <a href="/" className="block text-sm text-center text-blue-500">
              Go to back to the Login page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessRegister;
