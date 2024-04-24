import Media from "@/Schemas/Media/Media";
import User from "@/Schemas/User/UserModel";
import { connectToDb } from "@/Utils/Connection/Connection";
import { NextResponse } from "next/server";

export async function PUT(Request, { params }) {
  try {
    const { id } = params;
    const { loggedInUser } = await Request.json();
    await connectToDb();
    const Post = await Media.findById(id);
    const PostId = Post._id;
    const likingUser = await User.findById(loggedInUser);
    const isLiked = likingUser.likedPosts.includes(PostId);
    return NextResponse.json(isLiked, { status: 200, statusText: "OK" });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 501,
      statusText: "Server Error",
    });
  }
}
