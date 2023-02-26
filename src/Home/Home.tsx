import React from "react";
import Navbar from "../Navbar/Navbar";
import hm from "./home.module.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={`${hm.pg}`}>
        <p className={`${hm.pgHdr}`}>Home </p>
      </div>
    </div>
  );
};

export default Home;
