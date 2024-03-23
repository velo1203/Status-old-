import { findByEmail } from "../model/user.model";
import bcrypt from "bcrypt";

import { SignJsonWebToken } from "@/core/utils/jwt";
import Payload from "@/core/types/payload";

type loginControllerType = (validated: any) => Promise<any>;

const loginController: loginControllerType = async (validated: any) => {
    const existUser = await findByEmail(validated.email);
    if (!existUser) {
        throw "User not found";
    }
    const match = await bcrypt.compare(validated.password, existUser.password);
    if (!match) {
        throw "Password is incorrect";
    }
    const payload: Payload = {
        id: existUser.id,
        email: existUser.email,
        username: existUser.username,
    };
    // payload는 string, buffer, object 타입의 값이 들어간다.
    const token = SignJsonWebToken(payload); // payload를 통해 jwt 토큰을 생성한다.
    return token;
};

export { loginController };
