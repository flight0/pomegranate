import React, { useEffect, useRef, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import NavListItem from "./NavListItem";
import { useLocation } from "react-router-dom";

interface SubMenu {
  name: string;
  route: string;
}

const NavList = ({
  title,
  children,
  subMenu,
}: {
  title: string;
  children: JSX.Element;
  subMenu: SubMenu[];
}) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [expand, setExpand] = useState(false);
  const location = useLocation();

  useEffect(() => {
    subMenu.find((m) => m.route === location.pathname) && setExpand(true);
  }, [location, subMenu]);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const innerHeight = expand ? innerRef.current?.clientHeight as number : 0;
  return (
    <li>
      <div
        className={`pl-2 py-2 mx-2 flex items-center justify-between cursor-pointer rounded-md ${
          expand ? "bg-cyan-800" : ''
        }`}
        onClick={toggleExpand}
      >
        <div className="flex items-center">
          {children}
          <span className="ml-2">{title}</span>
        </div>
        <div className="mr-2">
          <ChevronRightIcon
            className={`h-4 w-4 transition-transform ${
              expand ? "rotate-90" : "rotate-0"
            }`}
          />
        </div>
      </div>
      <div
        className={`mt-2 transition-all duration-300 ease-linear overflow-hidden will-change-[height]`}
        style={{
          height: `${innerHeight}px`,
        }}
      >
        <div className="flex flex-col space-y-1" ref={innerRef}>
          {subMenu.map((n, i) => (
            <NavListItem navData={n} key={i} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default NavList;
