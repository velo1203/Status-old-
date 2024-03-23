import { VerifyJsonWebToken } from "@/core/utils/jwt";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
export async function get(request: Request) {
    try {
        const header = headers().get("Authorization");
        const token = header?.split(" ")[1];
        if (!token) {
            throw new Error("Unauthorized");
        }
        const payload = await VerifyJsonWebToken(token);
        return NextResponse.json(
            {
                message: "User is authenticated!",
                ...payload,
            },
            {
                status: 200,
            }
        );
    } catch (e: any) {
        return NextResponse.json(
            {
                message: e.message,
            },
            {
                status: 401,
            }
        );
    }
}
