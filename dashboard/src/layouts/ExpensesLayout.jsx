// import React from 'react'

import { Outlet } from "react-router-dom";
import Expenses from "../pages/Expenses";

export default function ExpensesLayout() {
  return (
    <div>
        <Expenses />
        <Outlet />
    </div>
  )
}
