// import React from 'react'

import { Outlet } from "react-router-dom";
import Income from "../pages/Income";
// import Income from "../pages/Income";

export default function IncomeLayout() {
  return (
    <div>
      <Income />
        <Outlet />
    </div>
  )
}
