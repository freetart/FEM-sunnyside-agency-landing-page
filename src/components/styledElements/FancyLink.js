import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const FancyLink = styled.a`
  ${headingStyles};
  font-size: var(--sizeXs);
  cursor: pointer;
  padding: 1rem;
  height: fit-content;
  width: fit-content;
  transition: var(--mainTransition);

  border-bottom: ${({ yellow }) => yellow && '0.5rem dotted var(--yellow)'};

  border-bottom: ${({ softRed }) => softRed && '0.5rem dotted var(--softRed)'};

  border-bottom: ${({ teal }) => teal && '0.5rem dotted var(--teal)'};

  &:hover,
  &:focus {
    letter-spacing: 0.3rem;
  }
`;
