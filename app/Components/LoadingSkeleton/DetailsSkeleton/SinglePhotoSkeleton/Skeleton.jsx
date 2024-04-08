import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonBox = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#6D28D9">
      <p>
        <Skeleton
          containerClassName="flex-1"
          count={1}
          className="h-60 sm:h-80 lg:h-96"
        />
      </p>
    </SkeletonTheme>
  );
};

export default SkeletonBox;
