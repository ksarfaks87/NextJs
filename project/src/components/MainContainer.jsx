import Footer from "./footer/Footer";
// import Header from "./header/Header";
import Head from "next/head";
import HeaderNav from "./header/HeaderNav";

const MainContainer = ({ children, keywords, title }) => {
  return (
    <>
      <Head>
        <meta keywords={keywords}></meta>
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=fdaa79e5-b0c7-4282-8a03-ae5071de23e6&lang=ru_RU"
          type="text/javascript"
        ></script>
        <title>{title}</title>
      </Head>
      <HeaderNav />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainContainer;
