export const formatPreco = (event) => {
    const input = event.target;
    let value = parseFloat(input.value.replace(',', '.'));
    if (!isNaN(value)) {
        input.value = value.toFixed(2).replace('.', ',');
    }
};
