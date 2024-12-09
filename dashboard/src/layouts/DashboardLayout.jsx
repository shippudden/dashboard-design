// import React from 'react'
import { motion } from "framer-motion";

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-100">
        <div className="sidebar-container md:w-96 h-screen w-full">
        {/* Sidebar */}
            <Sidebar />
        </div>

        {/* Main Content Area */}
        <motion.div 
          className="flex-1 bg-gray-100 p-6 h-full md:overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          >
            <Outlet />
        </motion.div>
    </div>
  )
}
