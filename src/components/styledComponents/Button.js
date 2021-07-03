import styled from 'styled-components';
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

  background-color: ${({ primary }) => primary && 'var(--white)'};
  color: ${({ primary }) => primary && 'var(--black)'};

  &:hover,
  &:focus {
    background-color: ${({ primary }) => primary && 'var(--teal)'};
    color: ${({ primary }) => primary && 'var(--white)'};
  }
`;
