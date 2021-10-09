CREATE DATABASE projeto_cube;
USE projeto_cube;

-- Criando Tabelas de Produtos e Relacionadas

CREATE TABLE produtos(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
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
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE fabricante(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  nome varchar(200),
  img_url varchar(200),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE imagens_galeria(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  produto_id int(10),
  img_url varchar(200),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categorias(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  nome varchar(200),
  img_url varchar(200),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE produto_has_categoria(
id int(10) AUTO_INCREMENT PRIMARY KEY,
produto_id int(10),
categoria_id int(10),
criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tags(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  nome varchar(200),
  img_url varchar(200),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE produto_has_tag(
id int(10) AUTO_INCREMENT PRIMARY KEY,
produto_id int(10),
tag_id int(10),
criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE variacoes(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  nome varchar(200),
  produto_id int (10),
  altura int(5),
  largura int (5),
  peso int (5),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- Criando Tabelas de Usuários e Relacionadas

CREATE TABLE usuarios(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  nome varchar(200),
  avatar varchar(200),
  sobrenome varchar(200),
  email varchar(200) UNIQUE,
  tipo_usuario_id int(10),
  nome_social varchar (150),
  cpf varchar(10) UNIQUE,
  nascimento date,
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tipo_usuario(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  tipo_usuario varchar (15),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE telefones(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  id_usuario int(10),	
  tipo_contato varchar (15),
  telefone int(11),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE enderecos(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  tipo_endereco_id int(15),
  cep int (8),
  destinatario varchar(200),
  rua varchar(200),
  numero int(15),
  cidade varchar(200),
  uf varchar(2),
  bairro varchar(200),
  id_usuario int(10),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tipos_de_endereco(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  tipo_endereco varchar(15),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Criando Tabelas de Pedidos e Relacionadas

CREATE TABLE pedidos(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  numero int(15) UNIQUE,
  quantidade_produtos int(10),
  status_id int(10),
  data_pedido date,
  meio_pagamento_id int(10),
  tipo_entrega_id int(10),
  valor_frete float(10),
  valor_produtos float(10),
  desconto varchar(15),
  cupom_id int(10),
  valor_total float(10),
  cliente_id int(10),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dados_pedido(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  id_pedido int(10),
  produto_id int(10),
  quantidade int(10),
  valor varchar(15),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE status(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  tipo_b varchar (150),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE meios_de_entrega(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  nome varchar(200),
  img_url varchar(200),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE meios_de_pagamento(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  nome varchar (150),
  img_url varchar(200),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cupons(
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  codigo varchar (150) UNIQUE,
  status varchar(200),
  valor_desconto varchar(200),
  data_inicial datetime,
  data_final datetime,
  limite_uso int(15),
  usos int(15),
  tipo_desconto int(15),
  criado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Adicionando Foreign Keys Necessárias

ALTER TABLE produtos
ADD FOREIGN KEY (fabricante_id) REFERENCES fabricante(id);
 
ALTER TABLE imagens_galeria
ADD  FOREIGN KEY (produto_id) REFERENCES produtos(id);

ALTER TABLE produto_has_categoria
ADD FOREIGN KEY (produto_id) REFERENCES produtos(id),
ADD FOREIGN KEY (categoria_id) REFERENCES categorias(id);

ALTER TABLE produto_has_tag
ADD FOREIGN KEY (produto_id) REFERENCES produtos(id),
ADD FOREIGN KEY (tag_id) REFERENCES tags(id);

ALTER TABLE variacoes
ADD FOREIGN KEY (produto_id) REFERENCES produtos(id);

ALTER TABLE usuarios
ADD FOREIGN KEY (tipo_usuario_id) REFERENCES tipo_usuario(id);

ALTER TABLE  telefones
ADD FOREIGN KEY (id_usuario) REFERENCES usuarios(id);

ALTER TABLE enderecos
ADD FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
ADD FOREIGN KEY (tipo_endereco_id) REFERENCES tipos_de_endereco(id);

ALTER TABLE pedidos
ADD FOREIGN KEY (status_id) REFERENCES status(id),
ADD FOREIGN KEY (cupom_id) REFERENCES cupons(id),
ADD FOREIGN KEY (cliente_id) REFERENCES usuarios(id),
ADD FOREIGN KEY (meio_pagamento_id) REFERENCES meios_de_pagamento(id),
ADD FOREIGN KEY (tipo_entrega_id) REFERENCES meios_de_entrega(id);

ALTER TABLE  dados_pedido
ADD FOREIGN KEY (id_pedido) REFERENCES pedidos(id),
ADD FOREIGN KEY (produto_id) REFERENCES produtos(id);
