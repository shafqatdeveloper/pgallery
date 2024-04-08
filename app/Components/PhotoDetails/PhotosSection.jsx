"use client";
import React, { useEffect, useState } from "react";
import HomeSkeleton from "../LoadingSkeleton/HomeSkeleton/HomeSkeleton";
import Link from "next/link";
import { BsFillHeartFill } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { IoBookmark } from "react-icons/io5";

const PhotosSection = () => {
  const [isLaoding, setIsLaoding] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => setHoveredId(id);
  const handleMouseLeave = () => setHoveredId(null);

  const likeImageHandler = (id) => {
    console.log(id);
    alert("Liked image with ID:", id);
  };

  const addToCollectionHandler = (id) => {
    alert("Added to collection image with ID:", id);
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLaoding(true);
      const res = await fetch("/api/resources/get/all/image");
      const response = await res.json();
      setPhotos(response);
      setIsLaoding(false);
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      {isLaoding ? (
        <HomeSkeleton />
      ) : (
        <div className="columns-1 sm:w-[94%] lg:columns-3 space-y-5 px-l sm:pl-8 py-4 sm:py-8">
          {photos.map((item) => {
            return (
              <div
                key={item._id}
                onMouseEnter={() => handleMouseEnter(item._id)}
                onMouseLeave={handleMouseLeave}
                className={"relative cursor-pointer"}
              >
                <Link href={`/pages/photos/${item._id}`}>
                  <img
                    src={item.imageUrl.file_secure_url}
                    alt=""
                    className={
                      hoveredId === item._id ? "scale-110 overflow-hidden" : ""
                    }
                  />
                </Link>
                {hoveredId === item._id && (
                  <div className="z-10 hidden md:block text-white">
                    <div className="absolute flex items-center gap-3 left-5 top-5">
                      <span
                        onClick={() => addToCollectionHandler(item._id)}
                        className="bg-white/40 p-1 rounded-md border-[1.5px] border-gray-300 cursor-pointer hover:border-white"
                      >
                        <IoBookmark size={18} />
                      </span>
                      <span
                        onClick={() => likeImageHandler(item._id)}
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
      )}
    </div>
  );
};

export default PhotosSection;
