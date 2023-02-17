import React from "react";
import { FaGithub, FaHandshake, FaLinkedin, FaVideo, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Book = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Video consultation <FaVideo size={30} />
        </>
      ),
      href: "",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Get Opinion <FaHandshake size={30} />
        </>
      ),
      href: "",
    },
    {
      id: 3,
      child: (
        <>
          Write to COO <HiOutlineMail size={30} />
        </>
      ),
      href: "",
    },
    {
      id: 4,
      child: (
        <>
          1628672468 <FaWhatsapp size={30} />
        </>
      ),
      href: "",
      style: "rounded-br-md",

    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300 bg-blue-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;