import React from 'react';
import './App.css';

import { Outlet, NavLink } from "react-router-dom";

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-56 bg-orange-400 shrink-0">
        <div className='py-10'>
        </div>
        <nav className="flex flex-col text-white space-y-2 text-sm">
          <NavLink to="/dashboard" className={({ isActive }) => `pl-2 py-1.5 mx-2 flex items-center ${isActive ? "bg-orange-500 rounded-md" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="ml-2">Dashboard</span>
          </NavLink>
          <NavLink to="/table" className={({ isActive }) => `pl-2 py-1.5 mx-2 flex items-center ${isActive ? "bg-orange-500 rounded-md" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="ml-2">Table</span>
          </NavLink>
          <NavLink to="/form" className={({ isActive }) => `pl-2 py-1.5 mx-2 flex items-center ${isActive && "bg-orange-500 rounded-md"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="ml-2">Form</span>
          </NavLink>
        </nav>
      </div>
      <div className="w-full">
        <div className="shadow-md p-4 flex justify-end">
          <div className="">
            <img className="w-8 h-8 rounded-full" src={user.imageUrl} />
          </div>
        </div>
        <div className="m-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
