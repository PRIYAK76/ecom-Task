import React from "react";
import Navbar from "../Navbar/Navbar";
import Thinbar from "../Navbar/Thinbar/Thinbar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
    const { children } = props;
    return (
        <div>
            <Thinbar />
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
  );
};

export default Layout;