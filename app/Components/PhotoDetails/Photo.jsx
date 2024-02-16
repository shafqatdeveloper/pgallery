"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaBookmark, FaCheck } from 'react-icons/fa'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { TfiComment } from "react-icons/tfi";
import { IoMdShare } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
import { AiOutlineUser, AiOutlineUserAdd } from 'react-icons/ai'





const photosSample = [
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941872/living-room-8557308_1920_ruglrw.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941872/maple-888807_1920_nz4fqc.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941870/balloon-991680_1920_kywec3.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941870/daisies-712892_1280_pwfhcw.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941869/cat-8540772_1920_chpbdt.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941868/heart-8545742_1280_y3qsdf.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941872/living-room-8557308_1920_ruglrw.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941872/maple-888807_1920_nz4fqc.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941870/balloon-991680_1920_kywec3.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941870/daisies-712892_1280_pwfhcw.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941869/cat-8540772_1920_chpbdt.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941868/heart-8545742_1280_y3qsdf.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941872/living-room-8557308_1920_ruglrw.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941872/maple-888807_1920_nz4fqc.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941870/balloon-991680_1920_kywec3.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941870/daisies-712892_1280_pwfhcw.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941869/cat-8540772_1920_chpbdt.jpg'},
    {picUrl:'https://res.cloudinary.com/daxuxn2ec/image/upload/v1707941868/heart-8545742_1280_y3qsdf.jpg'},
]

const Photo = ({id}) => {

    const [detailsOpen, setDetailsOpen] = useState(false)

  return (
    <div className='w-full flex flex-col md:flex-row md:items-start md:justify-between gap-4'>


        {/* Images Side */}
        <div className='w-full sm:w-4/6 h-[96]'>
            {/* Image */}
            <div className='w-full h-96 flex items-center justify-center'>
            <img src={photosSample[id].picUrl} alt="" className='w-full sm:w-4/6 h-full object-cover ' />
            </div>
            {/*  */}

        

        </div>



        {/* Right Bar */}
        <div className='sticky w-auto md:right-10 h-max top-6 bg-white border-[1px] shadow-xl rounded-lg'>
        <div className='w-full px-3 py-2'>
            {/* Licence */}
            <div className='flex p-2 items-center gap-1'>
            <div className='p-1 bg-black/20 rounded-full'>
            <IoCheckmarkOutline/>
            </div>
            <p className='text-xs'>Free for use under the Pixabay <span>
            <Link href={'/content_license'}>Content License</Link>
                </span>
                </p>
            </div>
            {/* Button TO Download */}
            <div className='w-full my-2 border-b-[1px] border-b-gray-300 text-white py-3.5 px-1'>
                <button className='flex items-center gap-3 py-[5px] rounded-3xl bg-[#00AB6B] w-full justify-center'>Download <span><MdKeyboardArrowDown/></span></button>
            </div>
            {/* Like, Save, Comment and Share Buttons */}
            <div className='flex w-full items-center justify-center gap-2'>
                {/* Like */}
                <div className='flex h-9 w-[75px] items-center border-[1px] rounded-lg gap-2 justify-center'>
                    <CiHeart size={20}/>
                    <span>120</span>
                </div>
                {/* Save */}
                <div className='flex h-9 w-20 items-center border-[1px] rounded-lg gap-2 justify-center'>
                    <FaBookmark size={13}/>
                    <span>20</span>
                </div>
                {/* Comment */}
                <div className='flex h-9 w-10 items-center border-[1px] rounded-lg gap-2 justify-center'>
                    <TfiComment size={14}/>
                </div>
                {/* Share */}
                <div className='flex h-9 w-10 items-center border-[1px] rounded-lg gap-2 justify-center'>
                    <IoMdShare size={20}/>
                </div>
            </div>
            {/* Views, Downloads and Details */}
            <div className='flex flex-col border-b-[1px] border-b-gray-300 gap-[7px] text-xs text-gray-500 py-3'>
                {/* Views */}
                <div className='flex items-center justify-between'>
                    <span>Views</span>
                    <span>737</span>
                </div>
                {/* Downloads */}
                <div className='flex items-center justify-between'>
                    <span>Downloads</span>
                    <span>237</span>
                </div>
                {/* Other Details */}
                <div className='flex flex-col gap-[7px]'>
                    {/* Details Section Opener */}
                    {
                
                        !detailsOpen && <div onClick={()=>setDetailsOpen(true)} className='flex cursor-pointer items-center gap-0.5'>
                        <h1 className='underline'>Show Details</h1>
                        <span><MdKeyboardArrowDown size={15}/></span>
                        </div> 
                    }
                    {/* Opened Details Section */}
                    {  detailsOpen && 
                    <>
                    {/* Saves */}
                    <div className='flex items-center justify-between'>
                    <span>Saves</span>
                    <span>14</span>
                    </div>
                    {/* Camera */}
                    <div className='flex items-center justify-between'>
                    <span>Camera</span>
                    <span className='flex items-center gap-0.5'>
                        <span>
                            Nikon D3500
                        </span>
                        <PiWarningCircle/>
                    </span>
                    {/* Media Type */}
                    </div>
                    <div className='flex items-center justify-between'>
                    <span>Media type</span>
                    <span>JPG</span>
                    </div>
                    {/* Resolution */}
                    <div className='flex items-center justify-between'>
                    <span>Resolution</span>
                    <span>6000 x 4000</span>
                    </div>
                    {/* Date */}
                    <div className='flex items-center justify-between'>
                    <span>Publishes date</span>
                    <span>Jan 31, 2024</span>
                    </div>
                    <div onClick={()=>setDetailsOpen(false)} className='flex cursor-pointer items-center gap-0.5'>
                    <h1 className='underline'>Hide Details</h1>
                    <span><MdKeyboardArrowUp size={15}/></span>
                    </div>
                    </>
                    }
                </div>
            </div>
            {/* User Details */}
            <div className='flex items-center justify-between'>
                {/* User Details */}
                <div className='flex items-center gap-5'>
                <img src={photosSample[id].picUrl} className='w-10 h-10 rounded-full object-cover my-5' alt="" />
                <div className='text-sm'>
                    <h1>M Shafqat</h1>
                    <span className='text-xs text-gray-500'>95 followers</span>
                </div>
                </div>
                {/* Follow User */}
                <div>
                    <button className='flex text-sm pr-5 items-center gap-1'>
                        <AiOutlineUserAdd/>
                        <span className='tracking-wide'>Follow</span>
                    </button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Photo