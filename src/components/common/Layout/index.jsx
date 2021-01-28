import React, { useState, useEffect } from "react";
import ReferralStrip from "./../ReferralStrip/index";
import Navbar from "./../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__header">
        <Navbar />
        <ReferralStrip />
      </div>
      <div className="layout__body">
        <div className="layout__body--breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span>Clothing</span>
          <span>/</span>
          <span>Mens Clothing</span>
          <span>/</span>
          <span>All Mens Clothing</span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
