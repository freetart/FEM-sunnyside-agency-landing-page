import styled from 'styled-components';
import { flexCenter, headingStyles } from '../abstracts/Mixins';
import heroImg from '../images/desktop/image-header.jpg';
import iconArrow from '../images/icon-arrow-down.svg';
import Responsive from '../abstracts/Responsive';

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
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    text-align: center;
    ${flexCenter};

    ${Responsive.sm`
      font-size: 6rem;
      gap: 2rem;
    `}

    ${Responsive.xs`
      font-size: var(--sizeXxl);
      gap: 1.5rem;
    `}
  }

  .hero-icon {
    width: 5rem;

    ${Responsive.xs`
      width: 3rem;
    `}
  }
`;

const Header = () => {
  return (
    <Hero>
      <div className='hero-content'>
        <h1 className='hero-heading'>
          <span data-aos='zoom-out-right'>We</span>
          <span data-aos='zoom-out-down' data-aos-delay='100'>
            Are
          </span>
          <span data-aos='zoom-out-left' data-aos-delay='200'>
            Creatives
          </span>
        </h1>
        <img
          src={iconArrow}
          alt=''
          className='hero-icon'
          data-aos='fade-down'
          data-aos-delay='500'
        />
      </div>
    </Hero>
  );
};

export default Header;
