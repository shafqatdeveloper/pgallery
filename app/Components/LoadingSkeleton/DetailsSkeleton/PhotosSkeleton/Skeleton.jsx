import React from "react";
import SkeletonBox from "../../HomeSkeleton/Skeleton";

const Skeleton = () => {
  return (
    <div className="w-full columns-1 sm:w-[94%] lg:columns-3 space-y-5 px-l sm:pl-8 py-4 sm:py-8">
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

export default Skeleton;
