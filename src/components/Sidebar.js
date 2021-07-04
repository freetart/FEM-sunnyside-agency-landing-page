import styled from 'styled-components';
import { flexCenter } from '../abstracts/Mixins';
import { FancyLink } from './styledElements/FancyLink';
import { Button } from './styledElements/Button';

const Aside = styled.aside`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }

  .sidebar-content {
    ${flexCenter};
    align-items: flex-start;
    flex-direction: column;
    min-height: 80vh;
    padding: 2rem;
  }

  .sidebar-logo {
    width: 20rem;
    margin-bottom: 5rem;
  }

  .sidebar-links {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    text-align: center;
    margin-bottom: 5rem;
  }

  .sidebar-link {
    font-size: var(--sizeMd);
    color: var(--white);
  }

  .sidebar-button {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
`;

const Sidebar = ({ isActive }) => {
  if (isActive) {
    return (
      <Aside>
        <div className='sidebar-content'>
          <div className='sidebar-links'>
            <FancyLink softRed className='sidebar-link'>
              About
            </FancyLink>
            <FancyLink yellow className='sidebar-link'>
              Services
            </FancyLink>
            <FancyLink teal className='sidebar-link'>
              Projects
            </FancyLink>
          </div>
          <Button primary className='sidebar-button'>
            Contact
          </Button>
        </div>
      </Aside>
    );
  } else {
    return null;
  }
};

export default Sidebar;
