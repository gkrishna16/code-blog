import React from "react";
import nv from "./nav.module.css";
import data from "../data/articles.json";
import { Link } from "react-router-dom";

console.log(data);

const Navbar = () => {
  return (
    <div>
      <nav className={`${nv.nvCntr}`}>
        <p className={`${nv.ttlIcn}`}>Navbar</p>
        <div className={`${nv.artclBx}`}>
          {data.map((article) => (
            <div className="">
              <div className={`${nv.ttl}`}>
                <Link to="/">{article.title}</Link>
              </div>
              <div className="">{article.description.substring(0, 60)}...</div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
