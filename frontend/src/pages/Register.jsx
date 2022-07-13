import { EntryContainer, EntrySideImage } from "../components/Containers";
import RegisterForm from "../components/Forms/RegisterForm";
import { RegisterProvider } from "../context/RegisterContext";
import RegisterImage from "../assets/images/rating.jpg";

const Register = () => {
  return (
    <RegisterProvider>
      <EntryContainer title="Starbuy">
        <div className="laptop:col-span-1 mobile:col-span-full">
          <RegisterForm />
        </div>
        <EntrySideImage image={RegisterImage} className="w-[600px]" />
      </EntryContainer>
    </RegisterProvider>
  );
};

export default Register;
