import User from "@/Schemas/User/UserModel";
import { connectToDb } from "@/Utils/Connection/Connection";
import { NextResponse } from "next/server";

export async function POST(Request) {
  try {
    const { username, password } = await Request.json();
    await connectToDb();
    const loggingInUser = await User.findOne({ username });
    if (!loggingInUser) {
      return NextResponse.json("Invalid Username or Password", {
        status: 401,
        statusText: "Forbidden",
      });
    } else {
      const validatePassword = await loggingInUser.comparePass(password);
      if (!validatePassword) {
        return NextResponse.json("Invalid Username or Password", {
          status: 401,
          statusText: "Forbidden",
        });
      } else {
        return NextResponse.json(loggingInUser, {
          status: 200,
          statusText: "Success",
        });
      }
    }
  } catch (error) {
    return NextResponse.json("Server Error", {
      status: 501,
      statusText: error,
    });
  }
}
