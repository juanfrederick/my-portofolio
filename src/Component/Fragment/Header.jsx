import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Link from "./Link";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-1 py-6 text-teal-950">
      <Link />
      <img
        src="image/juan.jpg"
        alt=""
        className="w-52 h-52 object-cover object-top rounded-full border-2 border-teal-950 "
      />
      <h1 className="font-bold text-3xl">Juan Frederick</h1>
      <p className="font-semibold text-lg text-center">
        Student at Universitas Universal | Interest in Frontend Development
      </p>
      <ul className="flex gap-5">
        <li>
          <AiFillHtml5 size="25" />
        </li>
        <li>
          <DiCss3 size="25" />
        </li>
        <li>
          <IoLogoJavascript size="25" />
        </li>
        <li>
          <FaReact size="25" />
        </li>
        <li>
          <SiTailwindcss size="25" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
