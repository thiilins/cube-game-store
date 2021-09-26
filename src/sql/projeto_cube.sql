CREATE DATABASE projeto_cube;
USE projeto_cube;
CREATE TABLE produtos(
  id int (10) AUTO_INCREMENT NOT NULL,
  nome varchar(200),
  SKU varchar(200),
  fabricante_id int(10),
  preco_regular int(15),
  preco_promocional int(15),
  descricao_curta varchar(200),
  descricao longtext,
  altura_embalagem int(5),
  largura int(5),
  peso int(5),
  altura_produto int(5),
  largura_produto int(5),
  imagem_destacada varchar(200),
  PRIMARY KEY(id)
);
CREATE TABLE imagens_galeria(
  id int(10) AUTO_INCREMENT NOT NULL,
  produto_id int(10),
  img_url varchar(200),
  PRIMARY KEY(id)
);
CREATE TABLE fabricante(
  id int(10) AUTO_INCREMENT NOT NULL,
  nome varchar(200),
  img_url varchar(200),
  PRIMARY KEY(id)
);
CREATE TABLE categoria(
  id int(10)  AUTO_INCREMENT NOT NULL,
  nome varchar(200),
  img_url varchar(200),
  PRIMARY KEY(id)
);
CREATE TABLE tags(
  id int(10) AUTO_INCREMENT NOT NULL,
  nome varchar(200),
  img_url varchar(200),
  PRIMARY KEY(id)
);
CREATE TABLE variacoes(
  id int(10)  AUTO_INCREMENT NOT NULL,
  nome varchar(200),
  altura int(5),
  produto_id int (10),
  largura int (5),
  peso int (5),
  PRIMARY KEY(id)
);
CREATE TABLE usuarios(
  id int(10) AUTO_INCREMENT NOT NULL,
  nome varchar(200),
  sobrenome varchar(200),
  email varchar(200) UNIQUE,
  tipo_usuario int(10),
  nome_social varchar (150),
  cpf int (10) UNIQUE,
  nascimento date,
  PRIMARY KEY(id)
);
CREATE TABLE pedidos(
  id int(10)  AUTO_INCREMENT NOT NULL,
  numero int(15) UNIQUE,
  status_id int(10),
  data_pedido date,
  valor_frete varchar (15),
  valor_produtos varchar(15),
  desconto varchar(15),
  cupom_id int(10),
  valor_total varchar(15),
  cliente_id int(10),
  PRIMARY KEY(id)
);
CREATE TABLE telefones(
  id int(10)  AUTO_INCREMENT NOT NULL,
  id_usuario int(10),	
  tipo_contato varchar (15),
  telefone int(11),
  PRIMARY KEY(id)
);
CREATE TABLE enderecos(
  id int(10)  AUTO_INCREMENT NOT NULL,
  tipo_endereco varchar (15),
  cep int (8),
  destinatario varchar(200),
  rua varchar(200),
  numero int(15),
  cidade varchar(200),
  uf varchar(2),
  bairro varchar(200),
  id_usuario int(10),
  PRIMARY KEY(id)
);
CREATE TABLE meios_de_entrega(
  id int(10) AUTO_INCREMENT NOT NULL,
  nome varchar(200),
  img_url varchar(200),
  PRIMARY KEY(id)
);
CREATE TABLE tipos_enderecos(
  id int(10) AUTO_INCREMENT NOT NULL,
  tipo_endereco varchar (15),
  PRIMARY KEY(id)
);
CREATE TABLE tipo_usuario(
  id int(10)  AUTO_INCREMENT NOT NULL,
  tipo_usuario varchar (15),
  PRIMARY KEY(id)
);
CREATE TABLE status(
  id int(10)  AUTO_INCREMENT NOT NULL,
  tipo_b varchar (150),
  PRIMARY KEY(id)
);
CREATE TABLE cupons(
  id int(10) AUTO_INCREMENT NOT NULL,
  codigo varchar (150) UNIQUE,
  status varchar(200),
  valor_desconto varchar(200),
  data_inicial datetime,
  data_final datetime,
  limite_uso int(15),
  usos int(15),
  tipo_desconto int(15),
  PRIMARY KEY(id)
);
CREATE TABLE meios_de_pagamentos(
  id int(10) AUTO_INCREMENT NOT NULL,
  nome varchar (150),
  img_url varchar(200),
  PRIMARY KEY(id)
);
CREATE TABLE dados_pedido(
  id int(10)  AUTO_INCREMENT NOT NULL,
  id_pedido int(10),
  produto_id int(10),
  valor varchar(15),
  PRIMARY KEY(id)
);



ALTER TABLE
  produtos
ADD
  FOREIGN KEY (fabricante_id) REFERENCES fabricante(id);
ALTER TABLE
  imagens_galeria
ADD
  FOREIGN KEY (produto_id) REFERENCES produtos(id);
ALTER TABLE
  variacoes
ADD
  FOREIGN KEY (produto_id) REFERENCES produtos(id);
ALTER TABLE
  usuarios
ADD
  FOREIGN KEY (tipo_usuario) REFERENCES tipo_usuario(id);
ALTER TABLE
  telefones
ADD
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id);
ALTER TABLE
  enderecos
ADD
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id);
ALTER TABLE
  telefones
ADD
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id);
ALTER TABLE
  pedidos
ADD
  FOREIGN KEY (status_id) REFERENCES status(id),
ADD
  FOREIGN KEY (cupom_id) REFERENCES cupons(id),
ADD
  FOREIGN KEY (cliente_id) REFERENCES usuarios(id);
ALTER TABLE
  dados_pedido
ADD
  FOREIGN KEY (id_pedido) REFERENCES pedidos(id),
ADD
  FOREIGN KEY (produto_id) REFERENCES produtos(id);
set
  FOREIGN_KEY_CHECKS = 1;