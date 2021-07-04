import styled from 'styled-components';
import Link from './styledElements/Link';
import { flexCenter } from '../abstracts/Mixins';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterestSquare,
} from 'react-icons/fa';

const Container = styled.div`
  ${flexCenter};
  gap: 3rem;

  .icon {
    font-size: var(--sizeSm);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      transform: translateY(-5px);
    }
  }
`;

const Socials = () => {
  return (
    <Container>
      <Link>
        <FaFacebookSquare className='icon' />
      </Link>
      <Link>
        <FaInstagram className='icon' />
      </Link>
      <Link>
        <FaTwitter className='icon' />
      </Link>
      <Link>
        <FaPinterestSquare className='icon' />
      </Link>
    </Container>
  );
};

export default Socials;
