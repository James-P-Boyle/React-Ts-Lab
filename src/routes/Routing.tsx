import { Route, Routes } from "react-router-dom";
import MuliStepForm from "../multistepForm/MultistepForm";
import MainLayout from "../components/layout/MainLayout";

export default function Routing() {

  return (
    <Routes>
      <Route path="/"  element={<MainLayout/>}>
        <Route index element={<h1 className="bg-red-500">home</h1>}/>
        <Route path="/multistep-form"  element={<MuliStepForm />}/>
      </Route>
    </Routes>
  )
}