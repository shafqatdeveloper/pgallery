import Media from "@/Schemas/Media/Media";
import { connectToDb } from "@/Utils/Connection/Connection";
import { NextResponse } from "next/server";
export async function GET(Request, { params }) {
  try {
    const { id } = params;
    console.log(id);
    await connectToDb();
    const imgResponse = await Media.findOne({ _id: id });
    return NextResponse.json(imgResponse, {
      status: 200,
      statusText: "Success",
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 501,
      statusText: "Server Error",
    });
  }
}
