import { BoxIcon, BoxTop, Container, HeaderLogo, HeaderTitulo } from "./styled";
import { ImExit } from 'react-icons/im';
import logoImg from '../../../../image/logo.png';
import { useNavigate } from "react-router-dom";

export default function HeaderComponente() {
    const navigate = useNavigate();
    const desconectarUsuario = () => navigate('/');
    return (
        <Container>
            <BoxTop>
                    <HeaderLogo>
                        <img src={logoImg} alt="Logo" width={50} />
                    </HeaderLogo>
                    <HeaderTitulo>
                        <h2>Tabela de produtos</h2>
                        <button onClick={desconectarUsuario}>
                            <BoxIcon>
                                <ImExit color="#005eff" scale={30} />
                                <span>Sair</span>
                            </BoxIcon>
                        </button>
                    </HeaderTitulo>
                </BoxTop>
        </Container>
    );
}