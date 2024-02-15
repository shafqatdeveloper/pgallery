"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdOutlineLanguage } from "react-icons/md";
import { GrFormUpload } from "react-icons/gr";
import { FaCamera,FaUserAlt } from 'react-icons/fa'
import { IoIosBrush,IoIosMusicalNotes } from "react-icons/io";
import { BsVectorPen,BsSoundwave } from "react-icons/bs";
import { IoVideocam,IoFlame } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";



const media = [
    {linkUrl:"photos",icon:<FaCamera/>},
    {linkUrl:"Illustrations",icon:<IoIosBrush/>},
    {linkUrl:"Vectors",icon:<BsVectorPen/>},
    {linkUrl:"Videos",icon:<IoVideocam/>},
    {linkUrl:"Music",icon:<IoIosMusicalNotes/>},
    {linkUrl:"Sound Effects",icon:<BsSoundwave/>},
    {linkUrl:"GIFs",icon:<IoFlame/>},
]

const searchTags = [
  {linkUrl:"photos",icon:<FaCamera size={15}/>},
  {linkUrl:"Illustrations",icon:<IoIosBrush size={15}/>},
  {linkUrl:"Vectors",icon:<BsVectorPen size={15}/>},
  {linkUrl:"Videos",icon:<IoVideocam size={15}/>},
  {linkUrl:"Music",icon:<IoIosMusicalNotes size={15}/>},
  {linkUrl:"Sound Effects",icon:<BsSoundwave size={15}/>},
  {linkUrl:"GIFs",icon:<IoFlame size={15}/>},
  {linkUrl:"Users",icon:<FaUserAlt size={15}/>},
]

const community = [
    {linkUrl:"creators"},
    {linkUrl:"forum"},
    {linkUrl:"blogs"},
    {linkUrl:"community"},
]

const about = [
    {linkUrl:"about us"},
    {linkUrl:"FAQ"},
    {linkUrl:"License Summary"},
    {linkUrl:"Terms of Service"},
    {linkUrl:"Privacy Policy"},
    {linkUrl:"Cookies policy"},
    {linkUrl:"FAQ"},
]

const discover = [
    {linkUrl:"editor's choice"},
    {linkUrl:"curated collection"},
    {linkUrl:"pixabay radio"},
    {linkUrl:"popular images"},
    {linkUrl:"popular videos"},
    {linkUrl:"popular music"},
    {linkUrl:"popular searches"},
]

