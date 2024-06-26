"use client";
import React, { useState } from "react";
import Search from "./Search";
import Link from "next/link";
import "./Home.css";
import SinglePage from "./SinglePage";
import Photos from "./Photos";
import UsagePermission from "./UsagePermission";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full relative h-[67vh]">
        <div className="absolute -z-10 top-0 left-0 h-full w-full">
          <img
            className="h-full w-full object-center"
            src="https://res.cloudinary.com/daxuxn2ec/image/upload/v1707767992/pexels-drift-shutterbug-2085998_wt2zqj.jpg"
            alt=""
          />
        </div>
        <div className="flex items-center px-3 sm:px-10 justify-center flex-col gap-8 h-full w-full">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl sm:text-2xl font-bold xmd:text-3xl text-white capitalize tracking-wide">
              Stunning royalty-free images & royalty-free stock
            </h1>
            <p className="text-sm  text-white">
              Over 4.3 million+ high quality stock images, videos and music
              shared by our talented community.
            </p>
          </div>
          <Search />
        </div>
        <div className="absolute sm:bottom-5 bottom-14 left-2 sm:left-10">
          <h1 className="text-white text-xs">
            Read more about the{" "}
            <Link className="underline" href={"/"}>
              Content License
            </Link>
          </h1>
        </div>
        <div className="absolute bottom-5 right-10">
          <h1 className="text-white text-xs">
            Free Image By{" "}
            <Link className="underline" href={"/"}>
              Daniel Grey
            </Link>
          </h1>
        </div>
      </div>
      {/* Pages */}
      <div className="w-full">
        <SinglePage />
      </div>
      {/* Phtots Section With Search Filters */}
      <div>
        <Photos />
      </div>
      {/* Usage Permissions */}
      <div className="px-2 sm:px-5 py-5">
        <UsagePermission />
      </div>
    </>
  );
};

export default HomePage;
