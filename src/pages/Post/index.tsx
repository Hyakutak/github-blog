import ReactMarkdown from 'react-markdown';
import { useLocation, Link } from 'react-router-dom';
import { FormatterDate } from '../../utils/Formatter';
import { IPost } from '../../interfaces/IPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, 
         faCalendarDay, 
         faChevronLeft, 
         faComment } from '@fortawesome/free-solid-svg-icons';
import { PostContainer,
         PostHeader,
         PostBody } from './styles';


export function Post() {
    const location = useLocation();
    const post:IPost = location.state?.props;
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
                        { post.user.login }
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendarDay} color='#3A536B' size='lg' />
                        { FormatterDate(post.created_at) }
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