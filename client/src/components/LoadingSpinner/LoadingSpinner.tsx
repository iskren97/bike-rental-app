import { RotatingLines } from 'react-loader-spinner';
import StyledSpinner from './LoadingSpinner.styled';
import { colors } from '../../styles/constants';

const LoadingSpinner = () => {
  return (
    <StyledSpinner>
      <RotatingLines
        strokeColor={`${colors.primary}`}
        strokeWidth="5"
        animationDuration="0.75"
        width="60"
        visible={true}
      />
    </StyledSpinner>
  );
};

export default LoadingSpinner;
