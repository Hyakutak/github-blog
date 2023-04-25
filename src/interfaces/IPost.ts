export interface IPost {
    title: string;
    id: number;
    body: string;
    comments: number;
    created_at: string;
    html_url: string;
    user: {
        login: string
    }
}