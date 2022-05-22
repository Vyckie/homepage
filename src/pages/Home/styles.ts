import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;


export const Main = styled.div`
        
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    max-width: 800px;
    min-width: 320px;
    margin:auto;
    letter-spacing: -12px;
    background-color:white;
    color:#868ed6;
    transition: background-color 2s linear 1s;
    &:hover{
        color: #86d686;;
    }
    h1{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 80px;
        
        
    }
    
   
`; 
export const Section = styled.div`
    background: white;
    
    margin-top: 50px;
    margin-bottom: 50px;
    min-width: 320px;
    max-width: 1366px;

    img{
        width: 100%;
    }
`;


