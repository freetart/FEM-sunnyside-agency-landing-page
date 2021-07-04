import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import Responsive from '../abstracts/Responsive';

const Button = styled.button`
  display: none;
  background: transparent;
  outline: 0;
  border: 0;
  z-index: 100;

  ${Responsive.md`
      display: block;
  `}

  .toggle-icon {
    position: fixed;
    right: 2rem;
    top: 1.5rem;
    color: var(--white);
    font-size: var(--sizeMd);
  }
`;

const ToggleSidebar = ({ isActive, setIsActive }) => {
  return (
    <Button className='toggle' onClick={() => setIsActive(!isActive)}>
      {!isActive ? (
        <FaBars className='toggle-icon' />
      ) : (
        <FaTimes className='toggle-icon' />
      )}
    </Button>
  );
};

export default ToggleSidebar;
