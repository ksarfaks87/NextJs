import React from "react";

import photo1 from "../../../img/mainImg/story/1.jpg";
import photo2 from "../../../img/mainImg/story/2.jpg";
import photo3 from "../../../img/mainImg/story/3.jpg";
import MainStory from "./MainStory";


const StorySection = () => {
  return (
    <section id="sectionStory" className="page-story story">
      <div className="story-container _container">
        <div className="story-header">
          <h2 className="story-title">OUR STORY</h2>
        </div>
        <div className="story-body">
          <div className="story-column story-column__left">
            <div className="story-column__title">
              Founded in 2011 by John Mathew Smith, Konstruct has become the
              number one construction management firm
            </div>
            <div className="story-column__subtitle">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat.
            </div>
          </div>
          <div className="story-column story-column__right">
            <MainStory cover={photo1}>
              WE <br /> PLAN
            </MainStory>
            <MainStory cover={photo2}>
              WE <br /> MANAGE
            </MainStory>
            <MainStory cover={photo3}>
              WE <br /> BUILD
            </MainStory>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
