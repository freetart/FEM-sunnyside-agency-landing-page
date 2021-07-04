import styled, { css } from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const Button = styled.a`
  ${headingStyles};
  letter-spacing: 0;
  padding: 1.5rem 2rem;
  border-radius: 5rem;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: var(--mainShadow);
  font-size: var(--sizeXs);
  transition: var(--mainTransition);

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--white);
      color: var(--black);
    `}

  &:hover,
  &:focus {
    ${({ primary }) =>
      primary &&
      css`
        background-color: var(--teal);
        color: var(--white);
      `}
  }
`;
