import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
    const { children } = props;
    return (
        <div>
            <Navbar />
            <div>{children}</div>
        </div>
  );
};

export default Layout;