import Capabilities from "./components/Capabilities";

import StorySection from "./components/StorySection";
import WantToBuild from "./components/WantToBuild";

const Main = ({ items }) => {
  
  return (
    <main className="page">
      <StorySection />
      <Capabilities items={items} />
      <WantToBuild />
    </main>
  );
};

export default Main;
