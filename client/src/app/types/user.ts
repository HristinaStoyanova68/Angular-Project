export interface User {
    // themes: string[];
    // posts: string[];
    _id: string;
    // tel: string;
    email: string;
    username: string;
    password: string;
    accessToken: string;
    // created_at: string;
    // updatedAt: string;
    __v: number;
}

export interface UserForAuth {
    username: string;
    email: string;
    id: string;
    accessToken: string,
}