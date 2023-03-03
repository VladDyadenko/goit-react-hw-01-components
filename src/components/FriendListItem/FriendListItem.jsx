import PropTypes from "prop-types"
import { CardFriend, Friend, NameFriend, OnlineFriend } from "./FriendListItem.styled"

export const FriendListItem =({avatar, name, isOnline})=> {
 return(
    
    <Friend >
        <OnlineFriend isOnline={isOnline} ></OnlineFriend>
        <CardFriend  src={avatar} alt="User avatar" width='48' />
        <NameFriend >{name}</NameFriend>
    </Friend>)
  
    
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired

    
}