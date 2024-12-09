// import React from 'react'
import {  FaMoneyBillWave, FaShoppingCart, FaBell, FaChartPie, FaCog } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const links = [
        {
            to: "/",
            icon: <FaMoneyBillWave />,
            title: "Income",
            description: "Click to see how much income you've made"
        },
        {
            to: "expenses",
            icon: <FaShoppingCart />,
            title: "Expenses",
            description: "Click to see how much you've spent"
        },
        {
            to: "sms-alerts",
            icon: <FaBell />,
            title: "SMS Alerts",
            description: "Click to see your financial SMS notifications"
        },
        {
            to: "investments",
            icon: <FaChartPie />,
            title: "Investments",
            description: "Click to see how much you've invested"
        },
        {
            to: "settings",
            icon: <FaCog />,
            title: "Settings",
            description: "Click to change your settings"
        }
    ]

  return (
    <motion.aside 
        className="bg-gray-900 text-white w-full lg:w-96 h-auto lg:h-screen p-6 flex flex-col space-y-6 min-h-screen justify-center"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        >
            {links.map((link, index) => (
                <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                    `flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-700 ${
                        isActive ? "bg-gray-700" : ""
                    }`
                }
            >
                <div className="text-2xl">{link.icon}</div>
                <div>
                    <h4 className="text-lg font-bold">{link.title}</h4>
                    <p className="text-sm text-gray-400">{link.description}</p>
                </div>
            </NavLink>
            ))}
    </motion.aside>
  )
}
