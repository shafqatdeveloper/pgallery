"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaBookmark, FaCheck } from "react-icons/fa";
import { IoBookmark, IoCheckmarkOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { TfiComment } from "react-icons/tfi";
import { IoMdShare } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
import { AiOutlineClose, AiOutlineUserAdd } from "react-icons/ai";
import { BiSolidComment } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const famousSearches = [
  { title: "nature", linkUrl: "/nature" },
  { title: "wallpaper", linkUrl: "/wallpaper" },
  { title: "flowers", linkUrl: "/flower" },
  { title: "background", linkUrl: "/background" },
  { title: "sky", linkUrl: "/sky" },
  { title: "love", linkUrl: "/love" },
  { title: "forest", linkUrl: "/forest" },
  { title: "cat", linkUrl: "/cat" },
  { title: "water", linkUrl: "/water" },
  { title: "iphone", linkUrl: "/iphone" },
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

const Photo = ({ id }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mobileDetialsOpen, setMobileDetialsOpen] = useState(false);
  const [imageHoverStates, setImageHoverStates] = useState(
    Array(photosSample.length).fill(false)
  );

  const handleImageHover = (index) => {
    setImageHoverStates(() => Array(photosSample.length).fill(false));
    setImageHoverStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 175 ? setIsScrolling(true) : setIsScrolling(false);
    });
  });

  const likeImageHandle = (index) => {
    console.log("Image Liked with Index : ", index);
  };

  const addToCollectionImageHandler = (index) => {
    console.log("Image Added to Collection with Index : ", index);
  };

  return (
    <div className="w-full md:mt-5 flex border-b-[1px] border-b-gray-300 pb-6 sm:pb-10 flex-col xmd:flex-row xmd:items-start xmd:justify-between gap-4">
      {/* Images Side */}
      <div className="w-full flex flex-col xmd:w-4/6">
        {/* Mobile Download Options */}
        <div className="w-full px-3 flex-col flex gap-4 sm:gap-5 my-4 sm:px-5 md:px-8 xmd:hidden">
          {/* Licence */}
          <div className="flex w-full  rounded-lg bg-[#eeeeee] p-2  items-center gap-1">
            <div className="p-1 bg-black/10 rounded-full">
              <IoCheckmarkOutline size={10} />
            </div>
            <p className="text-xs">
              Free for use under the Pixabay{" "}
              <span>
                <Link href={"/content_license"}>Content License</Link>
              </span>
            </p>
          </div>

          {/* Button To Download */}
          <div className="w-full border-b-[1px] border-b-gray-300 text-white px-1">
            <button className="flex items-center gap-3 py-[5px] rounded-3xl bg-[#00AB6B] w-full justify-center">
              Download{" "}
              <span>
                <MdKeyboardArrowDown size={20} />
              </span>
            </button>
          </div>
        </div>
        {/* Fixed Button on Top for download while scrolling */}
        {isScrolling && (
          <div className="w-full fixed top-0 xmd:hidden bg-[#efefef] py-3 z-20 border-b-[1px] border-b-gray-300 text-white px-1">
            <button className="flex items-center gap-3 py-[5px] rounded-3xl bg-[#00AB6B] w-32 mx-auto justify-center">
              Download{" "}
              <span>
                <MdKeyboardArrowDown size={20} />
              </span>
            </button>
          </div>
        )}

        {/* Image */}
        <div className="w-full px-2 sm:px-5 md:px-8 xmd:px-0 h-60 sm:h-80 lg:h-96 flex items-center justify-center">
          <img
            src={photosSample[id].picUrl}
            alt=""
            className="w-full xmd:w-[65%] h-full object-cover "
          />
        </div>
        {/*  */}

        {/* Mobile Download, save, share and details section */}

        <div className="xmd:hidden">
          {/* Like, Save, Comment and Share Buttons */}
          <div className="w-full flex items-center justify-center">
            <div className="flex w-[90%] sm:w-4/5  mt-4 items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {/* Like */}
                <div className="flex h-9 w-16 items-center border-[1px] rounded-lg gap-2 justify-center">
                  <CiHeart size={20} />
                  <span>120</span>
                </div>

                {/* Save */}
                <div className="flex h-9 w-16 items-center border-[1px] rounded-lg gap-2 justify-center">
                  <FaBookmark size={13} />
                  <span>20</span>
                </div>
                {/* Comment */}
                <div className="flex h-9 w-10 items-center border-[1px] rounded-lg gap-2 justify-center">
                  <TfiComment size={14} />
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Share */}
                <div className="flex h-9 w-10 items-center border-[1px] rounded-lg gap-2 justify-center">
                  <IoMdShare size={20} />
                </div>
                {/* Details */}
                <div
                  onClick={() => setMobileDetialsOpen(true)}
                  className="flex cursor-pointer hover:bg-gray-200 h-9 w-10 items-center border-[1px] rounded-lg gap-2 justify-center"
                >
                  <PiWarningCircle size={20} />
                </div>
                {/* Opened Mobile Details Options */}
                <div
                  className={
                    mobileDetialsOpen
                      ? `w-full h-92 transition-all duration-200 bg-[#ffffff] p-3 text-sm text-gray-600 flex flex-col gap-2 z-10 fixed left-0 bottom-0`
                      : "w-full h-92 bg-[#ffffff] p-3 text-sm text-gray-600 flex flex-col gap-2 z-10 fixed left-0 bottom-[-100%]  transition-all duration-400"
                  }
                >
                  <div className="flex items-center justify-between border-b-[1px] border-b-gray-300 py-3">
                    <h1 className="text-base font-bold tracking-wide font-sans">
                      Media Details
                    </h1>
                    <div
                      onClick={() => setMobileDetialsOpen(false)}
                      className="p-1.5 hover:bg-gray-100 cursor-pointer rounded-full"
                    >
                      <AiOutlineClose />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Views</span>
                    <span>737</span>
                  </div>
                  {/* Downloads */}
                  <div className="flex items-center justify-between">
                    <span>Downloads</span>
                    <span>237</span>
                  </div>
                  {/* Saves */}
                  <div className="flex items-center justify-between">
                    <span>Saves</span>
                    <span>14</span>
                  </div>
                  {/* Camera */}
                  <div className="flex items-center justify-between">
                    <span>Camera</span>
                    <span className="flex items-center gap-0.5">
                      <span>Nikon D3500</span>
                      <PiWarningCircle />
                    </span>
                    {/* Media Type */}
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Media type</span>
                    <span>JPG</span>
                  </div>
                  {/* Resolution */}
                  <div className="flex items-center justify-between">
                    <span>Resolution</span>
                    <span>6000 x 4000</span>
                  </div>
                  {/* Date */}
                  <div className="flex items-center justify-between">
                    <span>Publishes date</span>
                    <span>Jan 31, 2024</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Views, Downloads and Details */}
          </div>
        </div>

        {/* Comments */}

        <div className="pl-3 py-6 sm:py-10 sm:pl-8 md:pl-16 xmd:pl-20">
          <span className="text-lg font-bold font-sans">9 Comments</span>
        </div>

        {/* Not Logged In */}
        <div className="w-full px-2 xmd:px-0 flex items-center justify-center h-max sm:pl-8">
          <div className="w-full sm:w-[90%] h-full bg-gray-100 rounded-lg flex flex-col items-center justify-center">
            {/* Icon */}
            <div className="w-full flex flex-col items-center gap-1 px-0 md:px-40  py-6">
              <BiSolidComment size={14} className="text-[#00AB6B]" />
              <span className="text-gray-600 w-max text-sm">
                The community are waiting to hear from you!
              </span>
              <span className="text-xs text-gray-500">
                Login or Join to view Comments
              </span>
              {/* Buttons */}
              <div className="w-full flex items-center mt-5 gap-4">
                <div className="w-full py-0.5 border-[1px] border-gray-300 rounded-2xl bg-white">
                  <button className="w-full py-0.5">Login</button>
                </div>
                <div className="w-full py-0.5 rounded-2xl bg-[#00AB6B]">
                  <button className="w-full py-0.5 text-[#ffffff]">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Pages */}

        <div className="flex items-center w-full sm:w-[93%] md:w-[94%] gap-2 overflow-x-auto px-3 sm:pl-8 mt-6 sm:mt-12 mb-5">
          {famousSearches.map((item, index) => {
            return (
              <Link
                className="border-[1px] border-gray-300 w-max text-gray-600 text-normal rounded-[8px] px-2 py-0.5"
                key={index}
                href={item.linkUrl}
              >
                <span className="w-max text-sm sm:text-base">{item.title}</span>
              </Link>
            );
          })}
        </div>

        {/* Photos */}

        <div className="columns-1 sm:w-[94%] lg:columns-3 space-y-5 px-l sm:pl-8 py-4 sm:py-8">
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
                    <div className="md:absolute hidden left-0 top-0 w-full h-full bg-black/40"></div>
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

        {/* Load More Photos Button */}

        <div className="w-full flex items-center justify-center">
          <button className="py-2 border-[1px] text-sm px-3 border-gray-400 rounded-full bg-white">
            Load More
          </button>
        </div>
      </div>

      {/* Right Bar */}
      <div className="xmd:block sticky hidden right-3 lg:right-6 xl:right-10 h-max top-6 bg-white border-[1px] shadow-xl rounded-lg">
        <div className="w-full p-1 xmd:p-3">
          {/* Licence */}
          <div className="flex p-2 items-center gap-1">
            <div className="p-1 bg-black/10 rounded-full">
              <IoCheckmarkOutline size={10} />
            </div>
            <p className="text-xs">
              Free for use under the Pixabay{" "}
              <span>
                <Link href={"/content_license"}>Content License</Link>
              </span>
            </p>
          </div>
          {/* Button T0 Download */}
          <div className="w-full my-3 border-b-[1px] border-b-gray-300 text-white py-4 px-1">
            <button className="flex items-center gap-3 py-[5px] rounded-3xl bg-[#00AB6B] w-full justify-center">
              Download{" "}
              <span>
                <MdKeyboardArrowDown />
              </span>
            </button>
          </div>
          {/* Like, Save, Comment and Share Buttons */}
          <div className="flex w-full mt-4 items-center justify-center gap-2">
            {/* Like */}
            <div className="flex h-9 w-[75px] cursor-pointer like items-center border-[1px] rounded-lg gap-2 justify-center">
              <CiHeart size={20} />
              <span>120</span>
            </div>
            {/* Save */}
            <div className="flex h-9 save w-20 cursor-pointer items-center border-[1px] rounded-lg gap-2 justify-center">
              <FaBookmark size={13} />
              <span>20</span>
            </div>
            {/* Comment */}
            <div className="flex h-9 comment cursor-pointer w-10 items-center border-[1px] rounded-lg gap-2 justify-center">
              <TfiComment size={14} />
            </div>
            {/* Share */}
            <div className="flex h-9 w-10 share cursor-pointer items-center border-[1px] rounded-lg gap-2 justify-center">
              <IoMdShare size={20} />
            </div>
            {/* Share Tooltip */}
            <ReactTooltip anchorSelect=".share" place="bottom">
              Share
            </ReactTooltip>
            {/* Like Tooltip */}
            <ReactTooltip anchorSelect=".like" place="bottom">
              Like
            </ReactTooltip>
            {/* Comment Tooltip */}
            <ReactTooltip anchorSelect=".comment" place="bottom">
              Comment
            </ReactTooltip>
            {/* Save To Collection Tooltip */}
            <ReactTooltip anchorSelect=".save" place="bottom">
              Save
            </ReactTooltip>
          </div>
          {/* Views, Downloads and Details */}
          <div className="flex flex-col border-b-[1px] border-b-gray-300 gap-[7px] text-xs text-gray-500 py-5">
            {/* Views */}
            <div className="flex items-center justify-between">
              <span>Views</span>
              <span>737</span>
            </div>
            {/* Downloads */}
            <div className="flex items-center justify-between">
              <span>Downloads</span>
              <span>237</span>
            </div>
            {/* Other Details */}
            <div className="flex flex-col gap-[7px]">
              {/* Details Section Opener */}
              {!detailsOpen && (
                <div
                  onClick={() => setDetailsOpen(true)}
                  className="flex cursor-pointer items-center gap-0.5"
                >
                  <h1 className="underline">Show Details</h1>
                  <span>
                    <MdKeyboardArrowDown size={15} />
                  </span>
                </div>
              )}
              {/* Opened Details Section */}
              {detailsOpen && (
                <>
                  {/* Saves */}
                  <div className="flex items-center justify-between">
                    <span>Saves</span>
                    <span>14</span>
                  </div>
                  {/* Camera */}
                  <div className="flex items-center justify-between">
                    <span>Camera</span>
                    <span className="flex items-center gap-0.5">
                      <span>Nikon D3500</span>
                      <PiWarningCircle />
                    </span>
                    {/* Media Type */}
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Media type</span>
                    <span>JPG</span>
                  </div>
                  {/* Resolution */}
                  <div className="flex items-center justify-between">
                    <span>Resolution</span>
                    <span>6000 x 4000</span>
                  </div>
                  {/* Date */}
                  <div className="flex items-center justify-between">
                    <span>Publishes date</span>
                    <span>Jan 31, 2024</span>
                  </div>
                  <div
                    onClick={() => setDetailsOpen(false)}
                    className="flex cursor-pointer items-center gap-0.5"
                  >
                    <h1 className="underline">Hide Details</h1>
                    <span>
                      <MdKeyboardArrowUp size={15} />
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* User Details */}
          <div className="flex items-center justify-between">
            {/* User Details */}
            <div className="flex items-center gap-5">
              <img
                src={photosSample[id].picUrl}
                className="w-10 h-10 rounded-full object-cover my-5"
                alt=""
              />
              <div className="text-sm">
                <h1>M Shafqat</h1>
                <span className="text-xs text-gray-500">95 followers</span>
              </div>
            </div>
            {/* Follow User */}
            <div>
              <button className="flex text-sm pr-5 items-center gap-1">
                <AiOutlineUserAdd />
                <span className="tracking-wide">Follow</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
