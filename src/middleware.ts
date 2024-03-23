import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { VerifyJsonWebToken } from "./core/utils/jwt";

export async function middleware(request: NextRequest) {
    const header = request.headers.get("Authorization");
    const token = header?.split(" ")[1];

    if (!token) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    try {
        await VerifyJsonWebToken(token); // jwt 토큰을 검증한다.
        return NextResponse.next();
    } catch (e) {
        return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }
}

// See "Matching Paths" below to learn more

export const config = {
    matcher: ["/api/auth/protected"],
};
