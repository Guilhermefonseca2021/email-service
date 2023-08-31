import { Button, Spacer } from '@chakra-ui/react'
import { PrimaryInput } from './components/PrimaryInput/PrimaryInput'
import { useState } from 'react'
import { useIdentityMutation } from './hooks/useIdentityMutation'

function App() {
  const { mutate, isLoading } = useIdentityMutation()
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function submit() {
    mutate({
      email,
      firstName,
      lastName,
    })
  }
  
  return (
    <>
      <div className='container'>
        <form onSubmit={submit}>
          <div className='name-form-container'>
            <PrimaryInput 
              value={firstName} 
              onChange={event => setEmail(event.target.value)} 
              name='firstName' 
              label='Primeiro nome:'
              placeholder='Guilherme'
            />
            <PrimaryInput 
              value={lastName} 
              onChange={event => setEmail(event.target.value)} 
              name='lastName' 
              label='Sobrenome:'
              placeholder='Fonseca'
            />
          </div>
          <Spacer height='1' />
          <PrimaryInput 
            value={email} 
            onChange={event => setEmail(event.target.value)} 
            name='email' 
            label='Digite seu e-mail:'
            placeholder='guih@gmail.com'
          />
          <Spacer height='3' />
          <Button colorScheme='green'>Enviar</Button>
        </form>

        <div className="product-details wrapper">
          <h2>Assinatura mensal</h2>
          <p>Você irá pegar:</p>
          <span>R$ 250</span>
          <p className='product-info'>
          Assinatura mensal de plano de envios solução conveniente e econômica para empresas enviar campanhas de email, engajar com seu público-alvo.  
          </p>
        </div>
      </div>
    </>
  )
}

export default App
