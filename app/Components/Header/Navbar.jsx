"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdOutlineLanguage } from "react-icons/md";
import { GrFormUpload } from "react-icons/gr";
import Modal from "react-modal";
import {
  FaCamera,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTimes,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import { IoIosBrush, IoIosMusicalNotes } from "react-icons/io";
import { BsVectorPen, BsSoundwave } from "react-icons/bs";
import { IoVideocam, IoFlame } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoginSignup from "../Account/LoginSignup/LoginSignup";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/Libs/Hooks";
import { closeModal, openModal } from "@/Libs/features/accountModal/modalSlice";

const media = [
  { linkUrl: "photos", icon: <FaCamera /> },
  { linkUrl: "Illustrations", icon: <IoIosBrush /> },
  { linkUrl: "Vectors", icon: <BsVectorPen /> },
  { linkUrl: "Videos", icon: <IoVideocam /> },
  { linkUrl: "Music", icon: <IoIosMusicalNotes /> },
  { linkUrl: "Sound Effects", icon: <BsSoundwave /> },
  { linkUrl: "GIFs", icon: <IoFlame /> },
];

const searchTags = [
  { linkUrl: "photos", icon: <FaCamera size={15} /> },
  { linkUrl: "Illustrations", icon: <IoIosBrush size={15} /> },
  { linkUrl: "Vectors", icon: <BsVectorPen size={15} /> },
  { linkUrl: "Videos", icon: <IoVideocam size={15} /> },
  { linkUrl: "Music", icon: <IoIosMusicalNotes size={15} /> },
  { linkUrl: "Sound Effects", icon: <BsSoundwave size={15} /> },
  { linkUrl: "GIFs", icon: <IoFlame size={15} /> },
  { linkUrl: "Users", icon: <FaUserAlt size={15} /> },
];

const community = [
  { linkUrl: "creators" },
  { linkUrl: "forum" },
  { linkUrl: "blogs" },
  { linkUrl: "community" },
];

const about = [
  { linkUrl: "about us" },
  { linkUrl: "FAQ" },
  { linkUrl: "License Summary" },
  { linkUrl: "Terms of Service" },
  { linkUrl: "Privacy Policy" },
  { linkUrl: "Cookies policy" },
  { linkUrl: "FAQ" },
];

const discover = [
  { linkUrl: "editor's choice" },
  { linkUrl: "curated collection" },
  { linkUrl: "pixabay radio" },
  { linkUrl: "popular images" },
  { linkUrl: "popular videos" },
  { linkUrl: "popular music" },
  { linkUrl: "popular searches" },
];

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [searchDropDown, setSearchDropDown] = useState(false);
  const [searchItem, setSearchItem] = useState(searchTags[0].linkUrl);
  const [mediaLinksOpen, setMediaLinksOpen] = useState(false);
  const [discoverLinksOpen, setDiscoverLinksOpen] = useState(false);
  const [communityLinksOpen, setCommunityLinksOpen] = useState(false);
  const [aboutUsLinksOpen, setAboutUsLinksOpen] = useState(false);
  const [mobileSearchBarOpened, setMobileSearchBarOpened] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isNavOpen, setisNavOpen] = useState(false);
  const dispatch = useAppDispatch();

  const pathName = usePathname();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 30 ? setIsScrolling(true) : setIsScrolling(false);
    });
  });
  const [dropDownOpened, setdropDownOpened] = useState(false);
  const { data: session } = useSession();
  const { modalOpened } = useAppSelector((state) => state.accountModal);
  return (
    <div
      className={
        pathName === "/"
          ? isScrolling
            ? `w-full fixed z-20 bg-white text-black top-0 left-0`
            : `w-full  fixed text-white z-20 top-0 left-0`
          : `w-full bg-white text-black top-0 left-0`
      }
    >
      {modalOpened && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-30 rounded-sm flex items-center justify-center">
          <div className="w-full md:w-[40%] rounded-sm flex flex-col">
            <FaTimes
              onClick={() => dispatch(closeModal())}
              className={`place-self-end mt-[-5px] ${
                isScrolling ? "text-black" : "text-white"
              } cursor-pointer`}
              size={24}
            />
            <LoginSignup />
          </div>
        </div>
      )}
      <div className="w-full z-10 py-2 gap-5 flex items-center justify-between">
        <div className="pl-2 w-full flex items-center gap-2.5 md:w-min md:pl-8">
          <Link
            href={"/"}
            className={`${
              isScrolling
                ? "text-white bg-violet-700 py-1.5 rounded-full px-2"
                : "text-white py-1.5 rounded-full px-2"
            }`}
          >
            <h1
              className={`text-2xl font-medium tracking-wider ${
                pathName !== "/" &&
                !isScrolling &&
                "text-violet-700 font-bold font-sans"
              } `}
            >
              {/* {session ? session.user.name : "PGALLERY"} */}
              PAGLLERY
            </h1>
          </Link>
          {/* Mobile SearchBar Code Start */}
          {isScrolling && (
            <div
              onClick={() => setMobileSearchBarOpened(true)}
              className="cursor-pointer hover:bg-white/20 p-2 hover:rounded-full md:hidden"
            >
              <CiSearch size={19} />
            </div>
          )}
          {mobileSearchBarOpened && (
            <div
              className={
                mobileSearchBarOpened
                  ? "w-full py-2 md:hidden text-black bg-white z-50 fixed top-0 left-0 transition-all duration-500"
                  : "w-full py-4 text-black bg-white z-50 fixed top-[-100%] left-0 transition-all duration-500"
              }
            >
              <div className="w-full flex items-center px-4 gap-4 justify-between">
                <div className="w-full md:hidden bg-gray-100 flex rounded-full px-1 items-center gap-1">
                  <CiSearch size={26} className="font-bold" />
                  <input
                    type="text"
                    placeholder="Search Pixabay"
                    className="bg-transparent py-2 px-2 w-full outline-none focus:outline-none rounded-full"
                  />
                  <div
                    className={`relative flex items-center gap-0.5 cursor-pointer hover:bg-white/50 px-3 py-1.5 rounded-full`}
                  >
                    <h1
                      className="flex items-center w-max gap-0 capitalize text-sm"
                      onClick={() => setSearchDropDown(!searchDropDown)}
                    >
                      {searchItem} <MdKeyboardArrowDown size={21} />{" "}
                    </h1>
                    {searchDropDown && (
                      <div className="absolute w-max top-11 z-10 right-0 text-gray-600  bg-white py-1 shadow-md shadow-[#484848] rounded-lg">
                        {searchTags.map((item, index) => {
                          return (
                            <li
                              onClick={() => {
                                setSearchItem(item.linkUrl);
                                setSearchDropDown(false);
                              }}
                              key={index}
                              className="flex px-4 py-2 hover:bg-gray-300 items-center gap-2"
                            >
                              <span>{item.icon}</span>
                              <span>{item.linkUrl}</span>
                            </li>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <div
                  onClick={() => setMobileSearchBarOpened(false)}
                  className="cursor-pointer hover:bg-black/20 p-2 hover:rounded-full"
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
          )}
          {/* Mobile SearchBar Code Ends */}
        </div>
        {/* Mobile Account Options */}
        <div className="md:hidden flex items-center gap-3 pr-2">
          <div className="flex items-center gap-5">
            <button>Login</button>
            <button
              className={`flex ${
                isScrolling ? "bg-black/10" : "bg-white/20"
              } items-center gap-1 px-3 py-1.5 rounded-full`}
            >
              Join
            </button>
            {/* Mobile Navbar Icon */}
            <div
              onClick={() => setisNavOpen(true)}
              className="cursor-pointer hover:bg-white/20 p-3 hover:rounded-full"
            >
              <AiOutlineMenu />
            </div>
          </div>
        </div>
        {/* Desktop Navbar Code Start */}
        {/* Search Bar for Home Page */}
        {isScrolling && pathName === "/" && (
          <div className="w-full hidden bg-gray-200 md:flex rounded-full px-2 items-center gap-1">
            <CiSearch size={21} className="font-bold" />
            <input
              type="text"
              placeholder="Search PGallery"
              className="bg-transparent py-2 px-2 w-full outline-none focus:outline-none rounded-full"
            />
            <div
              className={`relative flex items-center gap-0.5 cursor-pointer hover:bg-white/50 px-3 py-1.5 rounded-full`}
            >
              <h1
                className="flex items-center w-max gap-0 capitalize text-sm"
                onClick={() => setSearchDropDown(!searchDropDown)}
              >
                {searchItem} <MdKeyboardArrowDown size={21} />{" "}
              </h1>
              {searchDropDown && (
                <div className="absolute w-max top-11 z-10 right-0 text-gray-600  bg-white py-1 shadow-md shadow-[#484848] rounded-lg">
                  {searchTags.map((item, index) => {
                    return (
                      <li
                        onClick={() => {
                          setSearchItem(item.linkUrl);
                          setSearchDropDown(false);
                        }}
                        key={index}
                        className="flex px-4 py-2 hover:bg-gray-300 items-center gap-2"
                      >
                        <span>{item.icon}</span>
                        <span>{item.linkUrl}</span>
                      </li>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
        {/* Search Page for All Pages other than Home Page */}
        {pathName !== "/" && (
          <div className="w-full hidden bg-gray-200 md:flex rounded-full px-2 items-center gap-1">
            <CiSearch size={21} className="font-bold" />
            <input
              type="text"
              placeholder="Search Pixabay"
              className="bg-transparent py-2 px-2 w-full outline-none focus:outline-none rounded-full"
            />
            <div
              className={`relative flex items-center gap-0.5 cursor-pointer hover:bg-white/50 px-3 py-1.5 rounded-full`}
            >
              <h1
                className="flex items-center w-max gap-0 capitalize text-sm"
                onClick={() => setSearchDropDown(!searchDropDown)}
              >
                {searchItem} <MdKeyboardArrowDown size={21} />{" "}
              </h1>
              {searchDropDown && (
                <div className="absolute w-max top-11 z-10 right-0 text-gray-600  bg-white py-1 shadow-md shadow-[#484848] rounded-lg">
                  {searchTags.map((item, index) => {
                    return (
                      <li
                        onClick={() => {
                          setSearchItem(item.linkUrl);
                          setSearchDropDown(false);
                        }}
                        key={index}
                        className="flex px-4 py-2 hover:bg-gray-300 items-center gap-2"
                      >
                        <span>{item.icon}</span>
                        <span>{item.linkUrl}</span>
                      </li>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
        {/* Desktop Options */}
        <div className="hidden md:flex items-center gap-8 pr-3 sm:pr-8">
          <div
            onClick={() => setdropDownOpened(!dropDownOpened)}
            className={
              dropDownOpened
                ? `relative z-10 w-24 flex items-center gap-0.5 cursor-pointer bg-black/20 hover:bg-black/20 px-3 py-1.5 rounded-full`
                : `relative w-24 flex items-center gap-0.5 cursor-pointer hover:bg-white/50 px-3 py-1.5 rounded-full`
            }
          >
            Explore
            <MdKeyboardArrowDown size={23} />
            {dropDownOpened && (
              <div className="absolute w-max top-11 z-10 right-0 text-white bg-[#191b26] rounded-lg">
                <div className="w-full">
                  <div className="grid sm:grid-cols-2 xmd:grid-cols-3 lg:grid-cols-4 w-full">
                    <ul className="w-auto flex border-r-[1px] pb-3 lg:border-b-0 sm:border-b-[1px] flex-col gap-3">
                      <h1 className="font-semibold py-2 px-3">Media</h1>
                      {media.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex px-3 items-center capitalize gap-2"
                          >
                            <span>{item.icon}</span>
                            <span>{item.linkUrl}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <ul className="border-r-[1px] sm:border-b-[1px] pb-3 sm:border-r-0 xmd:border-r-[1px] lg:border-b-0 w-auto flex flex-col gap-3">
                      <h1 className="font-semibold px-3 py-2">Discover</h1>
                      {discover.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className={
                              item.linkUrl === "pixabay radio"
                                ? "flex px-3 items-center capitalize gap-2"
                                : "capitalize px-3"
                            }
                          >
                            {item.linkUrl}
                            {item.linkUrl === "pixabay radio" && (
                              <span className="text-xs uppercase bg-violet-700 px-1 py-0.5 rounded-sm tracking-wide">
                                new
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                    <ul className="border-r-[1px] sm:border-r-[1px] pb-3 xmd:border-b-[1px] xmd:border-r-0 lg:border-r-[1px] lg:border-b-0 w-auto flex flex-col gap-3">
                      <h1 className="font-semibold px-3 py-2">Community</h1>
                      {community.map((item, index) => {
                        return (
                          <li className="capitalize px-3" key={index}>
                            {item.linkUrl}
                          </li>
                        );
                      })}
                    </ul>
                    <ul className="w-auto flex flex-col pb-3 gap-3">
                      <h1 className="font-semibold px-3 py-2">About</h1>
                      {about.map((item, index) => {
                        return (
                          <li key={index} className="capitalize px-3">
                            {item.linkUrl}
                          </li>
                        );
                      })}
                      <li className="flex items-center px-3 gap-2">
                        <MdOutlineLanguage />
                        Language
                      </li>
                    </ul>
                  </div>
                  <div className="w-full h-[1px] bg-slate-300 mb-2"></div>
                </div>
              </div>
            )}
          </div>
          {/* Desktop Account Options */}

          <div className="flex items-center gap-3">
            <button onClick={() => dispatch(openModal())}>Login</button>
            <button
              onClick={() => dispatch(openModal())}
              className="bg-white/50 flex items-center gap-1 px-3 py-1.5 rounded-full"
            >
              Join
            </button>
            <Link href={"/resources/upload"}>
              <button className="bg-violet-700 text-white flex items-center gap-1 px-2 py-1.5 rounded-full">
                <GrFormUpload size={25} />
                Upload
              </button>
            </Link>
          </div>
        </div>

        {/* Desktop Navbar Code Ends */}
      </div>
      {/* Mobile Navbar Code Starts */}
      <div
        className={
          isNavOpen
            ? "w-full z-30 overflow-y-auto h-screen text-[#CECED2] bg-[#191B26] fixed top-0 left-0 transition-all duration-700"
            : "w-full transition-all h-[93vh] duration-700 z-30 overflow-y-auto top-[-100%] bg-[#191B26] fixed"
        }
      >
        {isNavOpen && (
          <div className="pl-2 transition-all duration-700 fixed top-0 left-0 bg-[#191B26] z-20 pt-2 w-full border-b-[1px] pb-5 border-b-[#4c4c4d] md:pl-8">
            <h1 className="text-xl font-bold mt-1">Pixabay</h1>
            <div
              onClick={() => {
                setisNavOpen(false);
                setAboutUsLinksOpen(false);
                setCommunityLinksOpen(false);
                setDiscoverLinksOpen(false);
                setMediaLinksOpen(false);
              }}
              className="text-[#CECED2] absolute top-3 p-2 right-3 cursor-pointer hover:bg-white/10 hover:rounded-full md:hidden"
            >
              <AiOutlineClose className="" />
            </div>
          </div>
        )}

        <div className="w-full overflow-y-auto mt-20 px-5">
          <button className="bg-[#00AB6B] text-white flex w-full justify-center items-center gap-1 px-2 py-1.5 rounded-full">
            <GrFormUpload size={25} />
            Upload
          </button>
          {/* Links */}
          {/* Media */}
          <div
            className={`mt-5 w-full relative ${
              !mediaLinksOpen &&
              "hover:border-b-0 h-max border-b-[1px] border-b-[#4c4c4d]"
            }`}
          >
            <div
              onClick={() => setMediaLinksOpen(!mediaLinksOpen)}
              className="flex items-center w-full hover:bg-white/20 py-2 px-2 rounded-md cursor-pointer justify-between"
            >
              <h1>Media</h1>
              <span
                className={
                  mediaLinksOpen
                    ? "transition-all duration-300 rotate-180"
                    : "rotate-0 transition-all duration-300"
                }
              >
                <MdKeyboardArrowDown size={22} />
              </span>
            </div>
            {mediaLinksOpen && (
              <div className="w-full left-3 pr-7">
                {media.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      className="flex text-sm items-center px-2 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20"
                      href={item.linkUrl}
                    >
                      {item.icon}
                      {item.linkUrl}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          {/* Discover */}
          <div
            className={`mt-5 w-full relative ${
              !discoverLinksOpen &&
              "hover:border-b-0 h-max border-b-[1px] border-b-[#4c4c4d]"
            }`}
          >
            <div
              onClick={() => setDiscoverLinksOpen(!discoverLinksOpen)}
              className="flex items-center w-full hover:bg-white/20 py-2 px-2 rounded-md cursor-pointer justify-between"
            >
              <h1>Discover</h1>
              <span
                className={
                  discoverLinksOpen
                    ? "transition-all duration-300 rotate-180"
                    : "rotate-0 transition-all duration-300"
                }
              >
                <MdKeyboardArrowDown size={22} />
              </span>
            </div>
            {discoverLinksOpen && (
              <div className="w-full left-3 pr-7">
                {discover.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      className="flex text-sm items-center px-2 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20"
                      href={item.linkUrl}
                    >
                      {item.icon}
                      {item.linkUrl}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          {/* Community */}
          <div
            className={`mt-5 w-full relative ${
              !communityLinksOpen &&
              "hover:border-b-0 h-max border-b-[1px] border-b-[#4c4c4d]"
            }`}
          >
            <div
              onClick={() => setCommunityLinksOpen(!communityLinksOpen)}
              className="flex items-center w-full hover:bg-white/20 py-2 px-2 rounded-md cursor-pointer justify-between"
            >
              <h1>Community</h1>
              <span
                className={
                  communityLinksOpen
                    ? "transition-all duration-300 rotate-180"
                    : "rotate-0 transition-all duration-300"
                }
              >
                <MdKeyboardArrowDown size={22} />
              </span>
            </div>
            {communityLinksOpen && (
              <div className="w-full left-3 pr-7">
                {community.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      className="flex text-sm items-center px-2 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20"
                      href={item.linkUrl}
                    >
                      {item.icon}
                      {item.linkUrl}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          {/* About Us */}
          <div
            className={`mt-5 w-full relative ${
              !aboutUsLinksOpen &&
              "hover:border-b-0 h-max border-b-[1px] border-b-[#4c4c4d]"
            }`}
          >
            <div
              onClick={() => setAboutUsLinksOpen(!aboutUsLinksOpen)}
              className="flex items-center w-full hover:bg-white/20 py-2 px-2 rounded-md cursor-pointer justify-between"
            >
              <h1>Discover</h1>
              <span
                className={
                  aboutUsLinksOpen
                    ? "transition-all duration-300 rotate-180"
                    : "rotate-0 transition-all duration-300"
                }
              >
                <MdKeyboardArrowDown size={22} />
              </span>
            </div>
            {aboutUsLinksOpen && (
              <div className="w-full left-3 pr-7">
                {about.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      className="flex text-sm items-center px-2 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20"
                      href={item.linkUrl}
                    >
                      {item.icon}
                      {item.linkUrl}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          <div className="mt-5 min-w-full flex items-center gap-4 text-sm pb-32">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
