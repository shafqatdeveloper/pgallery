import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonBox = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#6D28D9">
      <p>
        <Skeleton count={1} height={250} />
      </p>
    </SkeletonTheme>
  );
};

export default SkeletonBox;
