import styled from 'styled-components';
import { SiSamsung } from 'react-icons/si';
import {BiSearchAlt2, BiShoppingBag} from 'react-icons/bi';


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 80%;
  
  margin:auto;
  
  
  justify-content: space-between;
  top:0;
  left:0;
  right:0;
  bottom:0;  
  
  span{
    front-size:70px;
  }
  
`;


export const Logo = styled(SiSamsung)`
    
    margin-top: -30px;
    color: blue;
    width: 100px;
    height: 100px;
    flex-shrink: 0;

`;

export const Pesquisa = styled(BiSearchAlt2)`
    fill: var(--logo);
    width: 28px;
    height: 32px;
    flex-shrink: 0;
    cursor: pointer;

`;

export const Compras = styled(BiShoppingBag)`
    fill: var(--logo);
    width: 28px;
    height: 32px;
    flex-shrink: 0;
    cursor: pointer;
`;

export const Button = styled.button`
    display: block;
    font-size: medium;
    margin-left: 100px;
    margin-right: auto;
    
    margin-top: 30px;
    align-items: center;
    margin: 4px;
    padding:6px ;
    border-radius:4px;
    color:gray;
    border: none;

    
    
    background-color: white;
    color:black;
    transition: background-color 2s linear 1s;
    &:hover{
        color: #868ed6;
    }
`;
