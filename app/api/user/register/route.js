import User from "@/Schemas/User/UserModel";
import { connectToDb } from "@/Utils/Connection/Connection";
import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { headers } from "next/headers";

export async function POST(Request) {
  try {
    const formData = await Request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const profilePic = formData.get("profile");
    // console.log(profilePic)
    await connectToDb();
    const headerList = headers();
    const requestOrigin = headerList.get("origin");
    const checkUser = await User.findOne({ username });
    if (checkUser) {
      return NextResponse.json("Username already exists", {
        status: 401,
        statusText: "Forbidden",
      });
    } else {
      if (profilePic) {
        cloudinary.config({
          cloud_name: "dazatks2h",
          api_key: "167819145183511",
          api_secret: "zbPX8NC-1Qm6WNSRUSlRpU_DRhI",
        });
        const uploadedFile = await cloudinary.v2.uploader.upload(profilePic, {
          folder: "profile",
        });
        console.log(uploadedFile);
        await User.create({
          name,
          email,
          password,
          username,
          profile: {
            profile_public_id: uploadedFile.public_id,
            profile_secure_url: uploadedFile.secure_url,
          },
        });
        return NextResponse.json("User Registered", {
          status: 201,
          statusText: "Success",
        });
      } else {
        return NextResponse.json("User Registered", {
          status: 201,
          statusText: "Success",
        });
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, {
      status: 501,
      statusText: "Internal Server Error",
    });
  }
}
