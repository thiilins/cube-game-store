create database cube_game_store;

use cube_game_store;
-- Criando Tabelas de Produtos e Relacionadas

create table produtos(
  id int(10) auto_increment primary key,
  nome varchar(200),
  SKU varchar(200),
  fabricante_id int(10),
  preco_regular float(15),
  preco_promocional float(15),
  descricao_curta varchar(200),
  descricao longtext,
  altura_embalagem int(5),
  largura int(5),
  peso int(5),
  altura_produto int(5),
  largura_produto int(5),
  imagem_destacada varchar(200),
  quantidade int(10),
  vendas int(100),
  ativo tinyint(1),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);
 
create table fabricante(
  id int(10) auto_increment primary key,
  nome varchar(200),
  img_url varchar(200),
  ativo tinyint(1),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);

create table imagens_galeria(
  id int(10) auto_increment primary key,
  produto_id int(10),
  img_url varchar(200),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);


create table categorias(
  id int(10) auto_increment primary key,
  nome varchar(200),
  img_url varchar(200),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on update current_timestamp()
 );

create table produto_has_categoria(
id int(10) auto_increment primary key,
produto_id int(10),
categoria_id int(10),
createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);



create table variacoes(
  id int(10) auto_increment primary key,
  nome varchar(200),
  produto_id int (10),
  altura int(5),
  largura int (5),
  peso int (5),
  preco_regular float(15),
  preco_promocional float(15),
  vendas int(100),
  ativo tinyint(1),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);

-- Criando Tabelas de Usuários e Relacionadas

create table usuarios(
  id int(10) auto_increment primary key,
  nome varchar(200),
  avatar varchar(200),
  sobrenome varchar(200),
  email varchar(200) unique,
  senha varchar(256),
  tipo_usuario int(10),
  nome_social varchar (150),
  cpf varchar(10) unique,
  nascimento date, 
  pedidos int(200),
  ativo tinyint(1),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);


create table telefones(
  id int(10) auto_increment primary key,
  usuario_id int(10),	
  tipo_contato varchar (15),
  telefone int(11),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);


create table enderecos(
  id int(10) auto_increment primary key,
  tipo_endereco_id int(15),
  cep int (8),
  destinatario varchar(200),
  rua varchar(200),
  numero int(15),
  cidade varchar(200),
  uf varchar(2),
  bairro varchar(200),
  usuario_id int(10),
  ativo tinyint(1),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);

create table tipos_de_endereco(
  id int(10) auto_increment primary key,
  tipo_endereco varchar(15),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);
-- Criando Tabelas de Pedidos e Relacionadas

create table pedidos(
  id int(10) auto_increment primary key,
  quantidade_produtos int(10),
  status_id int(10),
  data_pedido date,
  meio_pagamento_id int(10),
  meio_entrega_id int(10),
  valor_frete float(10),
  valor_produtos float(10),
  desconto varchar(15),
  cupom_id int(10),
  valor_total float(10),
  usuario_id int(10),
  ativo tinyint(1),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);


create table dados_pedido(
  id int(10) auto_increment primary key,
  pedido_id int(10),
  usuario_id int(10),
  produto_id int(10),
  variacao_id int(10),
  quantidade int(10),
  valor varchar(15),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);


create table status(
  id int(10) auto_increment primary key,
  nome varchar (150),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);

create table meios_de_entrega(
  id int(10) auto_increment primary key,
  nome varchar(200),
  img_url varchar(200),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
); 

create table meios_de_pagamento(
  id int(10) auto_increment primary key,
  nome varchar (150),
  img_url varchar(200),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);

create table cupons(
  id int(10) auto_increment primary key,
  codigo varchar (150) unique,
  status varchar(200),
  valor_desconto varchar(200),
  data_inicial datetime,
  data_final datetime,
  limite_uso int(15),
  usos int(15),
  ativo tinyint(1),
  tipo_desconto int(15),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);
-- Adicionando Foreign Keys Necessárias

alter table produtos
add foreign key (fabricante_id) references fabricante(id) ON DELETE CASCADE;

alter table imagens_galeria
add foreign key (produto_id) references produtos(id) ON DELETE CASCADE;


alter table produto_has_categoria
add foreign key (produto_id) references produtos(id) ON DELETE CASCADE,
add foreign key (categoria_id) references categorias(id) ON DELETE CASCADE;

alter table variacoes
add foreign key (produto_id) references produtos(id) ON DELETE CASCADE;

alter table telefones
add foreign key (usuario_id) references usuarios(id) ON DELETE CASCADE;

alter table enderecos
add foreign key (tipo_endereco_id) references tipos_de_endereco(id) ON DELETE CASCADE,
add foreign key (usuario_id) references usuarios(id) ON DELETE CASCADE;

alter table pedidos
add foreign key (status_id) references status(id) ON DELETE CASCADE,
add foreign key (meio_pagamento_id) references meios_de_pagamento(id) ON DELETE CASCADE,
add foreign key (meio_entrega_id) references meios_de_entrega(id) ON DELETE CASCADE,
add foreign key (cupom_id) references cupons(id) ON DELETE CASCADE,
add foreign key (usuario_id) references usuarios(id) ON DELETE CASCADE;


alter table dados_pedido
add foreign key (pedido_id) references pedidos(id) ON DELETE CASCADE,
add foreign key (usuario_id) references usuarios(id) ON DELETE CASCADE,
add foreign key (produto_id) references produtos(id) ON DELETE CASCADE,
add foreign key (variacao_id) references variacoes(id) ON DELETE CASCADE;

