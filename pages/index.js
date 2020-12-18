import React from "react";
import Navbar from "components/Navbar";
import Search from "containers/Search";

const Page = () => (
  <>
    <Navbar>
      <img src="/logo.png" /> <span>Stocks Application</span>
    </Navbar>
    <Search />
  </>
);

export default Page;
