import { EntryContainer, EntrySideImage } from "../components/Containers";
import ShoppinCart3D from "../assets/images/buying.jpg";
import LoginForm from "../components/Forms/LoginForm";

const Login = () => {
  return (
    <EntryContainer title="Starbuy">
      <div className="laptop:col-span-1 mobile:col-span-full relative overflow-hidden laptop:bg-white mobile:bg-gray-100">
        <LoginForm />
      </div>
      <EntrySideImage image={ShoppinCart3D} className="h-[600px]" />
    </EntryContainer>
  );
};

export default Login;
