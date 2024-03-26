import { connectToDb } from "@/Utils/Connection/Connection";
import { NextResponse } from "next/server";

export async function GET(Request,Response){
        try {
            await connectToDb()
            return NextResponse.json("Working",{
                status:200,
                statusText:"OK"
            })
        } catch (error) {
            return NextResponse.json("Internal Server Error",{
                status:501,
                statusText:"Serevr Erorr"
            })
        }
}