-- Excluir banco de dados aula_crud (CUIDADO)
drop database aula_crud;

-- criar banco de dados aula_crud
create database aula_crud;

-- Criação da tabela produtos

create table if not exists produtos (
	id serial primary key,
  	nome text,
  	descricao text,
  	preco integer,
  	categoria text
);

-- INSERIR
insert into produtos (nome, descricao, preco, categoria) values ('Caderno', 'Linda Camisa', 5990, 'Roupas');
insert into produtos (nome, preco, categoria) values ('Caderno', 2000, 'Material escolar');
insert into produtos (nome, descricao, preco, categoria) values ('Calça Jeans', NULL, 12900, 'Roupas'),('Bermuda', 'Bermuda longa preta', 12900, 'Roupas');

-- ALTERAR
update produtos set nome = 'Caderno de 10 materias' where id = 3;
update produtos set categoria = 'Calças', preco = 12950 where descricao is null;
update produtos set nome = 'Caderno'; -- NUNCA FAÇA ISSO (UPDATE SEM WHERE)

-- DELETAR

delete from produtos where id = 1;
delete from produtos where descricao is null;
delete from produtos; -- NUNCA FAÇA ISSO 2 (DELETE SEM WHERE)
select * from produtos;