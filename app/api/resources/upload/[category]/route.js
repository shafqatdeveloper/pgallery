import { NextResponse } from "next/server";
import { query } from "@/Utils/Connection/Connection";

export async function GET(Request,{params}) {
    try {
        const {category} = params;
        const id=1;
        const city='DPL'
        console.log(category)
        const users = await query({
            query: "SELECT * FROM test WHERE id=? AND city=?",
            values: [id,city]
        })
        return NextResponse.json(users, {
            status: 200,
            statusText: "Data Retrieved"
        })
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 500,
            statusText: "Server Error"
        })
    }
}