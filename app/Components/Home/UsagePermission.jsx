import Link from "next/link";
import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

const UsagePermission = () => {
  return (
    <div className="flex items-start justify-center gap-3 border-b-[1px] border-b-gray-300">
      <div className="sm:mt-1 bg-violet-200 p-2 rounded-full">
        <BsFillHeartFill size={13} className="text-violet-700" />
      </div>
      <div className="flex flex-col gap-3 pb-5">
        <h1 className="font-bold">Free media you can use anywhere</h1>
        <p className="text-sm">
          Pixabay is a vibrant community of creatives, sharing royalty-free
          images, videos, audio and other media. All content is released by
          Pixabay under the Content License, which makes it safe to use without
          asking for permission or giving credit to the artist - even for
          certain commercial purposes.
        </p>
        <Link className="mt-6 text-violet-700 text-sm" href={"/services/terms"}>
          Learn more about our license
        </Link>
      </div>
    </div>
  );
};

export default UsagePermission;
