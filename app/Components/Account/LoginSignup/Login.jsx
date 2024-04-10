"use client";
import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { signIn } from "next-auth/react";
import Loader from "../../Loader/Loader";
import { useAppDispatch } from "@/Libs/Hooks";
import { closeModal } from "@/Libs/features/accountModal/modalSlice";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorOccured, setErrorOccured] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const dispatch = useAppDispatch();
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });
      console.log(res.status);
      if (res.status === 200) {
        console.log("Logged In");
        setLoginSuccess(true);
      } else {
        setErrorMessage(res.error);
        setErrorOccured(true);
      }
    } catch (error) {
      setErrorOccured(true);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      toast("Authentication Successfull", {
        icon: <FaRegCircleCheck size={20} className="text-green-500" />,
        position: "top-right",
      });
      setLoginSuccess(false);
      dispatch(closeModal());
    } else if (errorOccured) {
      toast(errorMessage, {
        position: "top-right",
        icon: <IoIosCloseCircle size={20} className="text-red-500" />,
      });
      setErrorOccured(false);
      setErrorMessage(null);
    }
  }, [loginSuccess, errorMessage, errorOccured]);

  return (
    <div className="mt-5 w-full flex items-center justify-center flex-col">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <div className="border-[1px] w-4/5 sm:w-3/5  border-violet-200 rounded-full px-3 py-1 flex items-center gap-2">
          <FaFacebook className="text-blue-600" />
          <h1>Continue with Facebook</h1>
        </div>
        <div className="border-[1px] w-4/5 sm:w-3/5  border-violet-200 rounded-full px-3 py-1 flex items-center gap-2">
          <FcGoogle />
          <h1>Continue with Google</h1>
        </div>
      </div>
      <h1 className="py-4 text-center text-gray-400 text-sm">or</h1>
      <div className="w-4/5 sm:w-3/5 flex items-center justify-center">
        <form className="w-full flex flex-col gap-5">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="username" className="text-xs">
              *Username or Email
            </label>
            <div className="w-full flex items-center justify-between border-[1px] p-1 px-2 rounded-lg">
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-1 px-2 w-full bg-transparent outline-none focus:outline-none"
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
                  className="p-1 px-2 w-full bg-transparent outline-none focus:outline-none"
                  type={showPassword ? "password" : "text"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <h1 className="text-xs py-1 text-violet-700">Forgot Password?</h1>
            </div>
          </div>
          <div
            onClick={(e) => handleSubmit(e)}
            className={
              loading
                ? "w-full bg-violet-700 border-2 border-violet-700 cursor-pointer text-white text-center rounded-full py-1.5 flex itemsc justify-center"
                : "w-full bg-violet-700 border-2 border-violet-700 cursor-pointer text-white text-center rounded-full py-1.5"
            }
          >
            {loading ? <Loader /> : <button>Login</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
