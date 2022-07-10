import EntryContainer from "../components/Containers/EntryContainer";
import EntrySideImage from "../components/Containers/EntrySIdeImage";
import ShoppinCart3D from "../assets/images/shoppingCart3D.jpg";
import LoginForm from "../components/Forms/LoginForm";

const Login = () => {
  return (
    <EntryContainer title="Starbuy">
      <div className="laptop:col-span-1 mobile:col-span-full">
        <LoginForm />
      </div>
      <EntrySideImage image={ShoppinCart3D} />
    </EntryContainer>
  );
};

export default Login;
