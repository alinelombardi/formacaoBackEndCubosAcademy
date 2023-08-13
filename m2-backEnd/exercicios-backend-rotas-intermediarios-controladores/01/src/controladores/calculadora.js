

const soma = (request, response) => {
    const { num1, num2 } = request.query;

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return response.send(`${Number(num1) + Number(num2)}`)
    } 
    return response.send('Números inválidos');   
};

const subtrai = (request, response) => {
    const { num1, num2 } = request.query;
    if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return response.send(`${Number(num1) - Number(num2)}`)
    } 
    return response.send('Números inválidos');   
};


const multiplica = (request, response) => {
    const { num1, num2 } = request.query;    

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return response.send(`${Number(num1) * Number(num2)}`)
    } 
    return response.send('Números inválidos');   
};

const dividi = (request, response) => {
    const { num1, num2 } = request.query;

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return response.send(`${Number(num1) / Number(num2)}`)
    } 
    return response.send('Números inválidos');   
};

module.exports = { soma, subtrai, multiplica, dividi };