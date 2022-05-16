import styled from'styled-components';

export const Main = styled.main`
    .first{
        background: green;
        overflow: hidden;

        .offset{}
        .a{
            background: #f5f1ea
        }
        .b{
            background: #582534;
        }
        .c{
            background: #0a7397;
        }

    }
    .second{
        background : red;
    }
    .third{
        background : yellow;
    }
`;

export const Section = styled.div`
    position: relative;
`;
export const Sticky = styled.div`
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`;