const Navbar = () => {
const [isScrolling, setIsScrolling] = useState(false);
const [searchDropDown, setSearchDropDown] = useState(false)
const [searchItem, setSearchItem] = useState(searchTags[0].linkUrl)
const [mobileSearchBarOpened, setMobileSearchBarOpened] = useState(false)
const [isNavOpen, setisNavOpen] = useState(false)


useEffect(() => {
      window.addEventListener("scroll", () => {
        window.scrollY > 30 ? setIsScrolling(true) : setIsScrolling(false);
      });
});
  const [dropDownOpened, setdropDownOpened] = useState(false);
  return (
    <div className={isScrolling ? "w-full fixed z-10 bg-white text-black top-0 left-0" : "w-full fixed text-white z-10 top-0 left-0"}>
      <div className="w-full z-10 py-2 gap-5 flex items-center justify-between">
        <div className="pl-2 w-full flex items-center gap-2.5 md:w-min md:pl-8">
          <h1>Pixabay</h1>
          
        </div>
        {/* Mobile Account Options */}
        <div className="md:hidden flex items-center gap-3 pr-2">
        <div className="flex items-center gap-5">
            <button>Login</button>
            <button className={`flex ${isScrolling ? 'bg-black/10' : 'bg-white/20'} items-center gap-1 px-3 py-1.5 rounded-full`}>
              Join
            </button>
        {/* Mobile Navbar Icon */}
       <div onClick={()=>setisNavOpen(true)} className="cursor-pointer hover:bg-white/20 p-3 hover:rounded-full">
       <AiOutlineMenu />
       </div>
          </div>
        </div>
        {/* Desktop Navbar Code Start */}
        {
            isScrolling && <div className="w-full hidden bg-gray-200 md:flex rounded-full px-2 items-center gap-1">
                <CiSearch size={21} className="font-bold"/>
                <input type="text" placeholder="Search Pixabay" className="bg-transparent py-2 px-2 w-full outline-none focus:outline-none rounded-full" />
                <div className={`relative flex items-center gap-0.5 cursor-pointer hover:bg-white/50 px-3 py-1.5 rounded-full`}>
                  <h1 className="flex items-center w-max gap-0 capitalize text-sm" onClick={()=>setSearchDropDown(!searchDropDown)}>{searchItem} <MdKeyboardArrowDown size={21}/> </h1>
                 {
                  searchDropDown &&  <div className="absolute w-max top-11 z-10 right-0 text-gray-600  bg-white py-1 shadow-md shadow-[#484848] rounded-lg">
                  {
                    searchTags.map((item,index)=>{
                      return(
                        <li  onClick={()=>{
                          setSearchItem(item.linkUrl)
                          setSearchDropDown(false)
                        }} key={index} className="flex px-4 py-2 hover:bg-gray-300 items-center gap-2">
                          <span>{item.icon}</span>
                          <span>{item.linkUrl}</span>
                        </li>
                      )
                    })
                  }
                </div>
                 }
                </div>
            </div>
        }
        <div className="hidden md:flex items-center gap-8 pr-3 sm:pr-8">
          <div
            onClick={() => setdropDownOpened(!dropDownOpened)}
            className={dropDownOpened ? `relative z-10 w-24 flex items-center gap-0.5 cursor-pointer bg-black/20 hover:bg-black/20 px-3 py-1.5 rounded-full` : `relative w-24 flex items-center gap-0.5 cursor-pointer hover:bg-white/50 px-3 py-1.5 rounded-full`}
          >
            Explore
            <MdKeyboardArrowDown size={23} />
            {dropDownOpened && (
              <div className="absolute w-max top-11 z-10 right-0 text-white bg-[#191b26] rounded-lg">
                <div className="w-full">
                    <div className="grid sm:grid-cols-2 xmd:grid-cols-3 lg:grid-cols-4 w-full">
                        <ul className="w-auto flex border-r-[1px] pb-3 lg:border-b-0 sm:border-b-[1px] flex-col gap-3">
                            <h1 className="font-semibold py-2 px-3">Media</h1>
                          {
                            media.map((item,index)=>{
                                return(
                                    <li key={index} className="flex px-3 items-center capitalize gap-2">
                                    <span>{item.icon}</span>
                                    <span>{item.linkUrl}</span>
                                </li>
                                )
                            })
                          }
                        </ul>
                        <ul className="border-r-[1px] sm:border-b-[1px] pb-3 sm:border-r-0 xmd:border-r-[1px] lg:border-b-0 w-auto flex flex-col gap-3">
                            <h1 className="font-semibold px-3 py-2">Discover</h1>
                            {
                                discover.map((item,index)=>{
                                    return(
                                        <li key={index} className={item.linkUrl==="pixabay radio"?"flex px-3 items-center capitalize gap-2" : "capitalize px-3"}>{item.linkUrl}
                                        {
                                            item.linkUrl==="pixabay radio" && <span className="text-xs uppercase bg-[#00AB6B] px-1 py-0.5 rounded-sm tracking-wide">new</span>
                                        }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="border-r-[1px] sm:border-r-[1px] pb-3 xmd:border-b-[1px] xmd:border-r-0 lg:border-r-[1px] lg:border-b-0 w-auto flex flex-col gap-3">
                            <h1 className="font-semibold px-3 py-2">Community</h1>
                            {
                                community.map((item,index)=>{
                                    return(
                                        <li className="capitalize px-3" key={index}>{item.linkUrl}</li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="w-auto flex flex-col pb-3 gap-3">
                            <h1 className="font-semibold px-3 py-2">About</h1>
                            {
                                about.map((item,index)=>{
                                    return(
                                        <li key={index} className="capitalize px-3">{item.linkUrl}</li>
                                    )
                                })
                            }
                            <li className="flex items-center px-3 gap-2">
                                <MdOutlineLanguage/>
                                Language
                            </li>
                        </ul>
                    </div>
                    <div className="w-full h-[1px] bg-slate-300 mb-2">

                    </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button>Login</button>
            <button className="bg-white/50 flex items-center gap-1 px-3 py-1.5 rounded-full">
              Join
            </button>
            <button className="bg-[#00AB6B] text-white flex items-center gap-1 px-2 py-1.5 rounded-full">
              <GrFormUpload size={25} />
              Upload
            </button>
          </div>
        </div>
        {/* Desktop Navbar Code Ends */}

        {/* Mobile Navbar Code Starts */}
        <div className={isNavOpen ? "w-full h-screen text-black bg-white fixed top-0 left-0 transition-all duration-700" : "w-full transition-all duration-700 h-screen top-[-100%] bg-white fixed"}>
        <div className="pl-2 pt-2 md:pl-8">
          <h1 className="text-xl font-bold">Pixabay</h1>
        </div>
           <div onClick={()=>setisNavOpen(false)}  className="text-black absolute top-4 p-2 right-2 cursor-pointer hover:bg-black/10 hover:rounded-full md:hidden">
           <AiOutlineClose className="" />
           </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
