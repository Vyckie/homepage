import React from 'react';
import { Button } from './styles';

import { Container,Logo, Pesquisa, Compras} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
     <span> <Logo/><h1>WORLD TEC</h1></span>
     
     <span><Button>Produtos</Button></span>
     <span><Button>Serviços</Button></span>
     <span><Button>Cadastre-se</Button></span>
     <span><Pesquisa/></span>
     <span><Compras/></span>
      </Container>

  )
}

export default Header;