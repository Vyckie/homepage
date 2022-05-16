import React from 'react';
import { Container } from './styled';

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
      <Container>
          <div>
              <ul>
                  <li>
                  <h1>Produtos & Serviços</h1>
                    <span>Smartphones</span>
                    <span>Tablets</span>
                    <span>Informática</span>
                    <span>Watches</span>
                    
                    <span>Smart Switch</span>
                    <span>Acessórios</span>
                    <span>TVs</span>
                    <span>Lifestyle TVs</span>
                    <span>Som</span>
                    <span>Monitores</span>
                  </li>
                  <li>
                    <h1>
                    SUPORTE 
                    </h1>
                    <span>Chat Online</span>
                    <span>Email</span>
                    <span>Fale Conosco</span>
                    <span>Centro de Serviços</span>
                    <span>Comunidade</span>
                  </li>
                  <li>
                      <h1>Sustentabilidade</h1>
                      
                      <span> Visão Geral</span>
                      <span> Meio Ambiente</span>
                      <span> Cidadania Corporativa</span>
                      <span> Responsabilidade Digital</span>
                      <span> Trabalho e direitos humanos</span>
                      <span> Diversidade e Inclusão</span>
                      <span> Cadeia de suprimentos sustentável</span>
                
                  </li>
              </ul>
          </div>
      </Container>
  )
}

export default Footer;