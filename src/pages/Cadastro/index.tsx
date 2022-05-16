import React from 'react';
import { Container, Form, Form2, Button } from './styles';


const Cadastro: React.FC = () => {
  return (
    <Container>
      
      <h1>Entrar com e-mail e senha</h1>
      <Form>
        <input placeholder='Ex: exemplo@mail.com'/>
      </Form>
      <Form2>
        <input placeholder='Adicione sua senha'/>
      </Form2>
      <Button >ENTRAR</Button>
    </Container>
  )
}

export default Cadastro;