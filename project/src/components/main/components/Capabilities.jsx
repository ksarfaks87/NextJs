import React from "react";
import Button from "./Button";
import Card from "./Card";

const Capabilities = ({ items }) => {
  return (
    <section
      id="sectionCapabilities"
      className="page-capabilities capabilities"
    >
      <div className="capabilities-container _container">
        <div className="capabilities-header">
          <div className="capabilities-header__title">
            <h2>OUR CAPABILITIES</h2>
          </div>
          <div className="capabilities-header__content">
            <div className="capabilities-header__text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              <br />
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </div>
            <Button>ALL SERVICES</Button>
          </div>
        </div>
        <div className="capabilities-main">
          {items.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
