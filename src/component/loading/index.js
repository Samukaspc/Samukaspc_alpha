import { Spinner } from "./styled";

export default function Loading() {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <Spinner />
            <h2>Carregando...</h2>
        </div>
    );
}
