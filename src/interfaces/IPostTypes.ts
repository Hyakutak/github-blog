import { IPost } from './IPost';

export interface PostsContextType {
    username: string;
    reposUrl: IPost[];
    totalPublications: number;
    repo: string;
    searchPosts: (data: IPost[]) => void
    
}