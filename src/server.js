const express = require('express'); //aqui importa os módulos da pasta express em node_modules

const routes = require("./routes");


const app = express(); //aqui faz a execução do express
app.use(express.json()); //informa que o conteúdo vai ser no formato JSON

app.use(routes);

const PORT = 3333; //porta de acesso ao servidor
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); //faz a impressão dessa mensagem no console