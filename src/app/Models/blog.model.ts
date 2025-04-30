import { Comments } from "./comments.model"
 
export interface Blog {
    blogId: number,
    title: string,
    description: string,
    userId: string
    comments: Comments[]
}