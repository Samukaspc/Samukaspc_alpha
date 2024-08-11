import { Box, Container } from "./styled";
import { FaDollarSign } from "react-icons/fa";

export default function InputValor({ name,placeholder, type, step, width,onBlur,required,ref,id }) {
    return (
        <Container width={width} >
            <Box>
                <FaDollarSign />
            </Box>
            <input
                name={name}
                type={type}
                ref={ref}
                placeholder={placeholder}
                step={step}
                onBlur={onBlur}
                required={required}
                id={id}
            />
        </Container>
    );
}