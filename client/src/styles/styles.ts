import { css } from 'styled-components';
import { colors, fonts } from './constants';

// re-usable styles, styled-components

const BaseButton = css`
  min-height: 3.5rem;
  padding: 0 1.5rem;
  cursor: pointer;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.bold};
  transition: all 0.2s;
  border-radius: 0.5rem;
  border: solid 1px ${colors.primary};
  user-select: none;

  &:disabled {
    pointer-events: none;
  }
`;

export { BaseButton };
