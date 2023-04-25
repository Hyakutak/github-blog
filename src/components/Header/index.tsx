import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { HeaderContainer } from './styles';

export function Header() {
    return (
        <HeaderContainer>
            <Link to='/'>
                <img src={Logo} alt='Github Blog Logo' />
            </Link>
        </HeaderContainer>
    );
}