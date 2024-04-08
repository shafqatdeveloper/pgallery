import Media from "@/Schemas/Media/Media";
import { connectToDb } from "@/Utils/Connection/Connection";
import { NextResponse } from "next/server";

export async function GET(Request, { params }) {
  try {
    await connectToDb();
    const { category } = params;
    const resources = await Media.find({ fileType: category });
    return NextResponse.json(resources, {
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
    return NextResponse.json("Internal Server Error", {
      status: 501,
      statusText: "Serevr Erorr",
    });
  }
}
