import React from 'react';

import { Outlet } from "react-router-dom";
import { MenuIcon, HomeIcon, TableIcon, ChartPieIcon, PencilAltIcon } from '@heroicons/react/outline';
import NavList from './common/NavList';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navList = [
  {
    "title": "Home",
    "icon": <HomeIcon className="h-5 w-5 text-gray-100" />,
    "subMenu": [
      {
        "name": "dashboard",
        "route": "/dashboard"
      }
    ]
  },
  {
    "title": "Form",
    "icon": <PencilAltIcon className="h-5 w-5 text-gray-100" />,
    "subMenu": [
      {
        "name": "form",
        "route": "/form"
      },
      {
        "name": "form",
        "route": "/form"
      },
    ]
  },
  {
    "title": "Table",
    "icon": <TableIcon className="h-5 w-5 text-gray-100" />,
    "subMenu": [
      {
        "name": "table",
        "route": "/table"
      },
      {
        "name": "table",
        "route": "/table"
      },
      {
        "name": "table",
        "route": "/table"
      }
    ]
  },
  {
    "title": "Chart",
    "icon": <ChartPieIcon className="h-5 w-5 text-gray-100" />,
    "subMenu": [
      {
        "name": "chart",
        "route": "/chart"
      },
      {
        "name": "chart",
        "route": "/chart"
      },
      {
        "name": "chart",
        "route": "/chart"
      },
      {
        "name": "chart",
        "route": "/chart"
      },
    ]
  }
]
function App() {
  return (
    <div className="flex min-h-screen">
      <div className="w-56 bg-cyan-900 shrink-0">
        <div className="h-16 flex items-center justify-center shadow-md">
          <span className="text-white text-xl font-medium">Pomegranate</span>
        </div>
        <ul className="flex flex-col text-white space-y-2 text-sm mt-4">
          {navList.map((n, i) =>
            <NavList title={n.title} subMenu={n.subMenu} key={i}>
              {n.icon}
            </NavList>
          )}
        </ul>
      </div>
      <div className="w-full bg-gray-200">
        <div className="h-16 px-4 shadow-md flex justify-between items-center bg-white">
          <div>
            <MenuIcon className="h-6 w-6 text-cyan-900" />
          </div>
          <div className="">
            <img className="w-8 h-8 rounded-full" src={user.imageUrl} alt="avatar" />
          </div>
        </div>
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
