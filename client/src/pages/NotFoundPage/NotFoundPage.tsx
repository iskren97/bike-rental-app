import { StyledLink } from '../../components/Header/Header.styled';
import PageNotFound from '../../assets/not-found.png';
import { NotFoundPageImg, StyledNotFoundPage } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <NotFoundPageImg src={PageNotFound} />
      <StyledLink to="/">Stand Up </StyledLink>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;
