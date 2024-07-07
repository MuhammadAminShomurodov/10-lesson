import { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import range1 from "../../assets/images/range1.png";
import range2 from "../../assets/images/range2.png";
import range3 from "../../assets/images/range3.png";
import dining from "../../assets/images/dining.png";
import living from "../../assets/images/living.png";
import bedroom from "../../assets/images/bedroom.png";
import right from "../../assets/images/right.svg";
import Allimg from "../../assets/images/all-imags.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="Home">
      <section>
        <div className="home-bg">
          <div className="container">
            <div className="home-right">
              <p className="par1">New Arrival</p>
              <h2>
                Discover Our <br /> New Collection
              </h2>
              <p className="par2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <button>BUY NOW</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="range-text">
            <h3>Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="range-cards">
            <div className="range-card">
              <img src={range1} alt="" />
              <p>Dining</p>
            </div>
            <div className="range-card">
              <img src={range2} alt="" />
              <p>Living</p>
            </div>
            <div className="range-card">
              <img src={range3} alt="" />
              <p>Bedroom</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="products-text">
            <h3>Our Products</h3>
          </div>
          <div className="products-cards">
            {products.map((product) => (
              <div key={product.id} className="products-card">
                <img src={product.imegs} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="api-body">{product.body}</p>
                <p>{product.description}</p>
                <p className="price"> {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="Room">
          <div className="container">
            <div className="room">
              <div className="room-word">
                <h2>50+ Beautiful rooms inspiration</h2>
                <p>
                  Our designer already made a lot of beautiful prototipe of
                  rooms that inspire you
                </p>
                <button>Explore More</button>
              </div>
              <div className="room-bg">
                <div className="bg-all">
                  <div className="all-word">
                    <div className="bg-word">
                      <div className="bg-top">
                        <h3>01</h3>
                        <span></span>
                        <p>Bed Room</p>
                      </div>
                      <div className="bg-bottom">
                        <h2>Inner Peace</h2>
                      </div>
                    </div>
                  </div>
                  <div className="bg-right">
                    <button>
                      <img src={right} alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="room-carusel">
                <Carousel>
                  <div>
                    <img src={dining} alt="" />
                  </div>
                  <div>
                    <img src={living} alt="" />
                  </div>
                  <div>
                    <img src={bedroom} alt="" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="Allimg">
          <div className="container">
            <div className="all">
              <p>Share your setup with</p>
              <h1>#FuniroFurniture</h1>
              <img src={Allimg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
