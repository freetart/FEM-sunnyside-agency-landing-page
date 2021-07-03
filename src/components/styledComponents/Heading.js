import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const Heading = styled.h2`
  ${headingStyles};
  font-size: var(--sizeXxl);
  color: var(--black);

  color: ${({ graphicDesign }) =>
    graphicDesign && 'var(--darkDesaturatedCyan)'};

  color: ${({ photography }) => photography && 'var(--darkBlue)'};
`;
