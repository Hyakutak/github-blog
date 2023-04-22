import { CardPost } from './components/CardPost';
import { Profile } from './components/Profile';
import { SearchBar } from './components/SearchBar';
import { MainContainer, MainContainerPosts } from './styles';

export function Home() {
    return (
        <MainContainer>
            <Profile />
            <SearchBar />
            <MainContainerPosts>
                <CardPost />
                <CardPost />
                <CardPost />
                <CardPost />
                <CardPost />
                <CardPost />
            </MainContainerPosts>
        </MainContainer>
    );
}