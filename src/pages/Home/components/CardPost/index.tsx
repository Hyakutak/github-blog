import { PostContainer } from './styles';
import { IPost } from '../../../../interfaces/IPost';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

export function CardPost({ title, body, created_at, id } :IPost) {
    const newDate = new Date(created_at);

    return (
        <PostContainer>
            <Link to={'posts/' + id}>
                <header>
                    <h3>{ title }</h3>
                    <span>{ formatDistanceToNow(newDate, {
                        addSuffix: true,
                        locale: ptBR,
                    })}</span>
                </header>
                <p>{ body }</p>
            </Link>
        </PostContainer>
    );
}