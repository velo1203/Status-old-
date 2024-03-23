import { createUser, findByEmail } from "../model/user.model";
import bcrypt from "bcrypt"; // Bcrypt를 불러옴

const registerContoller = async (validated: any) => {
    const existUser = await findByEmail(validated.email);
    if (existUser) {
        throw "User already exists";
    }
    const hashed = await bcrypt.hash(validated.password, 10); //hash the password
    await createUser(validated.email, validated.username, hashed);
    return "User registered";
};

export default registerContoller;
