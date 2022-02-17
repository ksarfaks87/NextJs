import Image from "next/image";
import logoBlack from "./../../img/headerImg/logoBlack.png";
import MyLink from "./MyLink";

const HeaderNav = () => {
  return (
    <div className="header-block__bottom _container header-bottom">
      <div className="header-bottom__content">
        <div className="header-bottom__logo">
          <Image src={logoBlack} alt="logo" />
        </div>
        <nav className="header-bottom__menu menu">
          <ul className="menu-list">
            <li className="menu-item">
              <MyLink href="/" styleName="menu-link">HOME</MyLink>
            </li>
            <li className="menu-item">
              <MyLink href="/about" styleName="menu-link">ABOUT</MyLink>
            </li>
            <li className="menu-item">
              <MyLink href="/services" styleName="menu-link">SERVICES</MyLink>
            </li>
            <li className="menu-item">
              <MyLink href="/posts" styleName="menu-link">POSTS</MyLink>
            </li>
            <li className="menu-item">
              <MyLink href="/work" styleName="menu-link">WORK</MyLink>
            </li>
            <li className="menu-item">
              <MyLink href="/contacts" styleName="menu-link">CONTACTS</MyLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;
