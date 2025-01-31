import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("./api/artists.json"); // Caminho para o arquivo db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default server;
