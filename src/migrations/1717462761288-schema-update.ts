import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1717462761288 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE categ_serv (
                id_serv CHAR(36) PRIMARY KEY,
                desc_serv VARCHAR(50) NOT NULL,
                nome VARCHAR(80) NOT NULL
            )
        `);

        await queryRunner.query(`
            CREATE TABLE post (
                id_post CHAR(36) PRIMARY KEY,
                cod_img VARCHAR(255) NOT NULL,
                curtidas INT NOT NULL,
                isLiked BOOLEAN NOT NULL,
                id_serv CHAR(36),
                CONSTRAINT FK_id_serv FOREIGN KEY (id_serv)
                REFERENCES categ_serv(id_serv)
            )
        `);

        await queryRunner.query(`
            CREATE TABLE agenda (
                id_agenda CHAR(36) PRIMARY KEY,
                data DATE NOT NULL,
                hora TIME NOT NULL,
                disponivel_s_n BOOL NOT NULL,
                data_exped DATE NOT NULL
            )
        `);

        await queryRunner.query(`
            CREATE TABLE cliente (
                id_cliente CHAR(36) PRIMARY KEY,
                nome VARCHAR(80),
                senha VARCHAR(50),
                telefone CHAR(11) UNIQUE,
                email VARCHAR(255) UNIQUE
            )
        `);

        await queryRunner.query(`
            CREATE TABLE endereco (
                id_endereco CHAR(36) PRIMARY KEY,
                cep CHAR(8) NOT NULL,
                numero VARCHAR(4) NOT NULL,
                cidade VARCHAR(30) NOT NULL,
                bairro VARCHAR(50) NOT NULL
            )  
        `);

        await queryRunner.query(`
            CREATE TABLE prest_serv (
                id_prest CHAR(36) PRIMARY KEY,
                cnpj_cpf VARCHAR(14) UNIQUE NOT NULL,
                senha VARCHAR(50) NOT NULL,
                nome VARCHAR(80) NOT NULL,
                telefone CHAR(11) UNIQUE NOT NULL,
                avaliacao VARCHAR(2) NOT NULL,
                url_prest VARCHAR(1000) NOT NULL,
                id_serv CHAR(36),
                id_agenda CHAR(36),
                id_post CHAR(36),
                CONSTRAINT FK_id_serv FOREIGN KEY (id_serv)
                REFERENCES categ_serv(id_serv),
                CONSTRAINT FK_id_agenda FOREIGN KEY (id_agenda)
                REFERENCES agenda(id_agenda),
                CONSTRAINT FK_id_post FOREIGN KEY (id_post)
                REFERENCES post(id_post)
            ) 
        `);

        await queryRunner.query(`
            CREATE TABLE comentario (
                id_comentario CHAR(36) PRIMARY KEY,
                conteudo VARCHAR(2000),
                id_cliente CHAR(36),
                id_post CHAR(36),
                CONSTRAINT FK_id_cliente FOREIGN KEY (id_cliente)
                REFERENCES cliente(id_cliente),
                CONSTRAINT FK_id_post FOREIGN KEY (id_post)
                REFERENCES post(id_post)
            )  
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE comentario DROP CONSTRAINT FK_id_cliente');
        await queryRunner.query('ALTER TABLE comentario DROP CONSTRAINT FK_id_post');
        await queryRunner.query('DROP TABLE comentario');
        
        await queryRunner.query('ALTER TABLE prest_serv DROP CONSTRAINT FK_id_serv');
        await queryRunner.query('ALTER TABLE prest_serv DROP CONSTRAINT FK_id_agenda');
        await queryRunner.query('ALTER TABLE prest_serv DROP CONSTRAINT FK_id_post');
        await queryRunner.query('DROP TABLE prest_serv');
        
        await queryRunner.query('DROP TABLE endereco');
        await queryRunner.query('DROP TABLE cliente');
        await queryRunner.query('DROP TABLE agenda');
        await queryRunner.query('DROP TABLE post');
        await queryRunner.query('DROP TABLE categ_serv');
    }

}
