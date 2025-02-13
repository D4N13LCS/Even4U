CREATE DATABASE eventos_db;

USE eventos_db;

CREATE TABLE eventos (
    id_evento INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    cidade VARCHAR(200) NOT NULL, 
    estado VARCHAR(200) NOT NULL,
    data_evento DATE NOT NULL,
    vagas INT NOT NULL
);

CREATE TABLE inscricoes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    cpf VARCHAR(255) NOT NULL,
    id_evento INT NOT NULL,
    token VARCHAR(255) NOT NULL,
    is_confirmed BOOL DEFAULT FALSE,
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento)
);

DELIMITER //

CREATE TRIGGER atualizar_vagas
AFTER INSERT ON inscricoes
FOR EACH ROW
BEGIN 
    IF (SELECT vagas FROM eventos WHERE id_evento = NEW.id_evento) > 0 THEN
        UPDATE eventos SET vagas = vagas - 1 WHERE id_evento = NEW.id_evento;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Não há vagas disponíveis';
    END IF;
END//

DELIMITER ;
