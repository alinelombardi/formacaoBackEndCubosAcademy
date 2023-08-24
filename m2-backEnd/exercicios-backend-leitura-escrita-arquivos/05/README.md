# Exercício 03

## Consulta CEP

Vamos criar uma API para consulta de endereços pelo CEP.

Para fonte dos dados, utilizaremos a função `buscarEndereco`, da biblioteca `utils-playground`, que pode ser baixada no **NPM**, e pode ser encontrado no link abaixo:

https://www.npmjs.com/package/utils-playground

A nossa API deverá possuir apenas um recurso **enderecos** com apenas um método **GET** que recebe como parâmetro tipo path (params) **cep** que será o número do CEP (sem pontuação, apenas números).
A requisição G**GET**ET à nossa API deverá ser realizada através do endereço `http://localhost:3000/enderecos/`

Ao receber a requisição, nossa API deverá primeiro procurar o endereço em um array de endereços do arquivo **enderecos.json** que deverá existir em nosso servidor e caso não encontre, requisitar o endereço usando a função `buscarEndereco`.

Para consultar o endereço usando a função `buscarEndereco`, devemos passar o número do CEP sem pontuação da seguinte forma:

```javascript
const endereco = buscarEndereco("12345678")
```

Quando encontrar o endereço, deveremos incluir o objeto do endereço retornado pela função no nosso array de endereços do arquivo **enderecos.json**. Ou seja, conforme formos fazendo mais chamadas, nosso arquivo vai acumulando mais endereços. Lembre-se de cuidar para que não tenhamos endereços duplicados em nossos arquivos.

Para ler e escrever no arquivo deveremos utilizar o pacote **fs** com chamadas assíncronas.

O objeto do endereço que trabalharemos terá o seguinte formato:

```json
{
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "complemento": "lado ímpar",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP",
    "ibge": "3550308",
    "gia": "1004",
    "ddd": "11",
    "siafi": "7107"
}