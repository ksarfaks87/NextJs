import React from "react";
import Image from "next/image";

const MainStory = ({ cover, children }) => {
  return (
    <div className="story-column__item story-item">
      <div className="story-item__content _ibg">
        <Image src={cover} alt="" layout="fill"/>        
      </div>
      <div className="story-item__text">{children}</div>
    </div>
  );
};

export default MainStory;
