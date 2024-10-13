import Navbar from "./Navbar";
import BackButton from "./BackButton";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <BackButton />
      {children}
    </div>
  );
};

export default Layout;
