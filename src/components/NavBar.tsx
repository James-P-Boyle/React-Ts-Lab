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
        Multistep Form
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