create database eventos_db;

use eventos_db;

create table eventos(
	id_evento int primary key auto_increment,
    titulo varchar(255) not null,
    cidade varchar(200) not null, 
    estado varchar(200) not null,
    data_evento date not null,
    vagas int not null
);

INSERT INTO eventos (titulo, cidade, estado, data_evento, vagas) VALUES 
('Festival de Música', 'São Paulo', 'SP', '2025-02-15', 500),
('Conferência de Tecnologia', 'Rio de Janeiro', 'RJ', '2025-03-10', 200),
('Feira de Livros', 'Belo Horizonte', 'MG', '2025-04-20', 300),
('Exposição de Arte', 'Curitiba', 'PR', '2025-05-05', 150),
('Maratona de Programação', 'Florianópolis', 'SC', '2025-06-12', 100),
('Encontro de Negócios', 'Brasília', 'DF', '2025-07-08', 250),
('Workshop de Fotografia', 'Salvador', 'BA', '2025-08-15', 80),
('Seminário de Educação', 'Recife', 'PE', '2025-09-01', 400),
('Congresso de Medicina', 'Porto Alegre', 'RS', '2025-10-10', 500),
('Hackathon Universitário', 'Campinas', 'SP', '2025-11-22', 120),
('Fórum de Sustentabilidade', 'Manaus', 'AM', '2025-12-05', 300),
('Semana Cultural', 'Fortaleza', 'CE', '2025-02-20', 350),
('Festival de Cinema', 'Belém', 'PA', '2025-03-30', 200),
('Evento de Esportes', 'Natal', 'RN', '2025-04-15', 600),
('Feira de Ciência', 'Aracaju', 'SE', '2025-05-25', 250),
('Palestra Motivacional', 'João Pessoa', 'PB', '2025-06-18', 150),
('Festival de Gastronomia', 'Maceió', 'AL', '2025-07-30', 500),
('Concurso de Robótica', 'Vitória', 'ES', '2025-08-10', 100),
('Evento de Startups', 'São Luís', 'MA', '2025-09-20', 180),
('Encontro de Carros Clássicos', 'Goiânia', 'GO', '2025-10-15', 300),
('Feira de Artesanato', 'Cuiabá', 'MT', '2025-11-01', 400),
('Mostra de Teatro', 'Campo Grande', 'MS', '2025-12-18', 200),
('Corrida Solidária', 'Teresina', 'PI', '2025-02-14', 500),
('Congresso de Engenharia', 'Macapá', 'AP', '2025-03-25', 220),
('Festival de Dança', 'Rio Branco', 'AC', '2025-04-05', 300);

create table inscricoes(
	id int primary key auto_increment,
    nome varchar(200) not null,
    cpf varchar(255) not null,
    id_evento int not null,
    token varchar(255) not null,
    is_confirmed bool default FALSE,
    foreign key(id_evento) references eventos(id_evento)
);

delimiter //

create trigger atualizar_vagas
after insert on inscrições
for each row
begin 
	if (select vagas from  eventos where id_evento = new.id_evento) > 0 then
		update eventos set vagas = vagas - 1 where id_evento = id_evento.new;
	else
		signal sqlstate '45000'
        set message_text = 'não há vagas disponíveis';
	end if;
end//

delimiter ;
