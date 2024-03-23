import * as yup from "yup";
import { NextResponse } from "next/server";
import registerContoller from "@/core/controller/register.controller";

const registerSchema = yup.object({
    //using Yup to validate the request body
    email: yup.string().email().required(),
    password: yup.string().required(),
    username: yup.string().required(),
});

export async function register(request: Request) {
    try {
        const body = await request.json();
        const validated = await registerSchema.validate(body);
        await registerContoller(validated);
        return NextResponse.json(
            { message: "User registered" },
            { status: 201 }
        );
    } catch (e) {
        return NextResponse.json({ message: e }, { status: 400 });
    }
}
