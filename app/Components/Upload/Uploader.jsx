"use client";
import React, { useEffect, useState } from "react";
import { FaFireFlameCurved, FaRegCircleCheck, FaVideo } from "react-icons/fa6";
import { MdDelete, MdInsertPhoto, MdPhoto } from "react-icons/md";
import { HiMusicNote } from "react-icons/hi";
import { CiCircleQuestion } from "react-icons/ci";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./Upload.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Loader from "../Loader/Loader";
import { FaFlag, FaRegQuestionCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import {
  IoIosCloseCircle,
  IoIosMusicalNotes,
  IoMdCheckboxOutline,
} from "react-icons/io";

const Uploader = () => {
  const [selectedFile, setselectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [aiGenerated, setAiGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const [fileTypeCheck, setFileTypeCheck] = useState("");
  const selectedFileType = String(fileTypeCheck.type).split("/")[0];
  const { data: session } = useSession();
  const loggedInUser = session?.user?._id;
  const handleFileInput = (e) => {
    setFileTypeCheck(e.target.files[0]);
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFilePreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setselectedFile(e.target.files[0]);
  };

  const handleRemoveSelectedFile = () => {
    const confirmRemove = confirm("Are You sure to Remove the selected File?");
    if (confirmRemove) {
      setselectedFile(null);
      setFilePreview(null);
    }
  };

  const handleFileUpload = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = new FormData();
    form.append("tags", tags);
    form.append("description", description);
    form.append("fileType", selectedFileType);
    form.append("aiGenerated", aiGenerated);
    form.append("mediaFile", selectedFile);
    form.append("uploadedBy", loggedInUser);
    const res = await fetch("/api/resources/upload", {
      method: "POST",
      body: form,
    });
    const response = await res.json();
    if (res.status === 200) {
      setTags("");
      setselectedFile(null);
      setFilePreview(null);
      setDescription("");
      setAiGenerated(false);
      setSuccessMessage(response);
    } else {
      setErrorMessage(response);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (successMessage) {
      toast("Uploaded Successfull", {
        icon: <FaRegCircleCheck className="text-green-500" />,
      });
      setSuccessMessage(null);
    } else if (errorMessage) {
      toast(errorMessage, {
        icon: <IoIosCloseCircle className="text-red-500" />,
      });
      setErrorMessage(null);
    } else if (uploadError) {
      toast(uploadError, {
        icon: <IoIosCloseCircle className="text-red-500" />,
      });
      setUploadError(null);
    }
  }, [successMessage, errorMessage, uploadError]);

  return (
    <div className="w-full flex gap-3 flex-col sm:flex-row items-center justify-center my-5">
      {filePreview ? (
        // If A file is Selected
        <div className="flex w-full flex-col gap-3 justify-center px-2 sm:px-4 md:px-0 items-center md:flex-row">
          <div className="w-full flex flex-col md:flex-row py-4 md:py-0 border-[1px] items-center border-gray-500 rounded-md gap-3 md:w-[65%]">
            {/* Image Preview */}
            {(fileTypeCheck.type === "image/jpeg" ||
              fileTypeCheck.type === "image/jpg" ||
              fileTypeCheck.type === "image/png") && (
              <div className="w-full px-2 sm:px-5 md:px-1 md:w-2/4 sm:border-r-[1px] rounded-tl-md h-96 object-cover rounded-bl-md">
                <img
                  src={filePreview}
                  className="w-full rounded-tl-md h-full rounded-bl-md"
                />
              </div>
            )}
            {/* Audio Preview */}
            {fileTypeCheck.type === "audio/mpeg" && (
              <div className="w-full px-2 sm:px-5 md:px-1 md:w-2/4 sm:border-r-[1px] rounded-tl-md h-96 flex items-center justify-center object-cover rounded-bl-md">
                <audio controls>
                  <source src={filePreview} type="audio/mpeg" />
                  Your browser does not support the audio tag.
                </audio>
              </div>
            )}
            {/* Video Preview */}
            {fileTypeCheck.type === "video/mp4" && (
              <div className="w-full px-2 sm:px-5 md:px-1 md:w-2/4 sm:border-r-[1px] rounded-tl-md h-96 flex items-center justify-center object-cover rounded-bl-md">
                <video className="rounded-md h-full w-full" controls>
                  <source src={filePreview} type={fileTypeCheck.type} />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {/* Tags, Description and Ai Generated Options */}
            <div className="w-full md:w-2/4 px-2 sm:px-5 flex flex-col gap-6 sm:gap-8">
              {/* Tags Input */}
              <div className="w-full flex flex-col gap-1">
                <label
                  className="w-full flex items-center gap-1 text-xs text-gray-500"
                  htmlFor="tags"
                >
                  <span>Tags</span>
                  <CiCircleQuestion className="text-black" />
                  Enter tags in English
                </label>
                <div className="w-full md:w-[90%] border-[1px] border-black rounded-md p-1">
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Enter 3 or More Tags"
                    className="bg-transparent w-full outline-none focus:outline-none"
                  />
                </div>
              </div>
              {/* Description Input */}
              <div className="w-full flex flex-col gap-1">
                <label
                  className="w-full flex items-center gap-1 text-xs text-gray-500"
                  htmlFor="description"
                >
                  <span>Description</span>
                  <CiCircleQuestion className="text-black" />
                  Optional
                </label>
                <div className="w-full md:w-[90%] border-[1px] border-black rounded-md p-1">
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add an Optional Description"
                    className="bg-transparent w-full outline-none focus:outline-none"
                  />
                </div>
              </div>
              {/* Ai Generated Checkbox */}
              <div className="flex gap-2  items-center justify-start">
                <input
                  className="p-4"
                  type="checkbox"
                  checked={aiGenerated}
                  onChange={(e) => setAiGenerated(e.target.checked)}
                  name="ai"
                  id="aigenerated"
                />
                <span className="text-sm">This media is AI generated </span>
                <span>
                  <CiCircleQuestion />
                </span>
              </div>
              {/* Submit Button */}
              <div className="w-full">
                <div className="w-full md:w-[90%] bg-violet-700 py-2 rounded-md flex items-center justify-center text-white font-bold font-sans">
                  {loading ? (
                    <Loader />
                  ) : (
                    <button
                      className="w-full"
                      disabled={
                        loading || !session || !session.user._id ? true : false
                      }
                      onClick={(e) => handleFileUpload(e)}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="md:text-red-500 px-12 md:px-0 py-3 rounded-md md:py-0 bg-red-500 md:bg-transparent text-white cursor-pointer">
            <MdDelete
              className=""
              size={24}
              onClick={handleRemoveSelectedFile}
            />
          </div>
        </div>
      ) : (
        // Select A File
        <div className="w-full flex flex-col items-center gap-5">
          {/* Headings */}
          <div className="w-full gap-1 flex items-center justify-center flex-col">
            <h1 className="text-xl font-bold font-sans md:text-3xl">
              Upload your media
            </h1>
            <p className="text-sm">
              Join our community of creators and showcase your talent by
              uploading your media!
            </p>
            <p className="text-sm">
              Learn more about the Pixabay{" "}
              <Link
                href={"/privacy-policy/content-license"}
                className="underline"
              >
                Content license.
              </Link>
            </p>
          </div>
          {/* Upload Box */}
          <div className="w-full px-2 sm:px-0 bg-[#f7f7f7] rounded-xl border-2 border-[#dddddd] border-dashed sm:w-3/4 py-8 md:py-14 md:w-[65%] flex flex-col items-center justify-center">
            {/* Icons */}
            <div className="flex items-center gap-1.5">
              <div className="bg-white text-sky-600 rounded-full p-4">
                <FaVideo />
              </div>
              <div className="bg-white text-orange-500 rounded-full p-4">
                <MdInsertPhoto />
              </div>
              <div className="bg-white rounded-full text-green-600 p-4">
                <HiMusicNote />
              </div>
            </div>
            {/* File Input */}
            <div className="my-5">
              <label for="file-upload" class="custom-file-upload">
                Browse a file
              </label>
              <input
                onChange={(e) => handleFileInput(e)}
                name=""
                id="file-upload"
                type="file"
              />
            </div>
            {/* Upload Limit Reminder */}
            <div className="flex items-center gap-1 text-sm">
              <h1>7 uploads remaining this week</h1>
              <FaRegQuestionCircle size={14} className="limit-reminder" />
            </div>
            {/* Tooltip */}
            <ReactTooltip
              anchorSelect=".limit-reminder"
              place="bottom"
              style={{ width: "32px" }}
            >
              Pgallery limits weekly uploads, so that all submissions can be
              properly reviewed by our team. The limit is determined by quality
              of your work
            </ReactTooltip>
          </div>
          {/* Upload Guides */}
          <div className="w-full py-10 border-b-[1px] sm:w-3/4 md:w-[65%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-5 gap-y-4 sm:gap-y-5">
            {/* Photo */}
            <div className="flex gap-2.5 items-start">
              <MdPhoto size={23} className="text-gray-500" />
              <p className="text-sm">
                JPG, PNG, PSD, AI, and SVG images up to 40MB
              </p>
            </div>
            <div className="flex gap-2.5 items-start">
              <FaVideo size={20} className="text-gray-500" />
              <p className="text-sm">MPEG, MOV, and AVI videos up to 300MB</p>
            </div>
            <div className="flex gap-2.5 items-start">
              <IoIosMusicalNotes size={26} className="text-gray-500" />
              <p className="text-sm">
                MP3, WAV, AAC,FLAC, AIF and M4A up to 100MB
              </p>
            </div>
            <div className="flex gap-2.5 items-start">
              <FaFireFlameCurved size={20} className="text-gray-500" />
              <p className="text-sm">
                GIFs up to 25MB with at least 64px along one side
              </p>
            </div>
            <div className="flex gap-2.5 items-start">
              <FaFlag size={20} className="text-gray-500" />
              <p className="text-sm">
                Exclude graphic nudity, violence or hate
              </p>
            </div>
            <div className="flex gap-2.5 items-start">
              <IoMdCheckboxOutline size={26} className="text-gray-500" />
              <p className="text-sm">
                Only upload original media that you own the rights to
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Uploader;
