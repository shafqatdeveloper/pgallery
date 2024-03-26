"use client";
import Link from "next/link";
import React from "react";
import { BsSoundwave, BsVectorPen } from "react-icons/bs";
import { FaCamera, FaHome } from "react-icons/fa";
import { IoIosBrush, IoIosMusicalNotes } from "react-icons/io";
import { IoFlame, IoVideocam } from "react-icons/io5";
import { usePathname } from "next/navigation";
import "./Home.css";

const media = [
  { linkUrl: "/", title: "home", icon: <FaHome size={16} /> },
  { linkUrl: "/page/photos", title: "photos", icon: <FaCamera size={16} /> },
  {
    linkUrl: "/page/illustrations",
    title: "illustrations",
    icon: <IoIosBrush size={16} />,
  },
  {
    linkUrl: "/page/vectors",
    title: "vectors",
    icon: <BsVectorPen size={16} />,
  },
  { linkUrl: "/page/videos", title: "videos", icon: <IoVideocam size={16} /> },
  {
    linkUrl: "/page/music",
    title: "music",
    icon: <IoIosMusicalNotes size={16} />,
  },
  {
    linkUrl: "/page/sound",
    title: "sound effects",
    icon: <BsSoundwave size={16} />,
  },
  { linkUrl: "/page/GIFs", title: "GIFs", icon: <IoFlame size={16} /> },
];

const SinglePage = () => {
  const pathName = usePathname();
  return (
    <div className="py-10 w-full overflow-auto px-5 xmd:px-0">
      <div className="flex w-full items-center xmd:justify-center gap-6 sm:gap-10 overflow-x-auto">
        {media.map((item, index) => {
          return (
            <Link
              key={index}
              className={
                item.linkUrl === pathName
                  ? "flex min-w-fit items-center gap-1 bg-gray-100 rounded-full px-3 py-2.5"
                  : "flex min-w-fit items-center gap-1"
              }
              href={item.linkUrl}
            >
              <span
                className={item.linkUrl === pathName ? "text-violet-700" : ""}
              >
                {item.icon}
              </span>
              <span className="capitalize text-sm ">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SinglePage;
