import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PostsContext } from '../../contexts/PostsContext';
import { api } from '../../lib/axios';
import ReactMarkdown from 'react-markdown';
import { FormatterDate } from '../../utils/Formatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, 
         faCalendarDay, 
         faChevronLeft, 
         faComment } from '@fortawesome/free-solid-svg-icons';
import { PostContainer,
         PostHeader,
         PostBody } from './styles';

interface Post {
    title: string,
    body: string,
    comments: number,
    created_at: string,
    html_url: string,
    login: string
}

export function Post() {

    const [post, setPost] = useState<Post>(
        {
            title: '',
            body: '',
            comments: 0,
            created_at: '',
            html_url: '',
            login: ''
        }
    );
    const { username, repo } = useContext(PostsContext);
    const {id} = useParams();

    async function fetchPost() {
        const response = await api.get(`/repos/${username}/${repo}/issues/${id}`);
        const {html_url, created_at, comments, title, user: {login}, body} = response.data;
        const publishedDateRelativeToNow = FormatterDate(created_at);
        setPost({
            title,
            body,
            comments,
            created_at: publishedDateRelativeToNow,
            html_url,
            login: login
        });
    }

    useEffect(() => {
        fetchPost();
    }, []);
    
    return (
        <PostContainer>
            <PostHeader>
                <nav>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faChevronLeft} color='#3294F8' size='xs' />
                        Voltar
                    </Link>
                    <Link to={post.html_url}>
                        Ver no Github
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='#3294F8' size='xs'/>
                    </Link>
                </nav>
                <h1>{ post.title }</h1>
                <section>
                    <div>
                        <FontAwesomeIcon icon={faGithub} color='#3A536B' size='lg'/>
                        { post.login }
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendarDay} color='#3A536B' size='lg' />
                        { post.created_at }
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faComment} color='#3A536B' size='lg' />
                        { post.comments ? `${post.comments} comentários` : 'Nenhum comentário' }
                    </div>
                </section>
            </PostHeader>
            <PostBody>
                <ReactMarkdown>{ post.body }</ReactMarkdown>
            </PostBody>
        </PostContainer>
    );
}