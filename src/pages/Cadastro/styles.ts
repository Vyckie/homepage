import styled from 'styled-components';
export const Container = styled.div`
    margin-top: 20px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding:15px ;
input{
    border-radius:6px;
    
}
`;

export const Form2 = styled.form`
    display: flex;
    flex-direction: column;
    padding:15px;
    input{
    border-radius:6px;
    }
`;

export const Button = styled.button`
    display: block;
    
    margin-left: 100px;
    margin-right: auto;
    
    margin-top: 64px;
    align-items: center;
    margin: 12px;
    padding:15px ;
    border-radius:6px;
    
    border: none;
    
    
    cursor: pointer;
    background-color: white;
    color:#868ed6;
    transition: background-color 2s linear 1s;
    &:hover{
        color: #86d686;
        
    }
`;
