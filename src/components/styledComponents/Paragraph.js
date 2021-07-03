import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

export const Paragraph = styled.p`
  ${textStyles};
  font-size: var(--sizeXs);
  color: var(--DarkGrayishBlue);

  color: ${({ graphicDesign }) =>
    graphicDesign && 'var(--darkDesaturatedCyan)'};
  text-align: ${({ graphicDesign }) => graphicDesign && 'center'};

  color: ${({ photography }) => photography && 'var(--darkBlue)'};
  text-align: ${({ photography }) => photography && 'center'};
`;
