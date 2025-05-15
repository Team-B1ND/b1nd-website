type PostStatus = 'ALLOWED' | 'PENDING';

export interface BlogParam {
    post_title: string;
    post_content: string;
}

export interface Blog {
    post_id: number;
    post_title: string;
    post_content: string;
    post_author: string;
    post_created_at: string;
    post_status: PostStatus
}

export interface BlogResponse {
    totalPage:number;
    data:Blog[]
}