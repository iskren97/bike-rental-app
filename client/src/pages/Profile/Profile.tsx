import { useParams } from 'react-router-dom';
import { StyledLink } from '../../components/Header/Header.styled';
import { colors } from '../../styles/constants';
import { ProfileContainer, ProfileHeading, ProfileNav } from './Profile.styled';
import Users from '../Manager/Users/Users';
import Bikes from '../Manager/Bikes/Bikes';
import UserBookings from '../../components/UserBookings/UserBookings';
import { useCookies } from 'react-cookie';

// Profile page holds the Profile page of the logged user
// and the Manager Portal
// where managers can do different things
// related to Users & Bikes
// it features 3 components - Users, Bikes, UserBookings

const Profile = () => {
  const { subpath } = useParams();
  const [cookies, _] = useCookies(['user_role']);

  const linkClasses = (type: string = '') => {
    if (type === subpath) {
      return {
        backgroundColor: `${colors.primary}`,
        borderRadius: '5px',
      };
    }
  };

  return (
    <ProfileContainer>
      <ProfileHeading>
        {cookies?.user_role === 'manager' ? 'Manager Portal' : 'My Profile'}
      </ProfileHeading>

      <ProfileNav>
        {cookies?.user_role === 'manager' && (
          <>
            <StyledLink style={linkClasses('bikes')} to={'/profile/bikes'}>
              Bikes
            </StyledLink>

            <StyledLink style={linkClasses('users')} to={'/profile/users'}>
              Users
            </StyledLink>
          </>
        )}

        <StyledLink
          style={linkClasses('reservations')}
          to={'/profile/reservations'}
        >
          Reservations
        </StyledLink>
      </ProfileNav>

      {subpath === 'users' && cookies?.user_role === 'manager' && <Users />}
      {subpath === 'bikes' && cookies?.user_role === 'manager' && <Bikes />}
      {subpath === 'reservations' && <UserBookings />}
    </ProfileContainer>
  );
};

export default Profile;
