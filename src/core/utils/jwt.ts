import * as jose from "jose";
import Payload from "@/core/types/payload";
const alg = "HS256";

async function SignJsonWebToken(payload: Payload) {
    const secret = new TextEncoder().encode(process.env.JWT_TOKEN_SECRET);

    const token = await new jose.SignJWT({ payload })
        .setProtectedHeader({ alg })
        .setExpirationTime("1d")
        .sign(secret);

    return token;
}

async function VerifyJsonWebToken(token: string) {
    try {
        const secret = new TextEncoder().encode(process.env.JWT_TOKEN_SECRET);

        const { payload } = await jose.jwtVerify(token, secret);
        return payload;
    } catch (e) {
        throw e;
    }
}

export { SignJsonWebToken, VerifyJsonWebToken };
