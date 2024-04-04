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
        const form = new FormData();
        form.append("file", profilePic);
        form.append("upload_preset", "tbcln6wk");
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dazatks2h/upload",
          {
            method: "POST",
            body: form,
          }
        );
        const response = await res.json();
        await User.create({
          name,
          email,
          password,
          username,
          profile: {
            profile_public_id: response.public_id,
            profile_secure_url: response.secure_url,
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
