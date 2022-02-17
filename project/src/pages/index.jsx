// import { useEffect, useState } from "react";
import HeaderTop from "../components/header/HeaderTop";
import Main from "../components/main/Main";
import MainContainer from "../components/MainContainer";
import api from "../services/api";

const index = ({ dataBanner, dataServices }) => {
  // const [bannerImg, setBannerImg] = useState(null)

  // useEffect(() => {
  //   api.main
  //     .getMain()
  //     .then((response) => {
  //       console.log(response);
  //       setBannerImg(response.data.bannerImg.url)
  //     })
  //     .catch((e) => {
  //       throw new Error(e);
  //     });
  // }, []);

  return (
    <>
      <HeaderTop data={dataBanner} />
      <MainContainer keywords="konstrut main" title="konstrut">
        <Main items={dataServices} />
      </MainContainer>
    </>
  );
};

export default index;

export async function getServerSideProps(context) {
  const responseBanner = await fetch(`http://localhost:1337/main-page`);
  const responseServices = await fetch(`http://localhost:1337/servicesses`);

  const dataBanner = await responseBanner.json();
  const dataServices = await responseServices.json();  

  return {
    props: { dataBanner, dataServices }, // will be passed to the page component as props
  };
}
