import { useCookies } from 'react-cookie';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { StyledLink } from '../../components/Header/Header.styled';
import { colors } from '../../styles/constants';
import {
  ManagerPortalContainer,
  ManagerPortalHeading,
  ManagerPortalNav,
} from './Manager.styled';
import Users from '../../components/Users/Users';

const Manager = () => {
  const [cookies, _] = useCookies(['access_token']);
  const navigate = useNavigate();
  const { subpath } = useParams();

  if (!cookies.access_token) {
    navigate('/');
  }

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
    </ManagerPortalContainer>
  );
};

export default Manager;
