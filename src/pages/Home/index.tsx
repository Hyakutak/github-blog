import { useContext } from 'react';
import { PostsContext } from '../../contexts/PostsContext';
import { CardPost } from './components/CardPost';
import { Profile } from './components/Profile';
import { SearchBar } from './components/SearchBar';
import { MainContainer, MainContainerPosts } from './styles';
import { IPost } from '../../interfaces/IPost';

export function Home() {
    const { reposUrl } = useContext(PostsContext);

    const Posts = reposUrl ? reposUrl.map((post: IPost) => (<CardPost key={post.id} {...post} />)) : <></>;

    return (
        <MainContainer>
            <Profile />
            <SearchBar />
            <MainContainerPosts>
                { Posts }
            </MainContainerPosts>
        </MainContainer>
    );
}