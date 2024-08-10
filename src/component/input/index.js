import { Container } from "./styled";

export default function Input({ type, name, id, placeholder, required,value,onChange,width }) {
    return (
        <Container width={width} >
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
            />
        </Container>
    );
}