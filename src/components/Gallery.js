import styled from 'styled-components';
import gallery1 from '../images/desktop/image-gallery-milkbottles.jpg';
import gallery2 from '../images/desktop/image-gallery-orange.jpg';
import gallery3 from '../images/desktop/image-gallery-cone.jpg';
import gallery4 from '../images/desktop/image-gallery-sugarcubes.jpg';
import Responsive from '../abstracts/Responsive';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  img {
    height: 100%;
  }

  ${Responsive.sm`
    grid-template-columns: repeat(2,1fr);
  `}
`;

const Gallery = () => {
  return (
    <section>
      <Container>
        <img src={gallery1} alt='gallery one' data-aos='fade-down' />
        <img
          src={gallery2}
          alt='gallery two'
          data-aos='fade-down'
          data-aos-delay='250'
        />
        <img
          src={gallery3}
          alt='gallery three'
          data-aos='fade-down'
          data-aos-delay='450'
        />
        <img
          src={gallery4}
          alt='gallery four'
          data-aos='fade-down'
          data-aos-delay='650'
        />
      </Container>
    </section>
  );
};

export default Gallery;
