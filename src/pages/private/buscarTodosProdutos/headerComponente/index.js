import { BoxIcon, BoxTop, Container, HeaderLogo, HeaderTitulo } from "./styled";
import { ImExit } from 'react-icons/im';
import logoImg from '../../../../image/logo.png';
import { useNavigate } from "react-router-dom";
import Button from "../../../../component/button";

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
                        <Button cor={'#fff'} corSecundario={'#add8e6'} width={'80px'} onClick={desconectarUsuario} >
                            <BoxIcon>
                                <ImExit color="#5d46e2" />
                                <span>Sair</span>
                            </BoxIcon>
                        </Button>
                    </HeaderTitulo>
                </BoxTop>
        </Container>
    );
}
