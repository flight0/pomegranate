import React from "react";
import { NavLink } from "react-router-dom";

interface SubMenu {
  name: string;
  route: string;
}

const NavListItem = ({ navData }: { navData: SubMenu }) => {
  return (
    <>
      <NavLink
        to={`${navData.route}`}
        className={({ isActive }) => {
          const activeClass = isActive ? 'bg-cyan-700' : '';
          return `${activeClass} py-2 mx-4 rounded-md hover:bg-cyan-800 hover:rounded-md focus:bg-cyan-700`;
        }}
      >
        <span className="ml-8">{navData.name}</span>
      </NavLink>
    </>
  );
};

export default NavListItem;
