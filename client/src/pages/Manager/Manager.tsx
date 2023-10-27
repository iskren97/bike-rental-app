import { useNavigate, useParams } from 'react-router-dom';
import { StyledLink } from '../../components/Header/Header.styled';
import { colors } from '../../styles/constants';
import {
  ManagerPortalContainer,
  ManagerPortalHeading,
  ManagerPortalNav,
} from './Manager.styled';
import Users from './components/Users/Users';
import Bikes from './components/Bikes/Bikes';

// Manager page holds the Manager Portal
// where manager can do different things
// related to Users & Bikes
// it features 2 components - Users, Bikes

const Manager = () => {
  const { subpath } = useParams();

  const linkClasses = (type: string = '') => {
    if (type === subpath) {
      return {
        backgroundColor: `${colors.primary}`,
        borderRadius: '5px',
      };
    }
  };

  return (
    <ManagerPortalContainer>
      <ManagerPortalHeading>Manager Portal</ManagerPortalHeading>
      <ManagerPortalNav>
        <StyledLink style={linkClasses('bikes')} to={'/manager/bikes'}>
          Bikes
        </StyledLink>

        <StyledLink style={linkClasses('users')} to={'/manager/users'}>
          Users
        </StyledLink>
      </ManagerPortalNav>

      {subpath === 'users' && <Users />}
      {subpath === 'bikes' && <Bikes />}
    </ManagerPortalContainer>
  );
};

export default Manager;
