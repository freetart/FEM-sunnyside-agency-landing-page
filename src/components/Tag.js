import styled from 'styled-components';
import { flexCenter, textStyles, headingStyles } from '../abstracts/Mixins';
import logo from '../images/logo/habibdevgif.gif';

const Article = styled.article`
  ${flexCenter};
  flex-wrap: wrap;
  padding: 2rem 2rem 1rem 2rem;
  background-color: var(--black);

  .tag-heading {
    ${textStyles};
    font-size: var(--sizeXs);
    color: var(--white);
    text-align: center;
  }

  .tag-link {
    ${headingStyles};
    color: var(--teal);

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .tag-logo {
    width: 5rem;
  }
`;

const Tag = () => {
  return (
    <Article>
      <h3 className='tag-heading'>
        project for{' '}
        <a
          href='https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef'
          target='_blank'
          rel='noreferrer'
          className='tag-link'
        >
          frontend mentor
        </a>{' '}
        coded by{' '}
        <a
          href='https://github.com/habibdev96'
          target='_blank'
          rel='noreferrer'
          className='tag-link'
        >
          habibdev{' '}
        </a>
      </h3>
      <img src={logo} alt='logo' className='tag-logo' />
    </Article>
  );
};

export default Tag;
