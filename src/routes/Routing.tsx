import { Route, Routes } from "react-router-dom";
import MuliStepForm from "../multistepForm/MultistepForm";
import MainLayout from "../components/layout/MainLayout";
import Currying from "../concepts/Currying";

export default function Routing() {

  return (
    <Routes>
      <Route path="/"  element={<MainLayout/>}>
        <Route index element={<h1>home</h1>}/>
        <Route path="/multistep-form"  element={<MuliStepForm />}/>
        <Route path="/currying" element={<Currying />}/>
      </Route>
    </Routes>
  )
}