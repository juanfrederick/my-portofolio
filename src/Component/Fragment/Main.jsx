import React from "react";
import Card from "../Element/Card";
import { data } from "../../data";

const Main = () => {
  return (
    <div className="min-h-[50vh] my-3 flex flex-col gap-5">
      {data.map((val, index) => {
        const { title, image, text, link } = val;
        return (
          <Card key={index} img={image} title={title} text={text} link={link} />
        );
      })}
    </div>
  );
};

export default Main;
