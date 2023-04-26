import ReactMarkdown from 'react-markdown';
import { useLocation, Link } from 'react-router-dom';
import { FormatterDate } from '../../utils/Formatter';
import { IPost } from '../../interfaces/IPost';
import ArrowLeft from '../../assets/icons/chevron-left-solid.svg';
import ArrowUpRight from '../../assets/icons/arrow-up-right-from-square-solid.svg';
import GithubLogo from '../../assets/icons/github-brands.svg';
import Calendar from '../../assets/icons/calendar-day-solid.svg';
import CommentsIcon from '../../assets/icons/comment-solid.svg';
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
                        <img src={ArrowLeft} />
                        Voltar
                    </Link>
                    <Link to={post.html_url}>
                        Ver no Github
                        <img src={ArrowUpRight} />
                    </Link>
                </nav>
                <h1>{ post.title }</h1>
                <section>
                    <div>
                        <img src={GithubLogo} />
                        { post.user.login }
                    </div>
                    <div>
                        <img src={Calendar} />
                        { FormatterDate(post.created_at) }
                    </div>
                    <div>
                        <img src={CommentsIcon} />
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