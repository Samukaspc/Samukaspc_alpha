import { Container } from "./styled";

export default function Input({ 
    type, name, id, placeholder,required,value,
    onChange,width, ref,onBlur,min,step 
    }) {
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
                ref={ref}
                onBlur={onBlur}
                min={min}
                step={step}
                />
        </Container>
    );
}

    