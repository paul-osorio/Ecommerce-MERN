import { useParams } from "react-router-dom";
import { resendVerificationLink } from "../../app/lib/auth";
import { decrypt } from "../../helper/base64EncodeDecode";
import { useState, useEffect } from "react";
import { useCountdownTimer } from "use-countdown-timer";

const SuccessRegister = () => {
  const { email } = useParams();
  const decryptedemail = decrypt(email);
  const [sending, setSending] = useState(false);
  const { countdown, start, reset, pause, isRunning } = useCountdownTimer({
    timer: 1000 * 60,
  });

  const resendLink = async () => {
    setSending(true);
    try {
      await resendVerificationLink(decryptedemail);
    } catch (err) {
      console.log(err);
    }
    setSending(false);
    start();
  };
  useEffect(() => {
    if (!isRunning) {
      reset();
    }
  }, [isRunning]);

  return (
    <div className="bg-gray-100 h-screen w-screen flex items-center justify-center px-2">
      <div className="bg-white border-t-4 border-t-purple-700 shadow-lg shadow-gray-300 px-6 rounded-3xl max-w-[320px]">
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
            {!isRunning ? (
              <button
                onClick={resendLink}
                className="text-sm hover:bg-purple-700 active:scale-[.99] bg-purple-600 text-white px-4 py-1 rounded-full"
              >
                {sending ? "Resending..." : "Resend verification link again"}
              </button>
            ) : (
              <>
                <button
                  disabled
                  className="text-sm hover:bg-purple-400 active:scale-[.99] bg-purple-300 text-white px-4 py-1 rounded-full"
                >
                  Resend verification link again (
                  {convertToMinutesAndSeconds(countdown)})
                </button>
              </>
            )}
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

//convert 120000 to 2 minutes function to convert to minutes and seconds
function convertToMinutesAndSeconds(milliseconds) {
  var minutes = Math.floor(milliseconds / 60000);
  var seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

export default SuccessRegister;
