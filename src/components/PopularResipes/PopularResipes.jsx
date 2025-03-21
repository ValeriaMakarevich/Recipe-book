import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { resipes } from "../../data";
import "./PopularResipes.css";

const titleResipe = "Самые популярные рецепты:";

function PopularResipes() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    
  };
  return (
    <>
    
      <h2>{titleResipe}</h2>
      <div className="popular-resipes">
        <Slider {...settings}>
          { resipes.map((item, id) => { if (id < 8)
            return (
              <div className="popular-resipes_list" key={id}>
                <div>
                  <img
                    className="popular-resipes_img"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div>
                  <p>{item.title}</p>
                </div>
              </div>
            )
          }) }
        </Slider>
      </div>
    </>
  );
}

export default PopularResipes;
