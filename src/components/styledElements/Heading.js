import styled, { css } from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

export const Heading = styled.h2`
  ${headingStyles};
  font-size: var(--sizeXxl);
  color: var(--black);

  color: ${({ graphicDesign }) =>
    graphicDesign && 'var(--darkDesaturatedCyan)'};

  color: ${({ photography }) => photography && 'var(--darkBlue)'};

  ${({ testimonialHeading }) =>
    testimonialHeading &&
    css`
      color: var(--grayishBlue);
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      padding-top: 10rem;

      ${Responsive.sm`
        font-size: var(--sizeMd);
        padding: 10rem 2rem 0 2rem;
        letter-spacing: 0.2rem;
      `}
    `}
`;
