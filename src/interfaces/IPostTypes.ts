import { IPost } from './IPost';

export interface PostsContextType {
    username: string;
    reposUrl: IPost[];
    totalPublications: number;
}