import styled from 'styled-components';
import logo from '../images/logo.svg';
import { Button } from './styledElements/Button';
import Link from './styledElements/Link';

const Nav = styled.nav`
  background-color: var(--teal);
  position: fixed;
  width: 100%;
  z-index: 1000;

  .nav-content {
    padding: 1rem 2rem;
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
`;

const Navbar = () => {
  return (
    <Nav>
      <div className='nav-content'>
        <img src={logo} alt='sunnyside logo' className='nav-logo' />
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link nav>About</Link>
          </li>
          <li className='nav-item'>
            <Link nav>Services</Link>
          </li>
          <li className='nav-item'>
            <Link nav>Projects</Link>
          </li>
          <Button primary>Contact</Button>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
