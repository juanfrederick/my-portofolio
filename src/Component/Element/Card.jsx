import React from "react";

const Card = ({ img, title, text, link }) => {
  return (
    <div className="w-96 m-auto flex flex-col items-center gap-2 shadow-xl rounded-lg overflow-hidden md:flex-row md:w-[700px] md:items-stretch bg-teal-100 text-teal-950">
      <div className="w-full h-[255px] overflow-hidden group flex-1">
        <img
          src={img}
          alt={title}
          className="transition-all duration-150 group-hover:scale-110 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-4 p-2 md:items-start md:justify-around flex-[1.5_1_0%]">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-justify">{text}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-teal-600 cursor-pointer"
        >
          Github Repo
        </a>
      </div>
    </div>
  );
};

export default Card;
