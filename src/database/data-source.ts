import "reflect-metadata"
import { DataSource } from "typeorm"
import { agenda } from "./entity/agenda";
import { categ_serv } from "./entity/categ_serv";
import { cliente } from "./entity/cliente";
import { endereco } from "./entity/endereco";
import { post } from "./entity/post";
import { prest_serv } from "./entity/prest_serv";
import * as dotenv from 'dotenv';
import { comentario } from "./entity/comentario";
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "teste_for",
    synchronize: true,
    logging: true,
    entities: [prest_serv, cliente,post,agenda,categ_serv,endereco, comentario],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });