import Capabilities from "../components/main/components/Capabilities";
import MainContainer from "../components/MainContainer";
// import dataServices from "./index"

const services = ({ dataServices }) => {
  return (
    <MainContainer keywords="konstrut services" title="services">
      <Capabilities items={dataServices} />
    </MainContainer>
  );
};

export default services;

export async function getServerSideProps(context) {
  const responseServices = await fetch(`http://localhost:1337/servicesses`);
  const dataServices = await responseServices.json();

  return {
    props: { dataServices }, // will be passed to the page component as props
  };
}
