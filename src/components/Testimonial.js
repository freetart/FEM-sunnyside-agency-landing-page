import styled from 'styled-components';
import { headingStyles, textStyles } from '../abstracts/Mixins';

const Container = styled.div`
  text-align: center;

  .testimonial-img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    box-shadow: var(--mainShadow);
  }

  .testimonial-quote {
    ${textStyles};
    font-size: var(--sizeXs);
    padding: 4rem 0;
  }

  .testimonial-user {
    ${headingStyles};
    font-size: var(--sizeSm);
  }

  .testimonial-position {
    ${textStyles};
    font-size: var(--sizeXxs);
    color: var(--grayishBlue);
  }
`;

const Testimonial = ({ img, quote, user, position }) => {
  return (
    <article>
      <Container>
        <img src={img} alt='user' className='testimonial-img' />
        <blockquote>
          <p className='testimonial-quote'>{quote}</p>
        </blockquote>
        <h5 className='testimonial-user'>{user}</h5>
        <p className='testimonial-position'>{position}</p>
      </Container>
    </article>
  );
};

export default Testimonial;
