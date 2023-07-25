import { Route, Routes } from "react-router-dom";
import MuliStepForm from "../multistepForm/MultistepForm";
import MainLayout from "../components/layout/MainLayout";
import Currying from "../concepts/Currying";
import RefCallback from "../refCallback/RefCallback";
import Home from "../Home";
import DropDown from "../dropDown/DropDown";
import AnimateOnScroll from "../animateOnScroll/HomePage";
import SwipePage from "../swipePage/SwipePage";

export default function Routing() {

  return (
    <Routes>
      <Route path="/"  element={<MainLayout/>}>
        <Route index element={<Home />}/>
        <Route path="/multistep-form"  element={<MuliStepForm />}/>
        <Route path="/animate-on-scroll"  element={<AnimateOnScroll />}/>
        <Route path="/swipe"  element={<SwipePage />}/>
        <Route path="/dropdown"  element={<DropDown/>}/>
        <Route path="/ref-callback"  element={<RefCallback />}/>
        <Route path="/currying" element={<Currying />}/>
      </Route>
    </Routes>
  )
}