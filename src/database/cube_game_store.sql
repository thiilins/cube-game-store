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
  descricao_curta varchar(300),
  descricao longtext,
  altura_embalagem float(10),
  largura_embalagem float(10),
  comprimento_embalagem float(10),
  peso_embalagem float(10),
  altura_produto float(10),
  largura_produto float(10),
  peso_produto float(10),
  comprimento_produto float(10),
  imagem_destacada varchar(300),
  estoque int(10),
  vendas int(10),
  ativo tinyint(1),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);
 
create table fabricantes(
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
  img_url varchar(200),
  produto_id int (10),
  altura float(10),
  largura float(10),
  comprimento float(10),
  peso float(10),
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
  sobrenome varchar(200),
  nome_social varchar (200),
  avatar varchar(200),
  email varchar(200) unique,
  senha varchar(256),
  tipo_usuario int(1),
  cpf int(11) unique,
  nascimento date, 
  quant_pedidos int(20),
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
  usuario_id int(10),
  cep int (8),
  destinatario varchar(200),
  rua varchar(200),
  numero int(5),
  cidade varchar(100),
  uf varchar(2),
  bairro varchar(200),
  ativo tinyint(1),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);

create table tipos_de_endereco(
  id int(10) auto_increment primary key,
  tipo_endereco varchar(100),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);
-- Criando Tabelas de Pedidos e Relacionadas

create table pedidos(
  id int(10) auto_increment primary key,
  usuario_id int(10),
  status_id int(10),  
  data_pedido datetime,
  quantidade_produtos int(10),
  endereco_id int(10),
  meio_pagamento_id int(10),
  meio_entrega_id int(10),
  valor_frete float(10),
  valor_produtos float(10),
  desconto float(10),
  cupom_id int(10),
  valor_total float(10),
  ativo tinyint(1),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);


create table itens_pedido(
  id int(10) auto_increment primary key,
  pedido_id int(10),
  usuario_id int(10),
  produto_id int(10),
  variacao_id int(10),
  valor_unitario float(10),
  quantidade int(10),
  desconto float(10),
  valor_total float(10),
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
  ativo tinyint(1),
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
  codigo varchar (256) unique,
  status varchar(200),
  valor_desconto int(15),
  tipo_desconto int(15),
  data_inicial datetime,
  data_final datetime,
  limite_uso int(15),
  quant_usos int(15),
  ativo tinyint(1),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);
-- Adicionando Foreign Keys Necessárias

alter table produtos
add foreign key (fabricante_id) references fabricantes(id) ON DELETE CASCADE;

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
add foreign key (endereco_id) references enderecos(id) ON DELETE CASCADE,
add foreign key (cupom_id) references cupons(id) ON DELETE CASCADE,
add foreign key (usuario_id) references usuarios(id) ON DELETE CASCADE;


alter table itens_pedido
add foreign key (pedido_id) references pedidos(id) ON DELETE CASCADE,
add foreign key (usuario_id) references usuarios(id) ON DELETE CASCADE,
add foreign key (produto_id) references produtos(id) ON DELETE CASCADE,
add foreign key (variacao_id) references variacoes(id) ON DELETE CASCADE;

