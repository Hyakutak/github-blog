import { PostContainer } from './styles';
import { IPost } from '../../../../interfaces/IPost';
import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import { FormatterDate } from '../../../../utils/Formatter';

export function CardPost({ ...props } :IPost) {
    const newDate = new Date(props.created_at);
    const navigate = useNavigate();

    function handleClickSendPost(event: FormEvent) {
        event.preventDefault();
        navigate(`posts/${props.id}`, { state: {props}} )
    }

    return (
        <PostContainer>
            <a onClick={handleClickSendPost}>
                <header>
                    <h3>{ props.title }</h3>
                    <span>{ FormatterDate(props.created_at) }</span>
                </header>
                <p>{ props.body }</p>
            </a>
        </PostContainer>
    );
}