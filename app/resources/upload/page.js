import Headings from "@/app/Components/Upload/Headings";
import Uploader from "@/app/Components/Upload/Uploader";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-5 md:mt-12">
      <Headings />
      <Uploader />
    </div>
  );
};

export default page;
