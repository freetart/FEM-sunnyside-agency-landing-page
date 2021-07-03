import styled from 'styled-components';
import logo from '../images/logo.svg';
import Button from './Button';
import { textStyles } from '../abstracts/Mixins';

const Nav = styled.nav`
  background-color: var(--teal);
  position: fixed;
  width: 100%;

  .nav-content {
    padding: 2rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-logo {
    width: 20rem;
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  .nav-link {
    ${textStyles}
    color: var(--white);
    font-size: var(--sizeXs);
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className='nav-content'>
        <img src={logo} alt='sunnyside logo' className='nav-logo' />
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              Services
            </a>
          </li>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              Projects
            </a>
          </li>
          <Button primary>Contact</Button>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
