import React from "react";
import { Link } from "react-router-dom";
import "../styles/HotAccessoriesMenu.css";

const HotAccessoriesMenu = () => {
  return (
    <div className="HotAccessoriesMenu">
      <Link className="HotAccessoriesLink" to="/Music">
        Music Store
      </Link>
      <Link className="HotAccessoriesLink" to="/SmartDevice">
        Smart Devices
      </Link>
      <Link className="HotAccessoriesLink" to="/Home">
        Home
      </Link>
      <Link className="HotAccessoriesLink" to="/Lifestyle">
        Lifestyle
      </Link>
      <Link className="HotAccessoriesLink" to="/MobileAccessories">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default HotAccessoriesMenu;
