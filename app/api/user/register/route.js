import User from "@/Schemas/User/UserModel";
import { connectToDb } from "@/Utils/Connection/Connection";
import { NextResponse } from "next/server";
import fs from "fs";
import { pipeline } from "stream";
import path from "path";
import { promisify } from "util";
import { headers } from "next/headers";
const pump = promisify(pipeline);

export async function POST(Request) {
  try {
    const formData = await Request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const profilePic = formData.get("profile");
    await connectToDb();
    const headerList = headers();
    const requestOrigin = headerList.get("origin");
    const checkUser = await User.findOne({ username });
    // await User.create({
    //       name,
    //       email,
    //       username,
    //       password,
    //     });
    //          return NextResponse.json("User Registered", {
    //     status: 201,
    //     statusText: "Success",
    //   });
    if (checkUser) {
      return NextResponse.json("Username already exists", {
        status: 401,
        statusText: "Forbidden",
      });
    } else {
      if(profilePic === null){
        await User.create({
          name,
          email,
          username,
          password,
        });
      }else{
        const newName = username + "profilepic" + path.extname(profilePic.name);
        const profile = new File([profilePic], newName, {
          type: profilePic.type,
          lastModified: profilePic.lastModified,
        });
        const filePath = `./public/uploads/${profile.name}`;
        await pump(profile.stream(), fs.createWriteStream(filePath));
        const profileUrl = `${requestOrigin}/public/uploads/${profile.name}`;
        await User.create({
          name,
          email,
          username,
          password,
          profile: profileUrl,
        });
      }
      return NextResponse.json("User Registered", {
        status: 201,
        statusText: "Success",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, {
      status: 501,
      statusText: "Internal Server Error",
    });
  }
}
