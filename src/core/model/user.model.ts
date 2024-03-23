import db from "@/core/lib/database";

type createUserType = (
    email: string,
    username: string,
    password: string
) => Promise<any>;

type findByEmailType = (email: string) => Promise<any>;

// Create a new user
const createUser: createUserType = async (
    email: string,
    username: string,
    password: string
) => {
    return new Promise((resolve, reject) => {
        db.run(
            "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
            [email, username, password],
            (err: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            }
        );
    });
};

//find By Email
const findByEmail: findByEmailType = async (email: string) => {
    return new Promise((resolve, reject) => {
        db.get(
            "SELECT * FROM users WHERE email = ?",
            [email],
            (err: any, row: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            }
        );
    });
};

export { createUser, findByEmail };
