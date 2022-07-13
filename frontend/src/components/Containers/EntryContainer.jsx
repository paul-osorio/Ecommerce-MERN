import EntryNavbar from "../Navbar/EntryNavbar";

const EntryContainer = ({ children, title }) => {
  return (
    <div className="h-screen w-screen bg-white relative">
      <EntryNavbar title={title} />
      <div className="grid grid-cols-2" style={{ height: "calc(100% - 56px)" }}>
        {children}
      </div>
    </div>
  );
};

export default EntryContainer;
