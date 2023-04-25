import { Link } from 'react-router-dom';
import ArrowLeft from '../../../../assets/icons/chevron-left-solid.svg';
import ArrowUpRight from '../../../../assets/icons/arrow-up-right-from-square-solid.svg'

export function PostHeader() {
    return (
        <header>
            <nav>
                <Link to='/'>
                    <img src={ArrowLeft} />
                    Voltar
                </Link>
                <Link to=''>
                    Ver no Github
                    <img src={ArrowUpRight} />
                </Link>
            </nav>
        </header>
    );
}