import { SearchBarContainer } from './styles';

export function SearchBar() {
    return (
        <SearchBarContainer>
            <header>
                <h5>Publicações</h5>
                <span>6 publicações</span>
            </header>
            <input placeholder="Buscar Conteudo" />
        </SearchBarContainer>
    );
}