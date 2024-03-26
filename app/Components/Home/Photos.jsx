"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsQuestionCircle, BsFillHeartFill } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { IoBookmark } from "react-icons/io5";

const Photos = () => {
  const famousSearches = [
    { title: "nature", linkUrl: "/nature" },
    { title: "wallpaper", linkUrl: "/wallpaper" },
    { title: "flowers", linkUrl: "/flower" },
    { title: "background", linkUrl: "/background" },
    { title: "sky", linkUrl: "/sky" },
    { title: "love", linkUrl: "/love" },
    { title: "flowers", linkUrl: "/flowers" },
    { title: "beach", linkUrl: "/beach" },
    { title: "forest", linkUrl: "/forest" },
    { title: "cat", linkUrl: "/cat" },
    { title: "water", linkUrl: "/water" },
    { title: "iphone", linkUrl: "/iphone" },
  ];

  const searchOptions = [
    { title: "editor's choice", category: "editor choice" },
    { title: "latest", category: "latest" },
    { title: "trending", category: "trending" },
  ];

  const searchSettingOptions = [
    { title: "safe search" },
    { title: "hide ai generated" },
  ];

  const photosSample = [
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941872/living-room-8557308_1920_ruglrw.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941872/maple-888807_1920_nz4fqc.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941870/balloon-991680_1920_kywec3.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941870/daisies-712892_1280_pwfhcw.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941869/cat-8540772_1920_chpbdt.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941868/heart-8545742_1280_y3qsdf.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941872/living-room-8557308_1920_ruglrw.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941872/maple-888807_1920_nz4fqc.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941870/balloon-991680_1920_kywec3.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941870/daisies-712892_1280_pwfhcw.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941869/cat-8540772_1920_chpbdt.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941868/heart-8545742_1280_y3qsdf.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941872/living-room-8557308_1920_ruglrw.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941872/maple-888807_1920_nz4fqc.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941870/balloon-991680_1920_kywec3.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941870/daisies-712892_1280_pwfhcw.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941869/cat-8540772_1920_chpbdt.jpg",
    },
    {
      picUrl:
        "https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941868/heart-8545742_1280_y3qsdf.jpg",
    },
  ];

  const [searchOption, setSearchOption] = useState(searchOptions[0].title);
  const [searchOptionOpened, setSearchOptionOpened] = useState(false);
  const [searchSettingOpened, setsearchSettingOpened] = useState(false);
  const [imageHoverStates, setImageHoverStates] = useState(
    Array(photosSample.length).fill(false)
  );

  const handleImageHover = (index) => {
    setImageHoverStates(() => Array(photosSample.length).fill(false));
    setImageHoverStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  const likeImageHandle = (index) => {
    console.log("Image Liked with Index : ", index);
  };

  const addToCollectionImageHandler = (index) => {
    console.log("Image Added to Collection with Index : ", index);
  };

  return (
    <div className="w-full px-5 sm:px-8 py-4 pb-10 sm:py-8">
      {/* Photos Filters */}
      <div className=" flex items-center  justify-between ">
        {/* Search Categories */}
        <div className="flex items-center w-max gap-2 overflow-x-auto pr-2">
          {famousSearches.map((item, index) => {
            return (
              <Link
                className="border-[1px] border-gray-300 w-max text-gray-600 text-normal rounded-[8px] px-2 py-0.5"
                key={index}
                href={item.linkUrl}
              >
                <span className="w-amx">{item.title}</span>
              </Link>
            );
          })}
        </div>
        {/* Search Settings */}
        <div className="flex items-center sm:gap-7 gap-3 border-l-[1px] border-l-gray-200 pl-2 md:pl-5">
          {/* Search Setting */}
          <div
            onClick={() => setsearchSettingOpened(!searchSettingOpened)}
            className="relative cursor-pointer"
          >
            <IoMdSettings />
            {/* Opened Search Settings Tab */}
            {searchSettingOpened && (
              <div className="absolute right-0 top-8 z-20 w-52 flex flex-col py-2 text-gray-500 capitalize bg-white shadow-md shadow-gray-500 rounded-md px-2">
                {searchSettingOptions.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex py-2 items-center justify-between"
                    >
                      <span className="flex items-center gap-1">
                        <input type="checkbox" name="" id="" />
                        <span>{item.title}</span>
                      </span>
                      <span>
                        <BsQuestionCircle />
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* Search Options */}
          <div className="relative">
            <div
              onClick={() => setSearchOptionOpened(!searchOptionOpened)}
              className="flex capitalize items-center gap-1 w-max bg-violet-700 cursor-pointer text-white rounded-[18px] px-2.5 py-1.5"
            >
              <span>{searchOption}</span>
              <span>{<MdKeyboardArrowDown size={17} />}</span>
            </div>
            {/* Opened Search Options Tab */}
            {searchOptionOpened && (
              <div className="absolute right-0 top-10 w-48 sm:w-80 flex flex-col py-2 z-20 text-gray-500 capitalize bg-white shadow-md shadow-gray-500 rounded-md px-2">
                {searchOptions.map((item, index) => {
                  return (
                    <span
                      onClick={() => {
                        setSearchOption(item.title);
                        setSearchOptionOpened(false);
                      }}
                      className={
                        searchOption === item.title
                          ? "text-violet-700 py-1 hover:bg-gray-100 hover:rounded-md px-1 cursor-pointer"
                          : "py-1 hover:bg-gray-100 hover:rounded-md px-1 cursor-pointer"
                      }
                      key={index}
                    >
                      {item.category}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Photos */}
      <div className="columns-1 sm:columns-2 border-b-[1px] border-b-gray-300 md:columns-3 lg:columns-4 space-y-5 py-4 sm:py-8">
        {photosSample.map((item, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={() =>
                setImageHoverStates(Array(photosSample.length).fill(false))
              }
              className={"relative cursor-pointer"}
            >
              <Link href={`/pages/photos/${index}`}>
                <img
                  src={item.picUrl}
                  alt=""
                  className={imageHoverStates[index] ? "hovered" : ""}
                />
              </Link>
              {imageHoverStates[index] && (
                <Link href={`/pages/photos/${index}`}>
                  <div className="md:absolute left-0 top-0 hidden w-full h-full bg-black/40"></div>
                </Link>
              )}
              {imageHoverStates[index] && (
                <div className="z-10 hidden md:block text-white">
                  <div className="absolute flex items-center gap-3 left-5 top-5">
                    <span
                      onClick={() => addToCollectionImageHandler(index)}
                      className="bg-white/40 p-1 rounded-md border-[1.5px] border-gray-300 cursor-pointer hover:border-white"
                    >
                      <IoBookmark size={18} />
                    </span>
                    <span
                      onClick={() => likeImageHandle(index)}
                      className="bg-white/40 p-1 rounded-md border-[1.5px] border-gray-300 cursor-pointer hover:border-white"
                    >
                      <BsFillHeartFill size={18} />
                    </span>
                  </div>
                  <div className="absolute cursor-pointer text-gray-200 hover:text-white top-5 right-5">
                    <SlBadge size={21} />
                  </div>
                  <div className="absolute flex gap-2 text-sm text-gray-300 items-center left-5 bottom-5">
                    <Link href={"/"}>heart</Link>
                    <Link href={"/"}>love</Link>
                    <Link href={"/"}>cat</Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Photos;
