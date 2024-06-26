import React from 'react'
import { NavLink } from 'react-router-dom'

function Actionactivebuttons({ children,active,linkto }) {
    return (
        <div>
            <NavLink to={linkto}>
            <div className={`px-6 py-3 rounded-md text-center hover:scale-95 transition-all duration-200
                ${active ? "bg-[#FFD60A] text-[#000814]":"bg-[#161D29] text-[#FFFFFF]"}`}>
                {children}
            </div>
            </NavLink>
        </div>
    )
}

export default Actionactivebuttons
