import Products from "./components/Products";

const Home = () => {
  return (
    <div>
      <div className="mobile:px-10 tablet:px-20">
        <Products />
      </div>
    </div>
  );
};

export default Home;
