import styled from 'styled-components';
import { Heading } from './styledElements/Heading';
import { Paragraph } from './styledElements/Paragraph';
import { FancyLink } from './styledElements/FancyLink';
import sectionImage from '../images/desktop/image-stand-out.jpg';
import Responsive from '../abstracts/Responsive';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;

  ${Responsive.lg`
    grid-template-columns: 1fr;
  `}

  .info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 75%;
    margin: 0 auto;

    ${Responsive.lg`
      order: -1;
      padding: 5rem;
      width: 100%;
    `}

    ${Responsive.sm`
      padding: 2rem;
    `}
  }

  img {
    height: 100%;
  }
`;

const StandOut = () => {
  return (
    <section>
      <Container>
        <img src={sectionImage} alt='' data-aos='fade-right' />
        <div className='info'>
          <Heading>Stand out to the right audience</Heading>
          <Paragraph>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </Paragraph>
          <FancyLink softRed>Learn more</FancyLink>
        </div>
      </Container>
    </section>
  );
};

export default StandOut;
