import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

const Link = styled.a`
  ${textStyles}
  font-size: var(--sizeXs);
  cursor: pointer;

  color: ${({ nav }) => nav && 'var(--white)'};

  color: ${({ footerLink }) => footerLink && 'var(--darkDesaturatedCyan)'};

  &:hover,
  &:focus {
    border-bottom: ${({ nav }) => nav && '0.1rem solid var(--white)'};

    border-bottom: ${({ footerLink }) =>
      footerLink && '0.1rem solid var(--darkDesaturatedCyan)'};
  }
`;

export default Link;
