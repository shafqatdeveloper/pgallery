"use client"
import Link from 'next/link'
import React from 'react'
import { BsSoundwave, BsVectorPen } from 'react-icons/bs'
import { FaCamera, FaHome } from 'react-icons/fa'
import { IoIosBrush, IoIosMusicalNotes } from 'react-icons/io'
import { IoFlame, IoVideocam } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import './Home.css'


const media = [
    {linkUrl:"/", title:"home",  icon:<FaHome size={15}/>},
    {linkUrl:"/page/photos", title:"photos", icon:<FaCamera size={15}/>},
    {linkUrl:"/page/illustrations", title:"illustrations", icon:<IoIosBrush size={15}/>},
    {linkUrl:"/page/vectors", title:"vectors", icon:<BsVectorPen size={15}/>},
    {linkUrl:"/page/videos", title:"videos", icon:<IoVideocam size={15}/>},
    {linkUrl:"/page/music", title:"music", icon:<IoIosMusicalNotes size={15}/>},
    {linkUrl:"/page/sound", title:"sound effects", icon:<BsSoundwave size={15}/>},
    {linkUrl:"/page/GIFs", title:"GIFs", icon:<IoFlame size={15}/>},
]

const SinglePage = () => {
    const pathName = usePathname()
    console.log(pathName)
  return (
    <div className='w-full py-10 flex items-center gap-10 justify-center'>
        {
            media.map((item,index)=>{
                return(
                    <Link key={index} className={item.linkUrl===pathName?'flex items-center gap-1 bg-gray-200 rounded-full px-3 py-2.5':'flex items-center gap-1'} href={item.linkUrl}>
                    <span className={item.linkUrl===pathName ? 'text-[#00AB6B]':""}>{item.icon}</span>
                    <span className='capitalize text-sm'>{item.title}</span>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default SinglePage