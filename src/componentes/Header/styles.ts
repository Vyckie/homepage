import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';
import {BiSearchAlt2, BiShoppingBag} from 'react-icons/bi';


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  top:0;
  left:0;
  right:0;
  bottom:0;  
  
  
  span{
    margin-top: 50px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 50px;
    front-size:70px;
  }
  h1{
    font-size: medium;
  }
 
`;


export const Logo = styled(FaGlobeAmericas)`
    
    margin-top: -20px;
    fill: var(--logo);
    width: 100px;
    height: 30px;
    flex-shrink: 0;

`;
export const Pesquisa = styled(BiSearchAlt2)`
    fill: var(--logo);
    width: 28px;
    height: 32px;
    flex-shrink: 0;

`;
export const Compras = styled(BiShoppingBag)`
    fill: var(--logo);
    width: 28px;
    height: 32px;
    flex-shrink: 0;

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

    cursor: pointer;
    
    background-color: white;
    color:black;
    transition: background-color 2s linear 1s;
    &:hover{
        color: #868ed6;
    }
`;
