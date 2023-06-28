import Carousel from 'react-bootstrap/Carousel';

function MyCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
         
          className="d-block w-25"
          src="https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg" 
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="https://i.pinimg.com/originals/f0/99/0a/f0990a648591249d2041694e531ebf70.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>LHarry Potter y la Cámara Secreta</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="https://gingerjumble.files.wordpress.com/2020/03/a3673b4b-74cd-4544-8eba-bd0b51fbee5f-1360x2040-1.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Harry Potter And The Philosopher's Stone</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;