import PropTypes from 'prop-types';
import { AvatarUser, Container, UserName, UserTag, UserGeo, StatUser, Label, Quantity, StatList } from './Profile.styled';


export const Profile = ({user})=> {
    const {username, tag, location, avatar,stats:{followers,views,likes}} = user;
    return (
    <Container  key={username}>
        <div >
            <AvatarUser
                src={avatar}
                alt="User avatar"
            />
            <UserName >{username}</UserName>
            <UserTag >@{tag}</UserTag>
            <UserGeo >{location}</UserGeo>
        </div>

        <StatUser >
            <StatList>
            <Label >Followers</Label>
            <Quantity>{followers}</Quantity>
            </StatList>
            <StatList>
            <Label >Views</Label>
            <Quantity >{views}</Quantity>
            </StatList>
            <StatList>
            <Label >Likes</Label>
            <Quantity >{likes}</Quantity>
            </StatList>
        </StatUser>
    </Container>);


};

Profile.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    }),
  };