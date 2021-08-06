import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Banner"
      />
      <div className="home_row">
        <Product
          id={12321341}
          title="NVIDIA GeForce RTX 3070"
          price={1500}
          rating={5}
          image="https://i.ibb.co/TTXWwtN/RTX3090.jpg"
        />
        <Product
          id={12321342}
          title="ROG - ASUS ROG STRIX XG27VQ | Monitors | ASUS"
          price={999.99}
          rating={4}
          image="https://i.ibb.co/r0BTwtR/monitor.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id={12321343}
          title="Apple iPhone 12 Pro Max"
          price={1199.99}
          rating={4}
          image="https://i.ibb.co/Rz12twv/iphone12pro.jpg"
        />
        <Product
          id={12321344}
          title="Apple MacBook Pro (13-inch, 2020)"
          price={1600}
          rating={3}
          image="https://i.ibb.co/2kGvYLB/macbook-pro.jpg"
        />
        <Product
          id={12321345}
          title="Mouse Deathadder V2 Pro Wireless Razer"
          price={399.99}
          rating={3}
          image="https://i.ibb.co/tmGxYzK/mouse.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id={12321346}
          title="Sharp 50 4K ULTRA HD | 50BJ2E"
          price={550}
          rating={1}
          image="https://i.ibb.co/2Zj12Kp/tv.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
