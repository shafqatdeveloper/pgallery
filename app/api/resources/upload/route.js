import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import Media from "@/Schemas/Media/Media";

export async function POST(Request) {
  try {
    const formData = await Request.formData();
    const pic = formData.get("mediaFile");
    const uploadedBy = formData.get("uploadedBy");
    const tags = formData.get("tags");
    const description = formData.get("description");
    const aiGenerated = formData.get("aiGenerated");
    cloudinary.config({
      cloud_name: "dazatks2h",
      api_key: "167819145183511",
      api_secret: "zbPX8NC-1Qm6WNSRUSlRpU_DRhI",
    });
    const uploadedFile = await cloudinary.v2.uploader.upload(pic, {
      folder: "resources",
    });
    await Media.create({
      imageUrl: {
        file_public_id: uploadedFile.public_id,
        file_secure_url: uploadedFile.secure_url,
      },
      uploadedBy,
      mediaType: uploadedFile.resource_type,
      tags,
      description,
      aiGenerated,
      width:
        uploadedFile.resource_type === "image" ? uploadedFile.width : undefined,
      height:
        uploadedFile.resource_type === "image"
          ? uploadedFile.height
          : undefined,
    });
    return NextResponse.json("Uploaded Successfully", {
      status: 200,
      statusText: "Success",
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 500,
      statusText: "Server Error",
    });
  }
}
