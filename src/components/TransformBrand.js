import styled from 'styled-components';
import { Heading } from './styledElements/Heading';
import { Paragraph } from './styledElements/Paragraph';
import { FancyLink } from './styledElements/FancyLink';
import sectionImage from '../images/desktop/image-transform.jpg';
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

const TransformBrand = () => {
  return (
    <section>
      <Container>
        <div className='info'>
          <Heading>Transform your brand</Heading>
          <Paragraph>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </Paragraph>
          <FancyLink yellow>Learn more</FancyLink>
        </div>
        <img src={sectionImage} alt='' data-aos='fade-left' />
      </Container>
    </section>
  );
};

export default TransformBrand;
