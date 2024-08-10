import { Container, Spinner } from "./styled";

export default function Loading({width,texto}) {
    return (
        <Container>
            <Spinner width={width} />
            {texto && <h2>Carregando...</h2>}
        </Container>
    );
}
