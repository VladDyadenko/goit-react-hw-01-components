import styled from '@emotion/styled'

export const Container = styled.section`
    padding: 10px ;
    width: 400px;
    margin: 25px auto;
    background: #ffffff;
    font-family: 'Roboto Slab', sans-serif;
    border-radius: 20px;
    
`;
export const Title = styled.h2`
    margin: 0 0 10px 0;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    
`;

export const Card = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
       
    list-style: none;
    padding-left: 0;
    margin: 0;
    
`;
export const CardList = styled.li`

    width: calc(100% / 5);
    padding: 10px;
    border-radius: 10px;

    :not(:last-child) {
        margin-right: 10px;
    }

`;


export const Label = styled.span`

    display: flex;
    flex-direction: column;
    align-items: center;
    
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 8px;
    text-shadow: 
    1px 1px 1px #000000;
    color: #f2f2f2; 
   
`;
export const Percentage = styled.span`

    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 8px;
    text-shadow: 
    1px 1px 1px #000000;
    color: #f2f2f2; 
   
`;