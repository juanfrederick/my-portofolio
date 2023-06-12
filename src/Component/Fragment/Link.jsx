import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Link = () => {
  return (
    <ul className="absolute top-2 right-1 flex gap-2">
      <li>
        <a
          href="https://juanfrederick.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-teal-600 rounded-md px-1 text-white hover:bg-teal-700 text-sm font-semibold">
            My Website
          </button>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/juan-frederick-6ab01921b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size="25" color="rgb(13, 148, 136)" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/juanfrederick"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size="25" color="rgb(13, 148, 136)" />
        </a>
      </li>
    </ul>
  );
};

export default Link;
