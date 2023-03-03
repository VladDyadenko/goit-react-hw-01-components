import styled from '@emotion/styled'


export const Friend = styled.li`
    width: 380px;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;

    display: flex;
    align-items: center;
   
    background-color: #FFFFFF;


`;

export const CardFriend = styled.img`
    display: block;
    margin-right: 15px;

`;
export const NameFriend = styled.p`
    font-size: 20px;
    font-weight: 500;

`;
export const OnlineFriend = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 15px;


    background-color: ${props => {

        switch(props.isOnline) {
            case true:
            return 'green';
            case false:
            return 'red';
            default:
            return '#000000'
        }
    }};

`;