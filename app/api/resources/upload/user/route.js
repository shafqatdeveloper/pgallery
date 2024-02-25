import { NextResponse } from "next/server";
import { query } from "@/Utils/Connection/Connection";

export async function GET(Request, Response) {
    try {
        const users = await query({
            query: "SELECT * FROM test",
            values: []
        })
        return NextResponse.json(users, {
            status: 200,
            statusText: "Successfully Connected to Database"
        })
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 500,
            statusText: "Server Error"
        })
    }
}