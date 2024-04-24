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
    const PostLikes = Post.likes;
    const likingUser = await User.findById(loggedInUser);
    // console.log("Liking User", likingUser);
    const isLiked = likingUser.likedPosts.includes(PostId);
    if (isLiked) {
      likingUser.likedPosts = likingUser.likedPosts.filter(
        (postId) => postId.toString() !== PostId.toString()
      );
      await Media.findByIdAndUpdate(id, { likes: PostLikes - 1 });
      await likingUser.save();
      return NextResponse.json("Unliked", {
        status: 200,
        statusText: "Success",
      });
    } else {
      likingUser.likedPosts.push(PostId);
      await Media.findByIdAndUpdate(id, { likes: PostLikes + 1 });
      await likingUser.save();
      return NextResponse.json("liked", {
        status: 200,
        statusText: "Success",
      });
    }
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 501,
      statusText: "Server Error",
    });
  }
}
