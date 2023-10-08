create database modelagem_dados;

create table editoras (
	id serial unique primary key,
	nome text not null,
	cnpj text unique,
	data_cadastro timestamp default now()
);

insert into editoras (nome, cnpj) values ('Cubos Academy', '00112233445567');

create table livros (
  isbn integer unique primary key,
  editora_id integer references editoras (id), --relação com o id da tabela editoras (chave estrangeira)
  -- foreign key editora_id references editoras(id) - 2° possibilidade para criar chave estrangeira
  titulo text not null,
  data_publicacao date not null
);

insert into livros (isbn, editora_id, titulo, data_publicacao) values (123456, 1, 'Minha vida epica', '2023-09-11');
insert into livros (isbn, editora_id, titulo, data_publicacao) values (654321, 1, 'Como fazer minha vida épica', '2023-09-12');

create table enderecos (
	id serial unique primary key,
  editora_id integer references editoras (id),
  cep text not null,
  rua text,
  bairro text,
  cidade text,
  estado char(2),
  pais text
);

insert into enderecos (editora_id, cep) values (1, '13185185');

create table categorias (
  id serial unique primary key,
  nome text not null
);

create table livro_categoria (
	livro_isbn integer references livros (isbn),
  categoria_id integer references categorias (id)
);

insert into categorias (nome) values ('Tecnologia'), ('Programação'), ('Node.js');

insert into livro_categoria (livro_isbn, categoria_id) values (123456, 2);

create table comentarios (
  id serial primary key,
  descricao text not null,
  comentarios_id integer references comentarios(id),
	livro_isbn integer references livros(isbn)
);

insert into comentarios (descricao, livro_isbn) values ('Teste de comentário do livro', 123456);
insert into comentarios (comentarios_id, descricao) values (1, 'Seu teste deu certo');

alter table categorias add column descricao text;

alter table categorias drop column descricao;

alter table categorias add column descricao text;

alter table categorias alter column descricao type varchar(100);

create table telefones (
	id serial unique primary key,
  editora_id integer,
  telefone text
);

alter table telefones add constraint fk_telefones_editoras_id foreign key (editora_id) references editoras(id);