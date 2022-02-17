import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

const HeaderTop = ({ data }) => {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  const logo = data.logoImg.url;
  console.log(logo);

  const banner = data.bannerImg.url;
  const title = data.bannerTitle;
  const subtitle = data.bannerDescription;
  return (
    <div className="header-top">
      <div className="header-img">
        {banner && (
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + banner}
            alt="cover"
            layout="fill"
          />
        )}
      </div>
      <div className="header-top__container _container">
        <div className="header-top__logo">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + logo}
            alt="logo"
            width={102}
            height={23}
          />
        </div>
        <div className="header-top__info">
          <h1 className="header-top__title">{title}</h1>
          <p className="header-top__subtitle">{subtitle}</p>
        </div>
        <div className="header-top__scroll">
          <Link
            className="header-top__article"
            to=""
            type="button"
            onClick={scrollToBottom}
          >
            SCROLL DOWN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
