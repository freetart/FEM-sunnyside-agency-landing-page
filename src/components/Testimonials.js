import styled from 'styled-components';
import { maxWidthLg, sectionSpacingLg } from '../abstracts/Mixins';
import { Heading } from './styledComponents/Heading';
import Testimonial from './Testimonial';
import testimonialData from '../data';

const Container = styled.div`
  ${maxWidthLg};
  ${sectionSpacingLg};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
`;

const Testimonials = () => {
  return (
    <section>
      <Heading testimonialHeading>Client Testimonials</Heading>
      <Container>
        {testimonialData.map((test, index) => {
          return (
            <Testimonial
              key={index}
              img={test.img}
              quote={test.quote}
              user={test.user}
              position={test.position}
            />
          );
        })}
      </Container>
    </section>
  );
};

export default Testimonials;
