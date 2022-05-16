import styled from 'styled-components';

export const Container = styled.div` 
`;


export const Main = styled.div`
    max-width: 2000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: -12px;
    background-color: white;
    color:#868ed6;
    transition: background-color 2s linear 1s;
    &:hover{
        color: #86d686;;
    }
    h1{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 128px;
        line-height:100%
        
    }
   
`; 
export const Section = styled.div`
    background: white;
    
    margin-top: 50px;
    margin-bottom: 50px;
`;


