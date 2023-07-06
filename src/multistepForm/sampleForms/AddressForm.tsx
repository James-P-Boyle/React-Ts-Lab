import FormWrapper from "../components/FormWrapper"

type AddressData = {
  street: string
  city: string
  state: string
  postalCode: string
}
type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export default function AddressForm({street, city, state, postalCode, updateFields}:AddressFormProps ) {
  return (
    <FormWrapper title="Address Details">
      <label>Street</label>
      <input
        autoFocus
        required
        value={street}
        type="text"
        onChange={(e) => updateFields({street: e.target.value})}
      />
      <label>City</label>
      <input
        required
        value={city}
        type="text"
        onChange={(e) => updateFields({city: e.target.value})}
      />
      <label>State</label>
      <input
        required
        value={state}
        type="text"
        onChange={(e) => updateFields({state: e.target.value})}
      />
      <label>Postal Code</label>
      <input
        required
        value={postalCode}
        type="text"
        onChange={(e) => updateFields({postalCode: e.target.value})}
      />
    </FormWrapper>
  )
}