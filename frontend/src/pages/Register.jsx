import { EntryContainer, EntrySideImage } from "../components/Containers";
import RegisterForm from "../components/Forms/RegisterForm";
import { RegisterProvider } from "../context/RegisterContext";

const Register = () => {
  return (
    <RegisterProvider>
      <EntryContainer title="Starbuy">
        <div className="laptop:col-span-1 mobile:col-span-full">
          <RegisterForm />
        </div>
        <EntrySideImage />
      </EntryContainer>
    </RegisterProvider>
  );
};

export default Register;
