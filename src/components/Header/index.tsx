import Logo from '../../assets/Logo.svg';
import { HeaderContainer } from './styles';

export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} alt='Github Blog Logo' />
        </HeaderContainer>
    );
}