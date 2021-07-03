import styled from 'styled-components';
import { flexCenter, headingStyles } from '../abstracts/Mixins';
import heroImg from '../images/desktop/image-header.jpg';
import iconArrow from '../images/icon-arrow-down.svg';

const Hero = styled.header`
  height: 100vh;
  width: 100vw;
  background: url(${heroImg}) center center/cover no-repeat;

  .hero-content {
    ${flexCenter};
    flex-direction: column;
    gap: 5rem;
    height: 100vh;
    width: 100vw;
  }

  .hero-heading {
    ${headingStyles};
    color: var(--white);
    font-size: 10rem;
    text-transform: uppercase;
  }

  .hero-icon {
    width: 5rem;
  }
`;

const Header = () => {
  return (
    <Hero>
      <div className='hero-content'>
        <h1 className='hero-heading'>We Are Creatives</h1>
        <img src={iconArrow} alt='' className='hero-icon' />
      </div>
    </Hero>
  );
};

export default Header;
