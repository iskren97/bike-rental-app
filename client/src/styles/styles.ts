import { css } from 'styled-components';
import { colors } from './constants';

const BaseButton = css`
  min-height: 3.5rem;
  padding: 0 1.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.2s;
  border-radius: 0.5rem;
  border: solid 1px ${colors.primary};
  user-select: none;
`;

export { BaseButton };
