import Link from 'next/link';
import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter,FaPinterest } from "react-icons/fa";


const community = [
    {linkUrl:"blogs"},
    {linkUrl:"forum"},
    {linkUrl:"creators"},
    {linkUrl:"cameras"},
]

const about = [
    {linkUrl:"about us"},
    {linkUrl:"FAQ"},
    {linkUrl:"License Summary"},
    {linkUrl:"Terms of Service"},
    {linkUrl:"Privacy Policy"},
    {linkUrl:"Cookies policy"},
    {linkUrl:"Digital Services Act"},
    {linkUrl:"Report Content"},
    {linkUrl:"API"},
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

const Footer = () => {
  return (
    <div className='w-full py-5'>
        <div className='flex w-full flex-col gap-5 md:gap-0 md:flex-row md:items-center px-3 sm:px-6 justify-center md:justify-between'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-2xl font-bold'>Pixabay</h1>
            <p className='text-sm'>Over 4.6 million+ high quality stock images, videos and music shared by our talented community.
            </p>
            <div className='text-gray-600 flex items-center gap-4'>
                <FaInstagram/>
                <FaTwitter/>
                <FaPinterest/>
                <FaFacebook/>
            </div>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-7'>
            {/* Discover */}
            <div className=''>
                <h1 className='font-bold'>Discover</h1>
                <div className='flex flex-col pt-2'>
                {
                    discover.map((item,index)=>{
                        return(
                            <Link href={item.linkUrl} key={index} className={item.linkUrl==="pixabay radio"?"flex  items-center capitalize gap-2 hover:underline text-xs text-gray-500 py-1" : "capitalize hover:underline text-sm text-gray-500 py-1"}>{item.linkUrl}
                                        {
                                            item.linkUrl==="pixabay radio" && <span className="text-xs text-white uppercase bg-[#00AB6B] px-1 py-0.5 rounded-sm tracking-wide">new</span>
                                        }
                                        </Link>
                        )
                    })
                }
                </div>
            </div>
            {/* Community */}
            <div className=''>
                <h1 className='font-bold'>Community</h1>
                <div className='flex flex-col pt-2'>
                {
                    community.map((item,index)=>{
                        return(
                            <Link href={item.linkUrl} key={index} className={"capitalize hover:underline text-xs text-gray-500 py-1"}>{item.linkUrl}
                                        </Link>
                        )
                    })
                }
                </div>
            </div>
            {/* Community */}
            <div className=''>
                <h1 className='font-bold'>About Us</h1>
                <div className='flex flex-col pt-2'>
                {
                    about.map((item,index)=>{
                        return(
                            <Link href={item.linkUrl} key={index} className={"capitalize hover:underline text-xs text-gray-500 py-1"}>{item.linkUrl}
                                        </Link>
                        )
                    })
                }
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer