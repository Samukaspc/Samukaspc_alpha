import { Container, Spinner } from "./styled";

export default function Loading() {
    return (
        <Container>
            <Spinner />
            <h2>Carregando...</h2>
        </Container>
    );
}
