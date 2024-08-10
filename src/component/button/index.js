import { BoxButton } from "./styled";

export default function Button({ children, onClick, type, width, cor }) {
    return (
        <BoxButton width={width} cor={cor} >
            <button type={type} onClick={onClick}  >
                {children}
            </button>
        </BoxButton>
    );
}