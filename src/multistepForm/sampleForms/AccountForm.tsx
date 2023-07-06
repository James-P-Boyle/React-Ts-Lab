import FormWrapper from "../components/FormWrapper"

type AccountData = {
  email: string
  password: string
}
type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export default function AccountForm({email, password, updateFields}: AccountFormProps) {
  return (
    <FormWrapper title="Account Details">
      <label>Email</label>
      <input
        autoFocus
        required
        value={email}
        type="email"
        onChange={(e) => updateFields({email: e.target.value})}
      />
      <label>Password</label>
      <input
        required
        value={password}
        type="password"
        onChange={(e) => updateFields({password: e.target.value})}
      />
    </FormWrapper>
  )
}