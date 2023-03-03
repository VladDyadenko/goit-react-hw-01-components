import PropTypes from "prop-types";
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Box} from "./FriendList.styled";

export const FriendList =({friends})=> {
    return (
        <Box>
        {friends.map(friend => 
            <FriendListItem 
            avatar ={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
            />

        )}
 
        </Box>
    ) 
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}