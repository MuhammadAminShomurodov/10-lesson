import "./Header.css";
import logo from "../../assets/images/logo.svg";
import person from "../../assets/images/person.svg";
import search from "../../assets/images/search.svg";
import like from "../../assets/images/like.svg";
import karzina from "../../assets/images/karzina.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="header-all">
          <div className="header-left">
            <Link to={"/"} className="header-left">
              <img src={logo} alt="Logo" />
              <b>
                <h1>Furniro</h1>
              </b>
            </Link>
          </div>
          <div className="header-middle">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/shop"}>Shop</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </div>
          <div className="header-right">
            <button>
              <img src={person} alt="" />
            </button>
            <button className="search">
              {" "}
              <img src={search} alt="" />
            </button>
            <button>
              {" "}
              <img src={like} alt="" />
            </button>
            <button>
              {" "}
              <img src={karzina} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
