import { useParams } from "react-router-dom";
import { decrypt } from "../../hooks/useCrypto";

const SuccessRegister = () => {
  const { email } = useParams();
  const decryptedemail = decrypt(email);
  return (
    <h1>We sent you a verification link to your email. {decryptedemail}</h1>
  );
};

export default SuccessRegister;
