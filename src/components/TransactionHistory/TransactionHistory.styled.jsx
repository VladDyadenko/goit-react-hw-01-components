import styled from '@emotion/styled'

export const Table = styled.table`

   
    width: 500px;
    margin: 20px auto;
    padding: 10px;
    text-align: center;
    font-family: 'Roboto Slab', sans-serif;

    background-color: #FFFFFF;
    border-collapse: collapse;
    border: 1px solid rgb(14, 14, 14);

`;

export const Tbody = styled.tbody`
    font-size: 13px;
    font-weight: 500;
    color: #2f2f2f;
    letter-spacing: 1px;
   
    padding: 5px;
    border: 1px solid rgb(14, 14, 14);
    
`;

export const Thead = styled.thead `
   
    padding: 5px;
    border: 1px solid rgb(14, 14, 14);

  
`;
export const TableTH = styled.th `
   
   padding: 5px;
    border: 1px solid rgb(14, 14, 14);
    width: 33%;
    background-color: #fff;
`;

export const TableTD = styled.td `
   
   padding: 5px;
    border: 1px solid rgb(14, 14, 14);
    width: 33%;
`;

export const TableRow = styled.tr`

    background-color: ${props => {

    switch(props.type) {
        case 'invoice':
        return '#b0d558';
        case "payment":
        return '#a5ecea';
        case "withdrawal":
        return '#507ce3';
        case "deposit":
        return '#80848c';
        default:
        return '#a5ecea'
    }
    }};
    
`;