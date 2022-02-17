import React from "react";
import HeaderNav from "./HeaderNav";

import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderNav />
    </div>
  );
};

export default Header;
