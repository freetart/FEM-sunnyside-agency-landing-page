import styled from 'styled-components';
import { flexCenter } from '../abstracts/Mixins';
import { Heading } from './styledElements/Heading';
import { Paragraph } from './styledElements/Paragraph';
import graphicDesign from '../images/desktop/image-graphic-design.jpg';
import photography from '../images/desktop/image-photography.jpg';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;

  .info {
    ${flexCenter};
    flex-direction: column;
    justify-content: flex-end;
    height: 80vh;
  }

  .graphic-design {
    background: url(${graphicDesign}) center center/cover no-repeat;
    padding: 5rem;
  }

  .photography {
    background: url(${photography}) center center/cover no-repeat;
    padding: 5rem;
  }
`;

const Services = () => {
  return (
    <section>
      <Container>
        <div className={'info graphic-design'}>
          <Heading graphicDesign>Graphic design</Heading>
          <Paragraph graphicDesign>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </Paragraph>
        </div>
        <div className={'info photography'}>
          <Heading photography>Photography</Heading>
          <Paragraph photography>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </Paragraph>
        </div>
      </Container>
    </section>
  );
};

export default Services;
