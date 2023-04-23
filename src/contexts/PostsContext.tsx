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
    const search = 'github';

    async function fetchIssues() {
        const response = await api.get(`/search/issues/q=${search}%20repo:${username}/${repo}`);
        setReposUrl(response.data);
    }

    useEffect(() => {
        fetchIssues();
    }, []);

    console.log(reposUrl)

    return (
        <PostsContext.Provider value={{
            username
        }}>
            { children }
        </PostsContext.Provider>
    );
}