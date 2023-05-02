import { PostContainer } from './styles';
import { Link } from 'react-router-dom';
import { FormatterDate } from '../../../../utils/Formatter';

interface PropsCard {
    id: number,
    title: string,
    created_at: string,
    body: string,
    number: number
}

export function CardPost({ ...props } :PropsCard) {
    return (
        <PostContainer>
            <Link to={`/posts/${props.number}`}>
                <header>
                    <h3>{ props.title }</h3>
                    <span>{ FormatterDate(props.created_at) }</span>
                </header>
                <p>{ props.body }</p>
            </Link>
        </PostContainer>
    );
}