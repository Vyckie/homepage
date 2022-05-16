import React from 'react';
import { Main, Section} from './styles';
import Image from '../../componentes/imgs/image.webp';
import Img from '../../componentes/imgs/img.webp';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Main style={{ height: '100vh'}}>
        <h1>
          <span>INNOVATION.</span>
          <span>TECHNOLOGY.</span>
        </h1>
        
      </Main>
      <Section style={{}}>
          <img src={Image}/>
          
      </Section>
      <Section>
          <img src={Img}/>
      </Section>
      
      
    </Container>
  )
}

export default Home;