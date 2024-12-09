// import React from 'react'

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-100">
        <div className="sidebar-container md:w-96 h-screen w-full bg-gray-800">
        {/* Sidebar */}
            <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-100 p-6 h-full md:overflow-y-auto">
            <Outlet />
        </div>
    </div>
  )
}
