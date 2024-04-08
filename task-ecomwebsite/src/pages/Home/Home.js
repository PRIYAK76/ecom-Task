import React from "react";
import "../Home/Home.css";
import Herosectionimg1 from "../../Images/Hero-section-image-1.png";
import Herosectionimg2 from "../../Images/Hero-section-image-2.png";
import Herosectionimg3 from "../../Images/Hero-section-image-3.png";
import Homecardimg1 from "../../Images/Card-image-home-1.png";
import Homecardimg2 from "../../Images/Card-image-home-2.png";
import Homecardimg3 from "../../Images/Card-image-home-3.png";
import Homecardimg4 from "../../Images/Card-image-home-4.png";
import SummerWinter from "../../Images/Home-page-bg-image.png";
import data from "../../datas/Collections-items.json";
import { IoIosStar } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsFillCartPlusFill } from "react-icons/bs";
import Layout from "../../components/layout/Layout";

const Home = () => {
  const Explorecards1 = data.Exploreproductcards;
  return (
    <Layout>
      <div className="hero-section-main-1 mt-3">
        <div className="column-left">
          <img class="herosection-image1 mb-4" src={Herosectionimg1} alt="logo" />
          <img class="herosection-image2" src={Herosectionimg2} alt="logo" />
        </div>
        <div className="column-center">
            <h1 className="herosection-title">Fashion create good lifestyle</h1>
            <p className="herosection-sub-title">A world-class trendy fashion collections. </p>
            <button className="btn btn-dark herosection-btn mt-5">Explore more</button>
        </div>
        <div className="column-right">
        <img class="herosection-image3" src={Herosectionimg3} alt="logo" />
        </div>
      </div>

      <div className=" container mt-3">
          <h1 className="home-section-title">Why Choosing Us</h1>
          <p className="home-section-sub-title">A style that permeates everything. We are attempting once more 
          to combine a high-end product presentation with contemporary usability.</p>
          <div className="home-section-cards">
            <div>
              <img src={Homecardimg1} alt="top quality"  className="home-sec-card"/>
              <p className="home-sec-card-title">Top Quality</p>
            </div>
            <div>
              <img src={Homecardimg2} alt="Fast Delivery"  className="home-sec-card"/>
              <p className="home-sec-card-title">Fast Delivery</p>
            </div>
            <div>
              <img src={Homecardimg3} alt="Cashback Reward"  className="home-sec-card"/>
              <p className="home-sec-card-title">Cashback Reward</p>
            </div>
            <div>
              <img src={Homecardimg4} alt="Secure Payment"  className="home-sec-card"/>
              <p className="home-sec-card-title">Secure Payment</p>
            </div>
          </div>
          <div className="mt-5">
            <img src={SummerWinter} alt="summers winter" className="home-page-image-background"/>
          </div>
      </div>

      {/* <div className="explore-section my-5 container">
        <h1 className="home-section-title">Explore now</h1>
        <div className="d-flex new-arrivals-product-card">
          {Explorecards1.map((product) => (
            <div className="product-card">
            <img
              src={product.img}
              className="product-cart-image"
            />
            <span><IoMdHeartEmpty size={27} className="wishlist-icon"/></span>
            <h1 className="product-card-name mt-2 text-center">{product.name}</h1>
            <div className="product-card-footer">
                  <p className="product-card-price mt-1">{product.price}&nbsp;&nbsp;</p>
                  <div className="stars">
                    <IoIosStar color="#FAC231"/><IoIosStar  color="#FAC231"/><IoIosStar  color="#FAC231"/><IoIosStar  color="#FAC231"/><IoIosStar  color="#FAC231"/>
                  </div>
            </div>
            <button className="d-flex mx-auto add-to-cart-btn">
                Add to cart &nbsp;<BsFillCartPlusFill size={22}/>
            </button>
            </div>
            ))}
        </div>
      </div> */}
      
    </Layout>
  );
};

export default Home;