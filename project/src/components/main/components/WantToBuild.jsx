import React from "react";
import cover from "../../../img/mainImg/wantToBuild/city.jpg";
import Button from "./Button";
import Image from "next/image";


const WantToBuild = () => {
  return (
    <section id="sectionWantToBuild" className="page-wantToBuild wantToBuild">
      <div className="wantToBuild-top">
        <div className="wantToBuild-top__cover _ibg">
          <Image src={cover} alt="" layout="fill"/>
        </div>
        <div className="wantToBuild-top__container _container">
          <div className="wantToBuild-top__content">
            <h2 className="wantToBuild-top__title">
              Want to build <br /> something amazing?
            </h2>
            <Button>GET IN TOUCH</Button>
          </div>
        </div>
      </div>
      <div className="wantToBuild-bottom">
        <div className="wantToBuild-bottom__container _container">
          <div className="wantToBuild-bottom__content">
            <h2 className="wantToBuild-bottom__title">Newsletter Signup</h2>
            <form className="wantToBuild-bottom__form form">
                <input className="form-input" type="email" required placeholder="test@youremail.com"/>
                <Button>SIGNUP</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WantToBuild;
