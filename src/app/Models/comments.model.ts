import { User } from "./user.model";

export interface Comments {
    content: string,
    createdAt: Date,
    author: User
}
