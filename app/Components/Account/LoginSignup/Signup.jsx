"use client";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import "./LoginSignup.css";

const Signup = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profielPic, setProfilePic] = useState(null);
  const [profilePicPreview, setprofilePicPreview] = useState(null);

  const handleProfilePic = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setprofilePicPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setProfilePic(e.target.files[0]);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("password", password);
    form.append("username", username);
    form.append("profile", profielPic);
    const res = await fetch("/api/user/register", {
      method: "POST",
      body: form,
    });
    const response = await res.json();
    if (res.status === 200) {
      alert(response);
    } else {
      alert(response);
    }
  };

  return (
    <div className="mt-5 w-full flex items-center justify-center flex-col">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <div className="border-[1px] w-4/5 sm:w-3/5 border-violet-200 rounded-full px-3 py-1 flex items-center gap-2">
          <FaFacebook className="text-blue-600" />
          <h1>Continue with Facebook</h1>
        </div>
        <div className="border-[1px] w-4/5 sm:w-3/5 border-violet-200 rounded-full px-3 py-1 flex items-center gap-2">
          <FcGoogle />
          <h1>Continue with Google</h1>
        </div>
      </div>
      <h1 className="py-5 text-center text-gray-400 text-sm">or</h1>
      <div className="w-full flex items-center flex-col justify-center">
        <form className="w-4/5 sm:w-3/5 flex flex-col gap-5">
          <div className="flex items-center justify-between w-full">
            <div class="file-input-container">
              <label for="profile" class="file-input-label">
                Choose a file
              </label>
              <input
                onChange={(e) => handleProfilePic(e)}
                name="profile"
                id="file-input"
                type="file"
              />
            </div>
            {profilePicPreview && (
              <div className="w-12 h-12 border-[1px] border-violet-700 rounded-full">
                <img
                  src={profilePicPreview}
                  alt="selected"
                  accept=".jpeg .png .jpg"
                  className="w-12 h-12 object-center rounded-full"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="name" className="text-xs">
              *Name
            </label>
            <div className="w-full flex items-center justify-between border-[1px] p-1 px-2 rounded-lg">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-1 px-2 outline-none focus:outline-none"
                placeholder="john"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="username" className="text-xs">
              *Username
            </label>
            <div className="w-full flex items-center justify-between border-[1px] p-1 px-2 rounded-lg">
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-1 px-2 outline-none focus:outline-none"
                placeholder="john"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="username" className="text-xs">
              *Email
            </label>
            <div className="w-full flex items-center justify-between border-[1px] p-1 px-2 rounded-lg">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                className="p-1 px-2 outline-none focus:outline-none"
                placeholder="john@gmail.com"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="password" className="text-xs">
              *Password
            </label>
            <div className="w-full">
              <div className="w-full flex items-center justify-between border-[1px] p-1 px-2 rounded-lg">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-1 px-2 outline-none focus:outline-none"
                  type={showPassword ? "password" : "text"}
                  name="password"
                  placeholder="**********"
                />
                <span className="cursor-pointer">
                  {showPassword ? (
                    <MdVisibilityOff onClick={() => setshowPassword(false)} />
                  ) : (
                    <MdVisibility onClick={() => setshowPassword(true)} />
                  )}
                </span>
              </div>
            </div>
            <h1 className="text-xs text-gray-500">
              * at least 8 characters, including a number
            </h1>
          </div>
        </form>
        <div className="w-full sticky bottom-0 py-4 flex items-center justify-center bg-white">
          <div className="w-3/5 bg-violet-700 cursor-pointer text-white text-center rounded-full py-1.5">
            <button onClick={handleSignup}>Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
