import React from "react";
import Image from "next/image";
import logoWhite from "./../../img/headerImg/logoWhite.png";
import iconGoogle from "./../../img/footerImg/google.svg";
import iconTwitter from "./../../img/footerImg/tw.svg";
import iconFaceBook from "./../../img/footerImg/fb.svg";
import Link from "next/link";
import MyLink from "../header/MyLink";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="footer-container _container">
        <div className="footer-top__item footer-item footer-item__first">
          <div className="footer-item__title title__first">COMPANY</div>
          <div className="footer-item__content">
            <div className="footer-item__logo">
              <Image src={logoWhite} alt="" />
            </div>
            <div className="footer-item__text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </div>
          </div>
        </div>
        <div className="footer-top__item footer-item footer-item__second">
          <div className="footer-item__title title__second">LINKS</div>
          <div className="footer-item__nav">
            <ul className="footer-item__menu footer-menu">
              <li className="footer-menu__item">
                <MyLink href="/" styleName="footer-menu__link">
                  HOME
                </MyLink>
              </li>
              <li className="footer-menu__item">
                <MyLink href="/about" styleName="footer-menu__link">
                  ABOUT
                </MyLink>
              </li>
              <li className="footer-menu__item">
                <MyLink href="/services" styleName="footer-menu__link">
                  SERVICES
                </MyLink>
              </li>
              <li className="footer-menu__item">
                <MyLink href="/posts" styleName="footer-menu__link">
                  POSTS
                </MyLink>
              </li>
              <li className="footer-menu__item">
                <MyLink href="/work" styleName="footer-menu__link">
                  PROJECTS
                </MyLink>
              </li>
              <li className="footer-menu__item">
                <MyLink href="#" styleName="footer-menu__link">
                  CONTACT US
                </MyLink>
              </li>
            </ul>
            <ul className="footer-item__menu footer-menu">
              <li className="footer-menu__item">
                <MyLink href="#" styleName="footer-menu__link">
                  FAQ
                </MyLink>
              </li>
              <li className="footer-menu__item">
                <MyLink href="#" styleName="footer-menu__link">
                  TERMS
                </MyLink>
              </li>
              <li className="footer-menu__item">
                <MyLink href="#" styleName="footer-menu__link">
                  CAREERS
                </MyLink>
              </li>
            </ul>
            <ul className="footer-item__menu footer-menu">
              <li className="footer-menu__item">
                <MyLink href="#" styleName="footer-menu__link">
                  BLOG
                </MyLink>
              </li>
              <li className="footer-menu__item">
                <MyLink href="#" styleName="footer-menu__link">
                  PARTNERS
                </MyLink>
              </li>
              <li className="footer-menu__item">
                <MyLink href="#" styleName="footer-menu__link">
                  NEWS
                </MyLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-top__item footer-item footer-item__third">
          <div className="footer-item__title title__third">CONTACT US</div>
          <div className="footer-item__contacts">
            <MyLink href="#" styleName="footer-item__address">
              213 Baker Street <br /> Oriel City Kounty <br /> 7000 KNW, <br />
              Kountry Name
            </MyLink>
            <MyLink href="tel:+23 994 233 402" styleName="footer-item__phone">
              +23 994 233 402
            </MyLink>
            <MyLink
              href="malito:info@konstruct.com"
              styleName="footer-item__email"
            >
              info@konstruct.com
            </MyLink>
          </div>
        </div>
        <div className="footer-top__item footer-item">
          <div className="footer-item__title title__third"></div>
          <div className="footer-item__social social">
            <div className="social-fb">
              <Image src={iconFaceBook} alt="" />
            </div>
            <div className="social-tw">
              <Image src={iconTwitter} alt="" />
            </div>
            <div className="social-google">
              <Image src={iconGoogle} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
