// import Header from "../../components/header/header";
// import Footer from "../../components/sections/footer/footer";

import Header from "../header/header";
import Footer from "../sections/footer/footer";
import Navbar from "../sections/navbar/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
