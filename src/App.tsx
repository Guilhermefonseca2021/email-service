import { PrimaryInput } from './components/PrimaryInput/PrimaryInput'
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')

  return (
    <>
      <div className='input-container'>
        <PrimaryInput 
          value={email} 
          onChange={event => setEmail(event.target.value)} 
          name='email' 
          label='Digite seu e-mail:'
        />
      </div>
    </>
  )
}

export default App
