import styled from 'styled-components';

export const Container = styled.div`
   
  height: 50px;
  color: var(--white);
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
 
 
  text-align: center;
  margin-bottom: 4.8rem;
  h1{
      font-size: 18px;
  }
  span{
      margin :8px;
  }
  div ul{
        background: white;
        display:flex;
        padding: 20px 0 0;
        
    };
    div ul li{
        display: flex;
        flex-direction: column;
        margin:10px;
        width: 100%;
        height: 300PX;
        list-style-type: none;
        color:black;
        font-size: 12px;
        letter-spacing: 1px;
       
    };

`;
