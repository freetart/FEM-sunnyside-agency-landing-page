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
        <img src={gallery1} alt='gallery one' />
        <img src={gallery2} alt='gallery two' />
        <img src={gallery3} alt='gallery three' />
        <img src={gallery4} alt='gallery four' />
      </Container>
    </section>
  );
};

export default Gallery;
