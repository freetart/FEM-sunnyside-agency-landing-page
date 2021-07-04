import styled, { css } from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

export const Paragraph = styled.p`
  ${textStyles};
  font-size: var(--sizeXs);
  color: var(--DarkGrayishBlue);

  ${({ graphicDesign }) =>
    graphicDesign &&
    css`
      color: var(--darkDesaturatedCyan);
      text-align: center;
    `}

  ${({ photography }) =>
    photography &&
    css`
      color: var(--darkBlue);
      text-align: center;
    `}
`;
