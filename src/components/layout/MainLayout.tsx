import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"


export default function MainLayout() {

  return (
    <div id="main-layout">

      <NavBar />

      <section>
        <Outlet />
      </section>

    </div>
  )
}