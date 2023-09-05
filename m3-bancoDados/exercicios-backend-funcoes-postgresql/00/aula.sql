--retorna a quantidade de registros, mo count é preciso colocar um argumento (nome da coluna por exemplo)
select count(*) from usuarios where idade >= 18;

--cria uma referencia da coluna nome, com o nome nomeCompleto
select *, nome as nomeCompleto from usuarios where idade >= 18;

-- nomeia a coluna count com o nome escolhido usando o as
select count(*) as "quantidadeUsuarios" from usuarios where idade >= 18;

-- concatena duas informações com o - separando elas, o operador de concatenação é o || 
select nome || ' - ' || email as nomeEmail from usuarios;

-- outra forma de concatenar
select concat(nome, ' - ', email, ' - ', idade) as nome_email_idade from usuarios;

-- retorna a média do argumento escolhido, que deve ser numérico
select avg(idade) from usuarios;

-- arredonda para um número inteiro
select round(avg(idade)) from usuarios;

-- arredonda para um número e com 2 casas decimais.
select round(avg(idade), 2) from usuarios;

-- retorna o menor valor do argumento passado
select min(idade) from usuarios;

-- retorna o menor valor do argumento passado, quando string ele irá contar a quantidade de caracteres para comparar
select min(nome) from usuarios;

-- retorna o menor valor do argumento passado, no casa do data, retorna como mínimo a data mais antiga
select min(cadastro) from usuarios;

-- retorna o maior valor do argumento passado
select max(idade) from usuarios;

-- retorna o menor valor do argumento passado, quando string ele irá contar a quantidade de caracteres para comparar
select max(nome) from usuarios;

-- retorna o menor valor do argumento passado, no casa do data, retorna como mínimo a data mais atual
select max(cadastro) from usuarios;

-- soma os valores do argumento passado. 
select sum(idade) from usuarios;

-- operador cast :: converte tipo de dados
select idade::text from usuarios;

-- converte a string em número
select '123'::integer;

-- converte a string em número e soma 4
select '123'::integer + '4';

-- função para conversão
select cast(idade as text) from usuarios;

-- retorna a data atual
select now();

-- retorna os registros onde a data é maior que a data atual (apenas data), convertendo o campo agendamento que está em texto para data
select * from agendamentos where cast(agendamento as date) > now();

-- retorna os registros onde a data é maior que a data atual (data e hora), convertendo o campo agendamento que está em texto para data
select * from agendamentos where cast(agendamento as timestamp) > now();

-- converte para data sem hora
select cast(agendamento as date) from agendamentos;

-- converter apenas para hora
select cast(agendamento as time) from agendamentos;

-- converte para data e hora juntos
select cast(agendamento as timestamp) from agendamentos;

-- retorna a diferença entre as datas
select age('2022-03-16 12:00:00', '2025-02-15 11:32:34');

-- retorna a diferença entre a data informada com a data e hora do timestamp
select age(cast('2021-03-16 12:00:00' as timestamp));

-- retorna a diferença entre a data informada com apenas a data
select age(cast('2021-03-16 12:00:00' as date));

-- retorna o tempo que falta para o agendamento, comparando com a data atual
select *, age(cast(agendamento as timestamp)) from agendamentos where cast(agendamento as timestamp) < now();

select * from usuarios;

-- Substitui o valor nulo por um valor desejado
select coalesce(NULL, NULL, 'cenoura');

-- Substitui o valor nulo por um valor desejado
select concat(nome, ' - ', coalesce(telefone, 'Não possui telefone')) from usuarios;

--Substitui o valor nulo por um valor desejado
select id, concat(nome, ' - ', coalesce(telefone, email, 'Não possui')) from usuarios;

-- Agrupa registros que contem o mesmo argumento passado. Neste caso está retornando a quantidade de usuários por idade e também a soma delas
select idade, count(id), sum(idade) from usuarios group by idade;