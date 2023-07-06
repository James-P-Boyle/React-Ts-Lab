import { FormEvent, useState } from "react"
import { useMultistepForm } from "./hooks/useMultistepForm"
import UserForm from "./sampleForms/UserForm"
import AddressForm from "./sampleForms/AddressForm"
import AccountForm from "./sampleForms/AccountForm"

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  state: string
  city: string
  postalCode: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  state: "",
  city: "",
  postalCode: "",
  email: "",
  password: ""
}

export default function MuliStepForm() {

  const [data, setData] = useState(INITIAL_DATA)

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ])

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {...prev, ...fields}
    })
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()

    // POST TO DB LOGIC
    alert('Account created')
  }

  return (

    <div className="form-container">
      <form action="" onSubmit={onSubmit}>

        <div id="step-count">
          {currentStepIndex + 1} / {steps.length}
        </div>

        <div id="step-body">
          {step}
        </div>

        <div id="step-buttons">

          {!isFirstStep && (
            <button type="button" onClick={back}>Back</button>
          )}
          <button type="submit">
            {isLastStep ? "Finish" : "Next"}
          </button>

        </div>

      </form>
    </div>

  )
}
