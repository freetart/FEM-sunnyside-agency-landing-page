import styled from 'styled-components';
import { Heading } from './styledComponents/Heading';
import { Paragraph } from './styledComponents/Paragraph';
import { FancyLink } from './styledComponents/FancyLink';
import sectionImage from '../images/desktop/image-stand-out.jpg';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 75%;
    margin: 0 auto;
  }
`;

const StandOut = () => {
  return (
    <section>
      <Container>
        <img src={sectionImage} alt='' />
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
