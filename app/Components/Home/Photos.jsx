"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdSettings } from "react-icons/io";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BsQuestionCircle } from "react-icons/bs";




const Photos = () => {

    const famousSearches = [
        {title:"nature",linkUrl:"/nature"},
        {title:"wallpaper",linkUrl:"/wallpaper"},
        {title:"flowers",linkUrl:"/flower"},
        {title:"background",linkUrl:"/background"},
        {title:"sky",linkUrl:"/sky"},
        {title:"love",linkUrl:"/love"},
        {title:"flowers",linkUrl:"/flowers"},
        {title:"beach",linkUrl:"/beach"},
        {title:"forest",linkUrl:"/forest"},
        {title:"cat",linkUrl:"/cat"},
        {title:"water",linkUrl:"/water"},
        {title:"iphone wallpaper",linkUrl:"/iphone"},
    ]

    const searchOptions = [
        {title:"editor's choice",category:"editor choice"},
        {title:"latest",category:"latest"},
        {title:"trending",category:"trending"}
    ]

    const searchSettingOptions = [
        {title:'safe search'},
        {title:'hide ai generated'}
    ]

    const [searchOption, setSearchOption] = useState(searchOptions[0].title);
    const [searchOptionOpened, setSearchOptionOpened] = useState(false)
    const [searchSettingOpened, setsearchSettingOpened] = useState(false)



  return (
    <div className='w-full overflow-auto'>
        <div className='px-2 sm:px-8 flex items-center justify-between overflow-x-auto'>
            {/* Search Categories */}
            <div className='flex items-center gap-2'>
                {
                    famousSearches.map((item,index)=>{
                        return(
                            <Link className='border-[1px] border-gray-300 w-max text-gray-600 text-normal rounded-[8px] px-2 py-0.5' key={index} href={item.linkUrl}>
                            {item.title}
                            </Link>
                        )
                    })
                }
            </div>
            {/* Search Settings */}
            <div className='flex items-center gap-7 border-l-[1px] border-l-gray-200 pl-5'>
                {/* Search Setting */}
                <div onClick={()=>setsearchSettingOpened(!searchSettingOpened)} className='relative cursor-pointer'>
                    <IoMdSettings/>
                    {/* Opened Search Settings Tab */}
                    {
                        searchSettingOpened && <div className='absolute right-0 top-8 w-52 flex flex-col py-2 text-gray-500 capitalize bg-white shadow-md shadow-gray-500 rounded-md px-2'>
                        {
                            searchSettingOptions.map((item,index)=>{
                                return(
                                    <div key={index} className='flex py-2 items-center justify-between'>
                                        <span className='flex items-center gap-1'>
                                        <input type="checkbox" name="" id="" />
                                        <span>{item.title}</span>
                                        </span>
                                        <span>
                                            <BsQuestionCircle/>
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    }
                </div>
                {/* Search Options */}
                <div className='relative'>
                    <div onClick={()=>setSearchOptionOpened(!searchOptionOpened)} className='flex capitalize items-center gap-1 w-max border-[1px] border-gray-400 cursor-pointer text-gray-600 rounded-[8px] px-2 py-0.5'>
                    <span>{searchOption}</span>
                    <span>{<MdKeyboardArrowDown size={17}/>}</span>
                    </div>
                    {/* Opened Search Options Tab */}
                    {
                        searchOptionOpened &&
                    <div className='absolute right-0 top-8 w-96 flex flex-col py-2 text-gray-500 capitalize bg-white shadow-md shadow-gray-500 rounded-md px-2'>
                    { 
                        searchOptions.map((item,index)=>{
                            return(
                                <span onClick={()=>{
                                    setSearchOption(item.title)
                                    setSearchOptionOpened(false)
                                }} className={searchOption === item.title ? 'text-[#00AB6B] py-1 hover:bg-gray-100 hover:rounded-md px-1 cursor-pointer' : 'py-1 hover:bg-gray-100 hover:rounded-md px-1 cursor-pointer'} key={index}>{item.category}</span>
                                )
                            })
                    }
                    </div>
                        }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Photos