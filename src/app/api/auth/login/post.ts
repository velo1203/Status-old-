import { loginController } from "@/core/controller/login.controller";
import { NextResponse } from "next/server";
import * as yup from "yup";

const loginSchema = yup.object({
    //using Yup to validate the request body
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export async function login(request: Request) {
    try {
        const body = await request.json();
        const validated = await loginSchema.validate(body); //validate the request body
        const token = await loginController(validated); //call the loginController
        return NextResponse.json(
            { message: "user login success", token },
            { status: 201 }
        );
    } catch (e) {
        console.log(e);
        return NextResponse.json({ message: e }, { status: 400 });
    }
}
