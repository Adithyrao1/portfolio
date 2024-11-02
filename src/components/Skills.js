import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import reactimg from "../assets/img/react.png";
import jsimg from "../assets/img/js.png";
import nodejsimg from "../assets/img/nodejs.png";
import mongoimg from "../assets/img/mongo.png";
import cimg from "../assets/img/c++ig.png";
import pythonimg from "../assets/img/python.png";
import sqlimg from "../assets/img/mysql.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn skill">
                        <h2>Skills</h2>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={cimg} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={jsimg} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={sqlimg} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={pythonimg} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={reactimg} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={nodejsimg} alt="Image" />
                                <h5>Node js</h5>
                            </div>
                            <div className="item">
                                <img src={mongoimg} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
