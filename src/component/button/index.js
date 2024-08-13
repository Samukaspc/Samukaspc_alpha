import { BoxButton } from "./styled";

export default function Button({ children, onClick, type, width, cor, corSecundario }) {
    return (
        <BoxButton width={width} cor={cor} corSecundario={corSecundario} >
            <button type={type} onClick={onClick}  >
                {children}
            </button>
        </BoxButton>
    );
}