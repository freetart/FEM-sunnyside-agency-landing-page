import styled from 'styled-components';
import { maxWidthLg, sectionSpacingLg } from '../abstracts/Mixins';
import { Heading } from './styledElements/Heading';
import Testimonial from './Testimonial';
import testimonialData from '../data';
import Responsive from '../abstracts/Responsive';

const Container = styled.div`
  ${maxWidthLg};
  ${sectionSpacingLg};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;

  ${Responsive.lg`
    grid-template-columns: 1fr;
    gap: 10rem;
    padding: 10rem 2rem;
  `}
`;

const Testimonials = () => {
  return (
    <section data-aos='fade-up'>
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
