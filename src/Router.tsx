import { Routes, Route, useParams } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { Post } from './pages/Post';
import { useContext } from 'react';
import { PostsContext } from './contexts/PostsContext';

export function Router() {
    const { reposUrl } = useContext(PostsContext);

    const findPost = (id: number) => reposUrl.find(post => 
        post.id === id
    );

    const SinglePost = () => {
        const { id } = useParams();
        return <Post />
    }

    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path="posts/:id" element={<SinglePost />} />
            </Route>
        </Routes>
    );
}