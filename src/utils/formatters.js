export const formatPhone = (value) => {
    let numbers = value.replace(/\D/g, '');
    if (numbers.length > 10) {
        numbers = numbers.substring(0, 11); 
    }
    if (numbers.length > 6) {
        numbers = numbers.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3');
    } else if (numbers.length > 2) {
        numbers = numbers.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else {
        numbers = numbers.replace(/^(\d{0,2})$/, '($1');
    }
    return numbers;
};

export const formatTaxNumber = (value) => {
    let numbers = value.replace(/\D/g, '');
    if (numbers.length > 11) {
        numbers = numbers.substring(0, 11);
    }
    if (numbers.length > 9) {
        numbers = numbers.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2})$/, '$1.$2.$3-$4');
    } else if (numbers.length > 6) {
        numbers = numbers.replace(/^(\d{3})(\d{3})(\d{0,3})$/, '$1.$2.$3');
    } else if (numbers.length > 3) {
        numbers = numbers.replace(/^(\d{3})(\d{0,3})$/, '$1.$2');
    } else {
        numbers = numbers.replace(/^(\d{0,3})$/, '$1');
    }
    return numbers;
};