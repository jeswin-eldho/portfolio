import Navbar from "../components/Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div className="main">{children}</div>
    </>
  );
};

export default Layout;
