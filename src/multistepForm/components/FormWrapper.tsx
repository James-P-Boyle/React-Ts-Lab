type FormWrapperProps = {
  title: string
  children: React.ReactNode
}

export default function FormWrapper({title, children}: FormWrapperProps) {

  return (
    <div className="form-wrapper">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  )
}