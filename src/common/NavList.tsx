import React, {useLayoutEffect, useRef, useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

interface SubMenu {
    name: string;
    route: string;
}

const NavList = ({ title, children, subMenu }: {
    title: string;
    children: JSX.Element;
    subMenu: SubMenu[];
}) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const [expand, setExpand] = useState(false);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        const height = innerRef.current?.offsetHeight;
        console.log(height);
        height && setHeight(height);
    },[])

    const toggleExpand = () => {
        setExpand(!expand);
    }

    console.log('render');

    return (
        <li>
            <div className={`pl-2 py-2 mx-2 flex items-center justify-between cursor-pointer rounded-md ${expand && "bg-cyan-800"}`}  onClick={toggleExpand}>
                <div className="flex items-center">
                    {children}
                    <span className="ml-2">{title}</span>
                </div>
                <div className="mr-2">
                    <ChevronRightIcon className={`h-4 w-4 transition-transform ${expand ? "rotate-90" : "rotate-0"}`} />
                </div>
            </div>
            <div className={`flex flex-col space-y-1 mt-2 transition-all duration-300 ease-linear overflow-hidden min-h-0`} ref={innerRef} style={{
                height: expand ? `${height}px` : (height > 0 ? `0px` : `auto`),
                visibility: expand ? "visible" : "hidden"
            }}>
                {subMenu.map((n, i) =>
                    <NavLink key={i} to={`/${n.route}`} className={({ isActive }) => `${isActive && "bg-cyan-700"} py-2 mx-4 rounded-md hover:bg-cyan-800 hover:rounded-md focus:bg-cyan-700 `}>
                        <span className='ml-8'>{n.name}</span>
                    </NavLink>
                )}
            </div>
        </li>
    );
}

export default NavList;
