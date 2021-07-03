import styled from 'styled-components';
import { Heading } from './styledComponents/Heading';
import { Paragraph } from './styledComponents/Paragraph';
import { FancyLink } from './styledComponents/FancyLink';
import sectionImage from '../images/desktop/image-transform.jpg';

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

const TransformBrand = () => {
  return (
    <section>
      <Container>
        <div className='info'>
          <Heading> Transform your brand</Heading>
          <Paragraph>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </Paragraph>
          <FancyLink yellow>Learn more</FancyLink>
        </div>
        <img src={sectionImage} alt='' />
      </Container>
    </section>
  );
};

export default TransformBrand;
