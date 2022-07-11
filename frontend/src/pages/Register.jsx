import { EntryContainer, EntrySideImage } from "../components/Containers";
import RegisterForm from "../components/Forms/RegisterForm";
import { AddressProvider } from "../context/AddresContext";

const Register = () => {
  return (
    <AddressProvider>
      <EntryContainer title="Starbuy">
        <div className="laptop:col-span-1 mobile:col-span-full">
          <RegisterForm />
        </div>
        <EntrySideImage />
      </EntryContainer>
    </AddressProvider>
  );
};

export default Register;
