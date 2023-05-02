import { useState, createContext, ReactNode, useEffect } from 'react';
import { PostsContextType } from '../interfaces/IPostTypes';
import { api } from '../lib/axios';
import { IPost } from '../interfaces/IPost';

interface postsContextProviderProps {
    children: ReactNode;
}

const postEmpty: PostsContextType = {
    username: '',
    reposUrl: [],
    totalPublications: 0,
    repo: '',
    searchPosts: () => {}
}

export const PostsContext = createContext<PostsContextType>(postEmpty);

export function PostsContextProvider({ children }: postsContextProviderProps) {
    const [reposUrl, setReposUrl] = useState<IPost[]>([]);
    const repo = 'github-blog';
    const username = 'hyakutak';
    const totalPublications = reposUrl.length;

    async function fetchIssues() {
        const response = await api.get(`/repos/${username}/${repo}/issues`);
        const responsePosts = response.data;
        const postsArray:IPost[] = [];
        responsePosts.forEach((post: any) => {
            const {title, id, body, comments, created_at, html_url, user: {login}, number} = post;
            postsArray.push({title, id, body, comments, created_at, html_url, login: login, number: number});
        });
        setReposUrl(postsArray);
    }

    useEffect(() => {
        fetchIssues();
    }, []);

    function searchPosts(data: IPost[]) {
        const newPosts = [...data];
        data.length >= 1 ? setReposUrl(newPosts) : fetchIssues();
    }

    return (
        <PostsContext.Provider value={{
            username,
            reposUrl,
            repo,
            totalPublications,
            searchPosts
        }}>
            { children }
        </PostsContext.Provider>
    );
}