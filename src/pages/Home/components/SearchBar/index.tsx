import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PostsContext } from '../../../../contexts/PostsContext';
import { api } from '../../../../lib/axios';
import { IPost } from '../../../../interfaces/IPost';
import { SearchBarContainer } from './styles';

export function SearchBar() {
    const { totalPublications, repo, username, searchPosts } = useContext(PostsContext);

    const SearchFormSchema = z.object({
        query: z.string(),
    });

    type SearchFormInput = z.infer<typeof SearchFormSchema>

    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(SearchFormSchema),
    });

    async function fetchSearchPost(data: string) {
        const response = await api.get(`search/issues?q=${data}repo:${username}/${repo}`);
        const posts = response.data.items;
        const newArray:IPost[] = [];
        posts.forEach((post: any) => {
            const {title, id, body, comments, created_at, html_url, user: {login}, number} = post;
            newArray.push({title, id, body, comments, created_at, html_url, login: login, number});
        });
        searchPosts(newArray);
    }

    function handleChangeSearchPost(data: SearchFormInput) {
        fetchSearchPost(data.query);
    }

    return (
        <SearchBarContainer>
            <header>
                <h5>Publicações</h5>
                <span>{ totalPublications } publicações</span>
            </header>
            <form onChange={handleSubmit(handleChangeSearchPost)}>
                <input 
                 type='text'
                 placeholder="Buscar Conteudo"
                 {...register('query')} />
            </form>
        </SearchBarContainer>
    );
}