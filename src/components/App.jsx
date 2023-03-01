import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json'

export const App = () => {
  return (
    <div>
      <Profile user = {user}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends ={friends}  />
    </div>
  );
};
