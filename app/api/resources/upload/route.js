import { NextResponse } from "next/server";
import Media from "@/Schemas/Media/Media";

export async function POST(Request) {
  try {
    const formData = await Request.formData();
    const uploadedBy = formData.get("uploadedBy");
    const uploadedFile = formData.get("mediaFile");
    const tags = formData.get("tags");
    const fileType = formData.get("fileType");
    const description = formData.get("description");
    const aiGenerated = formData.get("aiGenerated");
    const form = new FormData();
    form.append("file", uploadedFile);
    form.append("upload_preset", "tbcln6wk");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dazatks2h/upload",
      {
        method: "POST",
        body: form,
      }
    );
    const response = await res.json();
    await Media.create({
      imageUrl: {
        file_public_id: response.public_id,
        file_secure_url: response.secure_url,
      },
      uploadedBy,
      mediaType: response.format,
      tags,
      fileType,
      description,
      aiGenerated,
      width: response.resource_type === "image" ? response.width : undefined,
      height: response.resource_type === "image" ? response.height : undefined,
    });
    return NextResponse.json("Uploaded Successfully", {
      status: 200,
      statusText: "Success",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message, {
      status: 500,
      statusText: "Server Error",
    });
  }
}
