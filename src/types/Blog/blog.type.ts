type PostStatus = 'ALLOWED' | 'PENDING';

export interface BlogParam {
    post_title: string;
    post_content: string;
    post_summary: string;
    poster_image?: string;
}
 
export interface Blog {
    post_id: number;
    post_title: string;
    post_content: string;
    post_author: string;
    post_created_at: string;
    post_status: PostStatus;
    post_summary:string;
    poster_image?: string | null;
}

export interface BlogResponse {
    totalPage:number;
    data:Blog[]
}