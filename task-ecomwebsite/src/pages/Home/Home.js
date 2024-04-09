import React from "react";
import "../Home/Home.css";
import Herosectionimg3 from "../../Images/herosecimg1.png";
import Herosectionimag5 from "../../Images/herosectionimag5.png";
import heroimg6 from "../../Images/heroimg6.png"
import heroimg7 from "../../Images/heroimg7.png"
import Mainbanner from "../../Images/mainbannerattiremainbanner.png"
import Homecardimg1 from "../../Images/Card-image-home-1.png";
import Homecardimg2 from "../../Images/Card-image-home-2.png";
import Homecardimg3 from "../../Images/Card-image-home-3.png";
import Homecardimg4 from "../../Images/Card-image-home-4.png";
import data from "../../datas/Collections-items.json";
import Layout from "../../components/layout/Layout";
import { NavLink } from "react-router-dom";

const Home = () => {
  const Explorecards1 = data.Exploreproductcards;
  return (
    <Layout>

      <div className="hero-section-main-1 mt-3">
        {/* <div className="column-left">
          <img class="herosection-image1 mb-4" src={heroimg6} alt="logo" />
          <img class="herosection-image2" src={Herosectionimag5} alt="logo" />
        </div> */}
        <div className="mx-auto column-center">
            <h1 className="herosection-title">The joy of dressing is an art</h1>
            <p className="herosection-sub-title">Style is a way to say who you are without having to speak</p>
            <NavLink to="/women"><button className="btn btn-dark herosection-btn mt-5">Explore more</button></NavLink>
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
          <img src={Mainbanner} className="home-page-image-background container"/>

      </div>
    </Layout>
  );
};

export default Home;
