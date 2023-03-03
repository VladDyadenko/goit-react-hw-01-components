import styled from '@emotion/styled'

export const Container = styled.div`
    padding: 20px 0 0 0;
    width: 300px;
    height: 407px;
    margin: 40px auto 0 auto;
    background: #FFFFFF;
    border-radius: 20px;
    text-align: center;
    font-family: 'Roboto Slab', sans-serif;

`;

export const AvatarUser = styled.img`
   border-radius: 50%;
    max-width: 200px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    background: #baafaf;

`;
export const UserName = styled.p`
    font-weight: 700;
    font-size: 25px;
    margin: 15px 0;

`;
export const UserTag = styled.p`
    font-weight: 500;
    font-size: 15px;
    margin: 0 0 15px 0;

`;
export const UserGeo = styled.p`

    font-weight: 500;
    font-size: 15px;
    margin: 0 0 25px 0;

`;

export const StatList = styled.li`
    padding: 15px 15px;
    width: calc(100% / 3);

    :not(:last-child) {
    border-right: 1px solid #2f2f2f;
    }
`;

export const StatUser = styled.ul`

    display: flex;
    align-items: center;
    justify-content: center;
 
    list-style: none;
    border-top: 1px solid #2f2f2f;
    margin: 0;
    padding: 0;
   
`;



export const Label = styled.span`

    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 8px;

`;
export const Quantity = styled.span`
    font-weight: 500;

`;