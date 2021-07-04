import styled from 'styled-components';
import gallery1 from '../images/desktop/image-gallery-milkbottles.jpg';
import gallery2 from '../images/desktop/image-gallery-orange.jpg';
import gallery3 from '../images/desktop/image-gallery-cone.jpg';
import gallery4 from '../images/desktop/image-gallery-sugarcubes.jpg';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Gallery = () => {
  return (
    <section>
      <Container>
        <img src={gallery1} alt='gallery image' />
        <img src={gallery2} alt='gallery image' />
        <img src={gallery3} alt='gallery image' />
        <img src={gallery4} alt='gallery image' />
      </Container>
    </section>
  );
};

export default Gallery;
