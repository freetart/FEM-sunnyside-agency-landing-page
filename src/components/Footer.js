import styled from 'styled-components';
import { flexCenter } from '../abstracts/Mixins';
import logo from '../images/logo.svg';
import Link from './styledElements/Link';
import Socials from './Socials';

const Container = styled.div`
  background-color: var(--darkModerateCyan);
  color: var(--darkDesaturatedCyan);
  ${flexCenter};
  flex-direction: column;
  padding: 2rem;

  .footer-logo {
    width: 20rem;
    margin-bottom: 3rem;
  }

  .footer-list {
    display: flex;
    gap: 3rem;
    margin-bottom: 3rem;
  }
`;

const Footer = () => {
  return (
    <footer>
      <Container>
        <img src={logo} alt='sunnyside logo' className='footer-logo' />
        <ul className='footer-list'>
          <li className='footer-item'>
            <Link footerLink>About</Link>
          </li>
          <li className='footer-item'>
            <Link footerLink>Services</Link>
          </li>
          <li className='footer-item'>
            <Link footerLink>Projects</Link>
          </li>
        </ul>
        <Socials />
      </Container>
    </footer>
  );
};

export default Footer;
