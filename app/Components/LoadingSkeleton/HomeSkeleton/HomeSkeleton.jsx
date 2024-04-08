import React from "react";
import SkeletonBox from "./Skeleton";

const HomeSkeleton = () => {
  return (
    <div className="w-full columns-1 sm:columns-2 border-b-[1px] border-b-gray-300 md:columns-3 lg:columns-4 space-y-5 py-4 sm:py-8">
      <div>
        <SkeletonBox />
      </div>
      <div>
        <SkeletonBox />
      </div>
      <div className="hidden sm:block">
        <SkeletonBox />
      </div>
      <div className="hidden sm:block">
        <SkeletonBox />
      </div>
      <div className="hidden sm:block">
        <SkeletonBox />
      </div>
      <div className="hidden sm:block">
        <SkeletonBox />
      </div>
      <div className="hidden sm:block">
        <SkeletonBox />
      </div>
      <div className="hidden sm:block">
        <SkeletonBox />
      </div>
      <div className="hidden sm:block">
        <SkeletonBox />
      </div>
      <div className="hidden sm:block">
        <SkeletonBox />
      </div>
      <div className="hidden sm:block">
        <SkeletonBox />
      </div>
      <div className="hidden sm:block">
        <SkeletonBox />
      </div>
    </div>
  );
};

export default HomeSkeleton;
