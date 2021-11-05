create database aula_banco_de_dados;
use aula_banco_de_dados;

create table turmas(
	id int (10) primary key,
	duracao int (10),
	ano_inicio int (10),
	semestre tinyint(1),
	curso_id int(10),
	professor_id int(10)
);

create table professor(
	id int (10) primary key,
	nome varchar(200),
	sobrenome varchar (200)
);

create table cursos (
	id int (10) primary key,
	nome varchar(200),
	area_id int (10)
);

create table areas(
	id int (10) primary key,
	tipo varchar(200),
	ano_matricula int(11)
);

create table alunos(
	id int (10) primary key,
	nome varchar(200),
	sobrenome varchar (200),
	ano_matricula int(11)
);
create table alunos_has_turmas(
id int(10),
alunos_id int(10),
turma_id int(10),
numero_faltas int(10)
);


alter table turmas 
add foreign key (curso_id) references cursos(id),
add foreign key (professor_id) references professor(id);

alter table cursos
add foreign key (area_id) references areas(id);

alter table alunos_has_turmas 
add foreign key (turma_id) references turmas(id),
add foreign key (alunos_id) references alunos(id);

set foreign_key_checks = 0;

alter table alunos modify column id int(10) auto_increment not null;
alter table turmas modify column id int(10) auto_increment not null;
alter table areas modify column id int(10) auto_increment not null;
alter table cursos modify column id int(10) auto_increment not null;
alter table professor modify column id int(10) auto_increment not null;
alter table alunos_has_turmas column id int(10) auto_increment not null;

set foreign_key_checks = 1;
