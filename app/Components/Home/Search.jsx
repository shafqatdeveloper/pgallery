"use client"
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCamera, FaUserAlt } from "react-icons/fa";
import { IoIosBrush, IoIosMusicalNotes } from "react-icons/io";
import { BsSoundwave, BsVectorPen } from "react-icons/bs";
import { IoFlame, IoVideocam } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";



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

const Search = () => {
const [searchDropDown, setSearchDropDown] = useState(false)
const [searchItem, setSearchItem] = useState(searchTags[0].linkUrl)
  return (
    <div className="w-full xmd:w-[62%] bg-gray-200 flex rounded-full px-2 items-center gap-1">
            <CiSearch size={21} className="font-bold" />
            <input
              type="text"
              placeholder="Search Pixabay"
              className="bg-transparent py-3.5 px-2 w-full outline-none focus:outline-none rounded-full"
            />
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
  )
}

export default Search