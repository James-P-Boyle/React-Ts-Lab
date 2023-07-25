import { NavLink, NavLinkProps } from "react-router-dom"

export default function NavBar() {

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "active-link" : "" }

      >
        Home
      </NavLink>
      <NavLink
        to="/multistep-form"
        className={({ isActive }) => isActive ? "active-link" : "" }
      >
        Multistep_Form
      </NavLink>
      <NavLink
        to="/animate-on-scroll"
        className={({ isActive }) => isActive ? "active-link" : "" }
      >
        Animate_On_Scroll
      </NavLink>
      <NavLink
        to="/swipe"
        className={({ isActive }) => isActive ? "active-link" : "" }
      >
        Swipe_Page
      </NavLink>
      <NavLink
        to="/dropdown"
        className={({ isActive }) => isActive ? "active-link" : "" }
      >
        Dropdown
      </NavLink>
      <NavLink
        to="/ref-callback"
        className={({ isActive }) => isActive ? "active-link" : "" }
      >
        CallbackRef
      </NavLink>
      <NavLink
        to="/currying"
        className={({ isActive }) => isActive ? "active-link" : "" }
      >
        Currying
      </NavLink>
    </nav>
  )
}