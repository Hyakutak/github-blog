import { ChangeEvent, useContext, useState } from 'react';
import { PostsContext } from '../../../../contexts/PostsContext';
import { SearchBarContainer } from './styles';
import { api } from '../../../../lib/axios';
import { IPost } from '../../../../interfaces/IPost';


export function SearchBar() {
    const { totalPublications, repo, username, searchPosts } = useContext(PostsContext);
    const [ newSearchPosts, setNewSearchPosts ] = useState<IPost[]>([]);

    async function fetchSearchPost(data: string) {
        const response = await api.get(`search/issues?q=${data}repo:${username}/${repo}`);
        setNewSearchPosts(response.data.items);
        searchPosts(newSearchPosts);
    }

    function handleChangeSearchPost(event: ChangeEvent<HTMLInputElement>) {
        const queryString = encodeURIComponent(event.target.value);
        fetchSearchPost(queryString);
    }

    return (
        <SearchBarContainer>
            <header>
                <h5>Publicações</h5>
                <span>{ totalPublications } publicações</span>
            </header>
            <input 
                type='text'
                placeholder="Buscar Conteudo"
                onChange={handleChangeSearchPost} />
        </SearchBarContainer>
    );
}