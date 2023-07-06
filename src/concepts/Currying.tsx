import { useState } from 'react'

// This demonstrates two approaches:
// one using currying and the other without currying.

// The With Currying approach utilizes currying and closure to
// create reusable event handlers for updating state variables.
// This approach reduces code duplication and improves code readability.

// The Without Currying approach represents the traditional way of
// handling input changes with separate event handler functions for
// each input field. This approach serves as a comparison to highlight
// the benefits of using currying.

function Currying() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [notes, setNotes] = useState<string>('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
  }

  const handleNotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNotes(e.target.value)
  }

  return (
      <div className='max-w-lg mx-auto p-4'>

        <h1 className="text-green-600 font-bold text-4xl mb-4">
          With Currying
        </h1>

        <form className="flex flex-col gap-2">
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                className="border-2 border-black py-1 px-4 rounded-lg drop-shadow-xl"
            />
            <input
                type="text"
                name="name"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="border-2 border-black py-1 px-4 rounded-lg drop-shadow-xl"
            />
            <input
                type="text"
                name="name"
                value={notes}
                onChange={handleNotesChange}
                placeholder="Enter your notes"
                className="border-2 border-black py-1 px-4 rounded-lg drop-shadow-xl"
            />
        </form>

        <div className="border-2 border-black my-4 rounded-md py-1 px-4">
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Notes: {notes}</p>
        </div>

        <WithCurrying />

      </div>

  )
}

function WithCurrying() {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [notes, setNotes] = useState<string>('')

  const handleChange =
  // Currying process: A function that takes `stateFn` as a parameter and returns another function.
  (stateFn: React.Dispatch<React.SetStateAction<string>>): ((e: React.ChangeEvent<HTMLInputElement>) => void) => {
      // Closure: The returned function has access to `stateFn` through closure.
      return (e: React.ChangeEvent<HTMLInputElement>): void => {
          const { value } = e.target
          stateFn(value)
      }
  }

  return (
      <div>

        <h2 className="text-red-600 font-bold text-4xl mb-4">
          Without
        </h2>

        <form className="flex flex-col gap-2">
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange(setName)}
                placeholder="Enter your name"
                className="border-2 border-black py-1 px-4 rounded-lg drop-shadow-xl"
            />
            <input
                type="text"
                name="name"
                value={email}
                onChange={handleChange(setEmail)}
                placeholder="Enter your email"
                className="border-2 border-black py-1 px-4 rounded-lg drop-shadow-xl"
            />
            <input
                type="text"
                name="name"
                value={notes}
                onChange={handleChange(setNotes)}
                placeholder="Enter your notes"
                className="border-2 border-black py-1 px-4 rounded-lg drop-shadow-xl"
            />
        </form>

        <div className="border-2 border-black my-4 rounded-md py-1 px-4">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Notes: {notes}</p>
        </div>

      </div>
  )
}

export default Currying