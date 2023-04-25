import { useContext } from 'react';
import { PostsContext } from '../../../../contexts/PostsContext';
import { SearchBarContainer } from './styles';

export function SearchBar() {
    const { totalPublications } = useContext(PostsContext);

    return (
        <SearchBarContainer>
            <header>
                <h5>Publicações</h5>
                <span>{ totalPublications } publicações</span>
            </header>
            <input placeholder="Buscar Conteudo" />
        </SearchBarContainer>
    );
}