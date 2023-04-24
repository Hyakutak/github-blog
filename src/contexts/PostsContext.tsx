import { useState, createContext, ReactNode, useEffect } from 'react';
import { PostsContextType } from '../interfaces/IPostTypes';
import { api } from '../lib/axios';

interface PostsRepos {
    name: string;
    login: string;
}

interface postsContextProviderProps {
    children: ReactNode;
}

const postEmpty: PostsContextType = {
    username: ''
}

export const PostsContext = createContext<PostsContextType>(postEmpty);

export function PostsContextProvider({ children }: postsContextProviderProps) {
    const [reposUrl, setReposUrl] = useState<string>('');
    const repo = 'github-blog';
    const username = 'hyakutak';

    async function fetchIssues() {
        const response = await api.get(`repos/${username}/${repo}/issues`);
        setReposUrl(response.data);
    }

    useEffect(() => {
        fetchIssues();
    }, []);

    return (
        <PostsContext.Provider value={{
            username
        }}>
            { children }
        </PostsContext.Provider>
    );
}