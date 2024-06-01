import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import test from "../../assets/test.jpg";
const Testimonial = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      <div>
        <img src={test} />
        <div className="myCarousel">
          <h3>Francis Kimani</h3>
          <h4>React dev</h4>
          <p>
            React has revolutionized my approach to front-end development with
            its component-based architecture and efficient virtual DOM. It has
            enabled me to build dynamic, high-performance web
          </p>
        </div>
      </div>
      <div>
        <img src={test} />
        <div className="myCarousel">
          <h3>Francis Kimani</h3>
          <h4>React dev</h4>
          <p>
            React has revolutionized my approach to front-end development with
            its component-based architecture and efficient virtual DOM. It has
            enabled me to build dynamic, high-performance web
          </p>
        </div>
      </div>

      <div>
        <img src={test} />
        <div className="myCarousel">
          <h3>Francis Kimani</h3>
          <h4>React dev</h4>
          <p>
            React has revolutionized my approach to front-end development with
            its component-based architecture and efficient virtual DOM. It has
            enabled me to build dynamic, high-performance web
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default Testimonial;
