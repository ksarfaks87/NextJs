import React from "react";
import Image from "next/image";

const Card = ({ data }) => {
  const icon = data.img.url;
  return (
    <div className="capabilities-main__card capabilities-card">
      <div className="capabilities-card__icon">
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + icon}
          alt="cover"
          width={65}
          height={75}
        />
      </div>
      <div className="capabilities-card__title">{data.title}</div>
      <div className="capabilities-card__text">{data.description}</div>
    </div>
  );
};

export default Card;
